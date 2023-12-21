const visualizationParameters = {
    "showPointFolders": false,
    "type": "treemap" //Use either "treemap" or "sunburst"
};

function loadData() {
    const fileInputElem = document.getElementById('inFile');
    const textInputElem = document.getElementById('inText');
    let csvText = textInputElem.value;
    if (csvText.length == 0) {
        //Load file input
        csvText = 'fromFile';
        //Proceed with validation as text
        testResult = validateCsvText(csvText);
        if (testResult.valid) {
            //Proceed with visualization
            generateVisualization(testResult.data);
        } else {
            //Specify error
            alert(`CSV failed validation due to:\n${testResult.cause}`);
        }
    } else {
        //Proceed with text validation
        testResult = validateCsvText(csvText);
        if (testResult.valid) {
            //Proceed with visualization
            generateVisualization(testResult.data);
        } else {
            //Specify error
            alert(`CSV failed validation due to:\n${testResult.cause}`);
        }
    }
}

function validateCsvText(textIn) {
    const validationParameters = {
        "expCols": 3,
        "expHeaders": "Station Path,Component Name,Component Type",
        "rowSplit": "\n",
        "colSplit": ","
    }
    if (textIn.indexOf(validationParameters.expHeaders) == 0) {
        //Found Expected Headers

        //Perform splits to get 2d array from csv string
        splitArr1 = textIn.split(validationParameters.rowSplit);
        splitArr2 = [];
        splitArr1.forEach(arr1Entry => {
            if (arr1Entry.length != 0) {
                splitArr2.push(arr1Entry.split(validationParameters.colSplit));
            }
        });
        //Validate row lengths within 2d array
        let passed = true;
        let failedStrings = '';
        splitArr2.forEach(row => {
            if (row.length != validationParameters.expCols) {
                passed = false;
                failedStrings = `${failedStrings}${row.join(",")}\n\n`;
            }
        });
        if (passed) {
            return {
                "valid": true,
                "data": splitArr2
            }
        }
        else {
            return {
                "valid": false,
                "cause": `The following invalid row(s) were found:\n\n${failedStrings}`,
                "data": textIn
            }
        }
    }
    else {
        return {
            "valid": false,
            "cause": "Expected Headers weren't found!\nMake sure you're using the query noted below in the station: It specifies column headers!",
            "data": textIn
        }
    }
}
function fixSlotpath(slotpath) {
    if (!visualizationParameters.showPointFolders) {
        return slotpath.replaceAll("/points/", "/");
    }
    else {
        return slotpath;
    }
}

function filterRoot(inText) {
    if (inText.includes('/')) {
        return inText;
    } else {
        return '';
    }
}
function generateVisualization(data) {
    //Remove the form, since it's no longer required after valid data is made available
    const dataForm = document.getElementById('dataForm');
    dataForm.remove();
    const vizFrame = document.getElementById('finalChart');
    vizFrame.setAttribute('style', 'height:100%;width:100%;');
    //Iterate across all rows, storing req'd data
    //Networks will be the root, with null parents
    //Verified by type containing "network"
    //All other subfolders except "points" will be added, and "points" will be flattened out before parsing
    let idsArr = [];
    let labelsArr = [];
    let parentsArr = [];
    let typesArr = [];
    let colorsArr = [];
    data.forEach(node => {
        //0 - slotpath
        //1 - name
        //2 - type
        if (node[0].includes('/Drivers/')) {
            fixedPath = fixSlotpath(node[0]);
            splitPath = fixedPath.replace('slot:/Drivers/', '').split('/');
            let builtPath = [];
            pathLen = splitPath.length;
            splitPath.forEach((pathPart, idx) => {
                builtPath.push(pathPart);
                const partialPath = builtPath.join('/');
                if (idx + 1 == pathLen) {
                    //If this is the final node in our path, we know it should be added, with the proper type from the row
                    idsArr.push(partialPath);
                    labelsArr.push(node[1].replaceAll("$2d", "-").replaceAll("$20", " "));
                    parentsArr.push(filterRoot(partialPath).replaceAll(/\/[^\/]*$/g, ""));
                    typesArr.push(node[2]);
                } else {
                    //Otherwise, check if this individual node has been added already, and if not, add it with a "folder" type
                    if (!idsArr.includes(partialPath)) {
                        idsArr.push(partialPath);
                        labelsArr.push(pathPart.replaceAll("$2d", "-").replaceAll("$20", " "));
                        parentsArr.push(filterRoot(partialPath).replaceAll(/\/[^\/]*$/g, ""));
                        typesArr.push('folder');
                    }
                }
            })
        }
    });
    typeLookups = {
        "string": "#606060",
        "boolean": "#57a760",
        "enum": "#fbb040",
        "numeric": "#b78fc7",
        "device": "#294791",
        "network": "#2fb9e4",
        "folder": "#e2e2e2"
    }
    typesArr.forEach((type, idx) => {
        let color = '';
        for (typePiece in typeLookups) {
            if (type.toLowerCase().indexOf(typePiece) != -1) {
                color = typeLookups[typePiece];
            }
        }
        console.log(color);
        colorsArr.push(color);
    })
    const vizData = [{
        type: "treemap",
        ids: idsArr,
        labels: labelsArr,
        parents: parentsArr,
        marker: {colors: colorsArr}
    }];
    var layoutCfg = {};
    Plotly.newPlot('finalChart', vizData, layoutCfg);
}