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
        },
        {
            "id": "2",
            "title": 'Doing Tasks',
        },
        {
            "id": "3",
            "title": 'Completed Tasks',
        }
    ]
});