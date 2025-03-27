const formattedData = [];

for (key in ont) {
    let thisRow = ont[key];
    delete thisRow.canonicalInputs;
    delete thisRow.canonicalOutputs;
    thisRow.uses = ont[key].uses.join(' | ');
    thisRow.opt_uses = ont[key].opt_uses.join(' | ');
    thisRow.implements = ont[key].implements.join(' | ');
    thisRow.applies = ont[key].applies.join(' | ');
    thisRow.validators = ont[key].validators.join(' | ');
    formattedData.push(thisRow);
};

const bgColorConfig = {
    'virtual': '#d37a60',
    'canonical': '#838eda',
    'abstract': '#5da87c',
    true: '#347f76',
    false: '#7b786b'
}

const valueConfig = {
    true: `+`,
    false: '-',
}

SpreadGrid(document.getElementById('grid'), {
    columns: [
        { type: 'DATA-BLOCK' },
    ],
    rows: [
        { type: 'HEADER' },
        { type: 'FILTER' },
        { type: 'DATA-BLOCK' }
    ],
    data: formattedData,
    formatting: [
        {
            column: { id: 'type' },
            style: ({ value, row, data }) => ({
                background: bgColorConfig[value] || '#ffffff',
            }),
        },
        {
            column: { id: 'multi' },
            text: ({ value, row, data }) => `${valueConfig[value] || ''}`,
            style: ({ value, row, data }) => ({
                background: bgColorConfig[value] || '#ffffff',
                foreground: '#ffffff'
            })
        }
    ]
});