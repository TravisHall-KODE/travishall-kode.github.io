console.log(ont);

const fields = {};

const graphData = [];

function addEntity(entObj) {
    graphData.push(
        {
            data: {
                id: entObj.name
            },
            classes: [entObj.type]
        }
    );
    entObj.uses.forEach(field => {
        fields[field] = true;
        graphData.push(
            {
                data: {
                    id: `${entObj.name}-uses-${field}`,
                    source: entObj.name,
                    target: field
                },
                classes: ['uses']
            }
        )
    });
    entObj.opt_uses.forEach(field => {
        fields[field] = true;
        graphData.push(
            {
                data: {
                    id: `${entObj.name}-opt_uses-${field}`,
                    source: entObj.name,
                    target: field
                },
                classes: ['opt_uses']
            }
        )
    });
    entObj.implements.forEach(abstract => {
        graphData.push(
            {
                data: {
                    id: `${entObj.name}-implements-${abstract}`,
                    source: entObj.name,
                    target: abstract
                },
                classes: ['implements']
            }
        )
    });
    entObj.applies.forEach(abstract => {
        graphData.push(
            {
                data: {
                    id: `${entObj.name}-applies-${abstract}`,
                    source: entObj.name,
                    target: abstract
                },
                classes: ['applies']
            }
        )
    });
}

function crawlTree(entityName) {
    addEntity(ont[entityName]);
    ont[entityName].implements.forEach(abstract => {
        crawlTree(abstract);
    })
    ont[entityName].applies.forEach(abstract => {
        crawlTree(abstract);
    })
}

const targetCanonical = 'vav';
for (key in ont) {
    if (key == targetCanonical) {
        crawlTree(key);
    }
}


for (key in fields) {
    graphData.push({
        data: { id: key },
        classes: ['field']
    })
}

var cy = cytoscape({
    container: document.getElementById('graphContainer'),
    elements: graphData,
    style: [
        {
            selector: '.canonical',
            style: {
                'label': 'data(id)',
                'background-color': '#eae4bf',
                'color': '#222',
                'text-rotation': '-15deg'
            }
        },
        {
            selector: '.abstract',
            style: {
                'label': 'data(id)',
                'background-color': '#5da87c',
                'color': '#222',
                'text-rotation': '-15deg'
            }
        },
        {
            selector: '.field',
            style: {
                'label': 'data(id)',
                'background-color': '#1c5662',
                'color': '#222',
                'text-rotation': '-15deg'
            }
        },
        {
            selector: '.virtual',
            style: {
                'label': 'data(id)',
                'background-color': '#d37a60',
                'color': '#222',
                'text-rotation': '-15deg'
            }
        },

        {
            selector: '.uses',
            style: {
                'label': 'U',
                'color': '#ccc',
                'width': 4,
                'line-color': '#78286e',
                'target-arrow-color': '#37175a',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
        },
        {
            selector: '.opt_uses',
            style: {
                'label': 'O',
                'color': '#ccc',
                'width': 4,
                'line-color': '#1c5662',
                'target-arrow-color': '#0a2f47',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
        },
        {
            selector: '.implements',
            style: {
                'label': 'I',
                'color': '#ccc',
                'width': 4,
                'line-color': '#78286e',
                'target-arrow-color': '#37175a',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
        },
        {
            selector: '.applies',
            style: {
                'label': 'A',
                'color': '#ccc',
                'width': 4,
                'line-color': '#1c5662',
                'target-arrow-color': '#0a2f47',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
        },
    ],
    layout: {
        //name: 'breadthfirst',
        //directed: true

        name: 'cose',
        nestingFactor: 1,
        idealEdgeLength: function( edge ){ return 128; },
        nodeOverlap: 1,
        nodeRepulsion: function( node ){ return 4096; },
    }
});