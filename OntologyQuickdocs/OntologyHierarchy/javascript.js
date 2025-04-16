//First, check for URL parameters for the quick, UI-less filtering implementation
const expectedParams = {
    "canonicalName": "",
    "includeImplements": "true",
    "includeVirtuals": "true"
}
const searchParams = new URLSearchParams(window.location.search);
for (key in expectedParams) {
    if (searchParams.has(key)) {
        expectedParams[key] = searchParams.get(key);
    }
}

console.log(expectedParams);

//Next, grab the basic ontology data and reformat it to work more easily with a hierarchy view, including duplicating abstracts/fields where appropriate
//We do this by finding each canonical type, then recursively traversing down the entire tree over all implemented/applied abstracts.
const ontTree = {};
function crawlTreeData(entity) {
    const thisEntFormatted = {
        'name': entity.name,
        'type': entity.type,
        'multi': entity.multi,
        'description': entity.description,
        'validators': entity.validators,
        'uses': entity.uses,
        'opt_uses': entity.opt_uses,
        'implements': [],
        'applies': []
    }
    if (expectedParams.includeImplements == 'true') {
        entity.implements.forEach(impEnt => {
            if (expectedParams.includeVirtuals == 'true' || ont[impEnt].type != 'virtual') {
                thisEntFormatted.implements.push(
                    crawlTreeData(ont[impEnt])
                );
            }
        })
    }
    entity.applies.forEach(appEnt => {
        if (expectedParams.includeVirtuals == 'true' || ont[appEnt].type != 'virtual') {
            thisEntFormatted.applies.push(
                crawlTreeData(ont[appEnt])
            );
        }
    });
    return thisEntFormatted;
}
for (key in ont) {
    if (ont[key].type == 'canonical' && (expectedParams.canonicalName == ont[key].name || expectedParams.canonicalName == "")) {
        ontTree[key] = crawlTreeData(ont[key]);
    }
}

//Now that we have the ontology data reformatted to fit our needs, we can recursively crawl it in a similar way to build out our HTML elements
function crawlTreeHtml(entity, parentElemId) {
    const entElem = document.createElement('li');
    entElem.setAttribute('class', `${entity.type}`);
    entElem.setAttribute('id', `${parentElemId}-${entity.name}`);
    const nameElem = document.createElement('div');
    nameElem.setAttribute('class', 'name');
    nameElem.innerHTML = `${entity.name} (${entity.type})`;
    entElem.appendChild(nameElem);
    const descElem = document.createElement('div');
    descElem.setAttribute('class', 'description');
    descElem.innerHTML = entity.description;
    entElem.appendChild(descElem);
    if (entity.uses.length > 0) {
        const usesUl = document.createElement('ul');
        usesUl.setAttribute('class', 'uses');
        const usesUlTxt = document.createElement('li');
        usesUlTxt.setAttribute('class', 'subName');
        usesUlTxt.innerHTML = 'Uses:';
        usesUl.appendChild(usesUlTxt);
        entity.uses.forEach(use => {
            const fieldElem = document.createElement('li');
            fieldElem.setAttribute('id', `${parentElemId}-${entity.name}-u-${use}`);
            fieldElem.setAttribute('class', 'field name');
            fieldElem.innerHTML = use;
            usesUl.appendChild(fieldElem);
        })
        entElem.appendChild(usesUl);
    }
    if (entity.opt_uses.length > 0) {
        const opt_usesUl = document.createElement('ul');
        opt_usesUl.setAttribute('class', 'opt_uses');
        const opt_usesUlTxt = document.createElement('li');
        opt_usesUlTxt.setAttribute('class', 'subName');
        opt_usesUlTxt.innerHTML = 'Opt Uses:';
        opt_usesUl.appendChild(opt_usesUlTxt);
        entity.opt_uses.forEach(opt_use => {
            const fieldElem = document.createElement('li');
            fieldElem.setAttribute('id', `${parentElemId}-${entity.name}-u-${opt_use}`);
            fieldElem.setAttribute('class', 'field name');
            fieldElem.innerHTML = opt_use;
            opt_usesUl.appendChild(fieldElem);
        })
        entElem.appendChild(opt_usesUl);
    }
    if (entity.applies.length > 0) {
        const appliesUl = document.createElement('ul');
        appliesUl.setAttribute('class', 'applies');
        const appliesUlTxt = document.createElement('li');
        appliesUlTxt.setAttribute('class', 'subName');
        appliesUlTxt.innerHTML = 'Applies:';
        appliesUl.appendChild(appliesUlTxt);
        entity.applies.forEach(appEnt => {
            appliesUl.appendChild(crawlTreeHtml(appEnt, `${parentElemId}-a-${entity.name}`));
        })
        entElem.appendChild(appliesUl);
    }
    if (entity.implements.length > 0) {
        const implementsUl = document.createElement('ul');
        implementsUl.setAttribute('class', 'implements');
        const implementsUlTxt = document.createElement('li');
        implementsUlTxt.setAttribute('class', 'subName');
        implementsUlTxt.innerHTML = 'Implements:';
        implementsUl.appendChild(implementsUlTxt);
        entity.implements.forEach(impEnt => {
            implementsUl.appendChild(crawlTreeHtml(impEnt, `${parentElemId}-i-${entity.name}`));
        })
        entElem.appendChild(implementsUl);
    }
    return entElem;
}
const treeRoot = document.getElementById('treeContainer');
for (key in ontTree) {
    treeRoot.appendChild(crawlTreeHtml(ontTree[key], 'treeContainer'));
}