Ext.define('TR.store.Tasks', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Task',

    proxy: {
        type: 'memory'
    },

    data: [
        {
            "id": "1",
            "title": 'Teste',
            "description": "ed@sencha.com",
            "column": 'col1'
        },
        {
            "id": "2",
            "title": 'teste2',
            "description": "tommy@sencha.com",
            "column": 'col2'
        },
        {
            "id": "3",
            "title": 'teste3',
            "description": "tommy@sencha.com",
            "column": 'col3'
        },
        {
            "id": "4",
            "title": 'teste4',
            "description": "tommy@sencha.com",
            "column": 'col1'
        }
    ]
});