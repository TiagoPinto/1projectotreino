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
            "column": 'ToDo Tasks'
        },
        {
            "id": "2",
            "title": 'teste2',
            "description": "tommy@sencha.com",
            "column": 'Doing Tasks'
        },
        {
            "id": "3",
            "title": 'teste3',
            "description": "tommy@sencha.com",
            "column": 'Completed Tasks'
        },
        {
            "id": "4",
            "title": 'teste4',
            "description": "tommy@sencha.com",
            "column": 'ToDo Tasks'
        }
    ]
});