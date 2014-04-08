Ext.define('TR.store.Columns', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Column',

    proxy: {
        type: 'memory'
    },

    data: [
        {
            "id": "1",
            "title": 'ToDo Tasks',
            "column": 'col1'
        },
        {
            "id": "2",
            "title": 'Doing Tasks',
            "column": 'col2'
        },
        {
            "id": "3",
            "title": 'Completed Tasks',
            "column": 'col3'
        }
    ]
});