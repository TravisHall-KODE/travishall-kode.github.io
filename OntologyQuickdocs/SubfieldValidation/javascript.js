const gridContainer = document.getElementById("subfieldTypes");
const orderedTypes = [
    'aggregation_descriptor',
    'aggregation',
    'descriptor',
    'component',
    'measurement_descriptor',
    'measurement',
    'point_type'
];

const subfieldStates = {};
orderedTypes.forEach(sft => {

    const typeUl = document.createElement('ul');

    for (sf in sfs[sft]) {
        subfieldStates[sf] = {
            'type': sft,
            'def': sfs[sft][sf],
            'checked': false
        }
        const input = document.createElement('input');
        input.setAttribute('class', 'sfCheckbox');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('onClick', 'update();');
        input.setAttribute('name', sf);

        const label = document.createElement('label');
        label.appendChild(input);
        label.innerHTML = label.innerHTML + sf;

        const li = document.createElement('li');
        li.appendChild(label);

        typeUl.appendChild(li);
    }

    const typeSummary = document.createElement("summary");
    typeSummary.innerHTML = sft;

    const typeList = document.createElement("details");
    typeList.setAttribute('class', 'dropdown');
    typeList.setAttribute('id', `${sft}List`);
    typeList.appendChild(typeSummary);
    typeList.appendChild(typeUl);

    const typeLabel = document.createElement("label");
    typeLabel.innerHTML = sft;
    gridContainer.appendChild(typeList);
})

function update () {
    Array.from(document.getElementsByClassName('sfCheckbox')).forEach(elem => {
        if (elem.checked) {
            subfieldStates[elem.name].checked = true;
        } else {
            subfieldStates[elem.name].checked = false;
        }
    });
    validateCheckedField();
}

function validateCheckedField() {
    //First, get counts of each subfield type, and build the actual full field:
    const fieldObj = [[],[],[],[],[],[],[]];
    const validStateData = {};
    for (sf in subfieldStates) {
        if (!(validStateData[`${subfieldStates[sf].type}_ct`] || false)) {
            validStateData[`${subfieldStates[sf].type}_ct`] = 0;
        }
        if (subfieldStates[sf].checked) {
            validStateData[`${subfieldStates[sf].type}_ct`]++;
            fieldObj[orderedTypes.indexOf(subfieldStates[sf].type)].push(sf);
        }
    }
    let fullField = ``;
    fieldObj.forEach(type => {
        if (type.length > 0) {fullField = `${fullField}_${type.join('_')}`}
    });
    fullField = fullField.replace(/^\_/, '');
    //Next, determine if aggregation_descriptor or measurement are required:
    //If aggregation_descriptor is used, it implied aggregation is also required
    if (validStateData['aggregation_ct']) {
        validStateData['require_aggregation_descriptor'] = true;
    } else {validStateData['require_aggregation_descriptor'] = false}

    if (validStateData['aggregation_descriptor_ct']) {
        validStateData['require_aggregation'] = true;
    } else {validStateData['require_aggregation'] = false}

    //measurement is required for any numeric field aside from count; point_type doesn't guarantee data type, so this is vague. Calling out separately as a possibility in validation result without failing.
    if (subfieldStates['counter'] || subfieldStates['alarm'] || subfieldStates['count'] || subfieldStates['label'] || subfieldStates['mode'] || subfieldStates['status']) {
        validStateData['require_measurement'] = false
    } else {validStateData['require_measurement'] = true}

    let validationMessages = [];
    let validationPassed = true;
    if (!validStateData['point_type_ct']) {
        validationPassed = false;
        validationMessages.push('point_type is a required subfield!');
    }
    if (validStateData['require_aggregation_descriptor'] && (!validStateData['aggregation_descriptor_ct'])) {
        validationPassed = false;
        validationMessages.push('aggregation_descriptor is a required subfield when there is an aggregation subfield!');
    }
    if (validStateData['require_aggregation'] && (!validStateData['aggregation_ct'])) {
        validationPassed = false;
        validationMessages.push('aggregation is a required subfield when there is an aggregation_descriptor subfield!');
    }

    if (validStateData['aggregation_descriptor_ct'] > 1) {
        validationPassed = false;
        validationMessages.push('Cannot have more than one aggregation_descriptor subfield!');
    }
    if (validStateData['aggregation_ct'] > 1) {
        validationPassed = false;
        validationMessages.push('Cannot have more than one aggregation subfield!');
    }
    if (validStateData['descriptor_ct'] > 10) {
        validationPassed = false;
        validationMessages.push('Cannot have more than ten descriptor subfields!');
    }
    if (validStateData['component_ct'] > 10) {
        validationPassed = false;
        validationMessages.push('Cannot have more than ten component subfields!');
    }
    if (validStateData['measurement_descriptor_ct'] > 1) {
        validationPassed = false;
        validationMessages.push('Cannot have more than one measurement_descriptor subfield!');
    }
    if (validStateData['measurement_ct']> 1) {
        validationPassed = false;
        validationMessages.push('Cannot have more than one measurement subfield!');
    }
    if (validStateData['point_type_ct']> 1) {
        validationPassed = false;
        validationMessages.push('Cannot have more than one point_type subfield!');
    }

    if (validStateData['require_measurement'] && !validStateData['measurement_ct']) {
        validationMessages.push(`measurement is a required subfield for numeric fields of point_type other than count/counter; Verify data format isn't numeric! (Not a failure; Cannot verify data format)`);
    }
    


    if (validationPassed) {
        document.getElementById('validationResult').innerHTML = `"${fullField}" Passed Validation!`;
        document.getElementById('validationResult').setAttribute('class', 'result pico-background-jade-500');
        document.getElementById('validationResult').setAttribute('data-tooltip', validationMessages.join('     '));
    } else {
        document.getElementById('validationResult').innerHTML = `"${fullField}" Failed Validation!`;
        document.getElementById('validationResult').setAttribute('class', 'result pico-background-red-500');
        document.getElementById('validationResult').setAttribute('data-tooltip', validationMessages.join('     '));
    }

/*
Subfield rules:
    aggregation_descriptor:
        Allowed: 1
        Required: Yes if aggregation used, no otherwise
    aggregation:
        Allowed: 1
        Required: No
    descriptor:
        Allowed: 10
        Required: No
    component:
        Allowed: 10
        Required: No
    measurement_descriptor:
        Allowed: 1
        Required: No
    measurement:
        Allowed: 1
        Required: Yes if non-'count'/'counter' numeric point type, no otherwise
    point_type:
        Allowed: 1
        Required: Yes
*/
}

update();