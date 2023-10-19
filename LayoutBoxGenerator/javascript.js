let configObject = {
    "groupTitle": "Default Title",
    "titleWidth": 4,
    "pointWidth": 3,
    "pointData": [
        {
            "pointTitle": "Point Name 1",
            "writable": false
        },
        {
            "pointTitle": "Point Name 2",
            "writable": false
        },
        {
            "pointTitle": "Point Name 3",
            "writable": false
        },
    ]
};

function updateConfigFromForm() {
    updatePoints();
    const newConfigObject = {
        "groupTitle": document.getElementById("groupTitle").value,
        "titleWidth": parseInt(document.getElementById("titleWidth").value),
        "pointWidth": parseInt(document.getElementById("pointWidth").value),
        "pointData": []
    };
    const pointCount = document.getElementById("pointCount").value;
    for (i=1;i <= pointCount; i++) {
        const pointTitleId = `pointTitle${i}`;
        const writableId = `writable${i}`;
        const objectElement = {
            "pointTitle": document.getElementById(pointTitleId).value,
            "writable": document.getElementById(writableId).checked
        }
        newConfigObject.pointData.push(objectElement);
    }
    configObject = newConfigObject;
}

function generatePointField(num) {
    //Point Title Label
    const titleLabel = document.createElement("label");
    const titleLabelText = document.createTextNode(`Point ${num}:`);
    titleLabel.appendChild(titleLabelText);
    titleLabel.setAttribute("class", "form-label dark");
    titleLabel.setAttribute("for", `pointTitle${num}`);

    //Point Title Field
    const titleText = document.createElement("input");
    titleText.setAttribute("class", "form-text dark");
    titleText.setAttribute("id", `pointTitle${num}`);
    titleText.setAttribute("value", `Point Name ${num}`);

    //Writable Label
    const writableLabel = document.createElement("label");
    const writableLabelText = document.createTextNode("Writable?");
    writableLabel.appendChild(writableLabelText);
    writableLabel.setAttribute("class", "form-label dark");
    writableLabel.setAttribute("for", `writable${num}`);

    //Writable Checkbox
    const writableCheckbox = document.createElement("input");
    writableCheckbox.setAttribute("class", "form-check-input");
    writableCheckbox.setAttribute("type", "checkbox");
    writableCheckbox.setAttribute("value", "");
    writableCheckbox.setAttribute("id", `writable${num}`);

    //Full Container
    const pointContainer = document.createElement("div");
    const lineBreak = document.createElement("br");
    pointContainer.setAttribute("id", `point${num}`);
    pointContainer.appendChild(titleLabel);
    pointContainer.appendChild(titleText);
    pointContainer.appendChild(writableLabel);
    pointContainer.appendChild(writableCheckbox);
    pointContainer.appendChild(lineBreak);

    //Return constructed element
    return pointContainer;
}

function updatePoints() {
    const formPointCount = document.getElementById("pointCount").value;
    const pointLabels = document.getElementById("pointLabels");
    console.log(pointLabels.childElementCount);
    if (formPointCount != pointLabels.childElementCount) {
        pointLabels.innerHTML = '';
        for (i=1; i <= formPointCount; i++) {
            pointLabels.appendChild(generatePointField(i));
        }
    }
}

function userCopyData() {
    var textArea = document.getElementById("layoutText");
    textArea.select();
    document.execCommand("copy");
}

//No styling, only layout params, useful to condense some later code to be less "gross"
function createGroupElement(originX, originY, width, height) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    element.setAttribute("viewbox", `${originX} ${originY} ${width} ${height}`);
    element.setAttribute("x", originX);
    element.setAttribute("y", originY);
    element.setAttribute("width", width);
    element.setAttribute("height", height);
    return element;
}
function createRectElement(originX, originY, width, height) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    element.setAttribute("x", originX);
    element.setAttribute("y", originY);
    element.setAttribute("width", width);
    element.setAttribute("height", height);
    return element;
}
function createTextElement(originX, originY) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    element.setAttribute("x", "50%");
    element.setAttribute("y", "50%");
    element.setAttribute("dominant-baseline", "middle");
    element.setAttribute("text-anchor", "middle");
    return element;
}

function updateGraphic() {
    updateConfigFromForm();
    var svgOutput = document.getElementById("layoutBoxes");
    var svgText = document.getElementById("layoutText");
    //Dimensions are based on a 100x100 grid, and elements will align to this
    //To still snap perfectly to the grid and not cut off stroke lines, an extra 100 is added to each side
    //An additional 100 added to height to account for the title block
    const svgWidth = 200 + ((configObject.pointWidth + configObject.titleWidth)*100);
    const svgHeight = 300 + (configObject.pointData.length * 100);
    const layoutDimensions = [0, 0, svgWidth, svgHeight];
    const svgDimensionsString = `0 0 ${svgWidth} ${svgHeight}`;
    svgOutput.innerHTML = '';
    svgOutput.setAttribute("viewBox", svgDimensionsString);

    const titleGroup = createGroupElement("100", "100", svgWidth-200, "100");
    const titleRect = createRectElement("2", "2", svgWidth-204, "96");
    titleRect.setAttribute("style", "fill:#ced4da;stroke-width:8;stroke:rgb(0,0,0)");
    titleRect.setAttribute("rx", "15");
    titleRect.setAttribute("ry", "15");
    const titleText = createTextElement("0", "0");
    titleText.innerHTML = configObject.groupTitle;
    titleText.setAttribute("style", "fill:#000000;font-size:3.5em;font-family:arial");
    titleGroup.appendChild(titleRect);
    titleGroup.appendChild(titleText);
    svgOutput.appendChild(titleGroup);

    for (i=0; i < configObject.pointData.length; i++) {
        const pointGroup = createGroupElement("100", (i + 2)*100, (configObject.titleWidth*100) + (configObject.pointWidth*100), "100");

        const pointTitleBox = createRectElement("2", "2", (configObject.titleWidth*100)-4, "96");
        pointTitleBox.setAttribute("style", "fill:rgb(255,255,255);stroke-width:8;stroke:rgb(0,0,0)");
        pointTitleBox.setAttribute("rx", "15");
        pointTitleBox.setAttribute("ry", "15");
        pointGroup.appendChild(pointTitleBox);
        
        const pointBox = createRectElement((configObject.titleWidth*100)+2, "2", (configObject.pointWidth*100)-4, "96");
        pointBox.setAttribute("style", "fill:rgb(255,255,255);stroke-width:8;stroke:rgb(0,0,0)");
        pointBox.setAttribute("rx", "15");
        pointBox.setAttribute("ry", "15");
        if (configObject.pointData[i].writable) {
            pointBox.setAttribute("style", "fill:#ffffff;stroke-width:10;stroke:#2b8a3e");
        }
        pointGroup.appendChild(pointBox);

        const pointNameText = createTextElement("0", "0");
        const pointTextGroup = createGroupElement("0", "0", (configObject.titleWidth*100), "100");
        pointNameText.innerHTML = configObject.pointData[i].pointTitle;
        pointNameText.setAttribute("style", "fill:rgb(0,0,0);font-size:2.5em;font-family:arial");
        pointTextGroup.appendChild(pointNameText);
        pointGroup.appendChild(pointTextGroup);

        svgOutput.appendChild(pointGroup);
    }
    var s = new XMLSerializer();
    var svgStr = s.serializeToString(svgOutput);
    svgText.innerHTML = svgStr;
}