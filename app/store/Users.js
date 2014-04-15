Ext.define('TR.store.Users', {
    extend: 'Ext.data.Store',
    model: 'TR.model.User',

    proxy: {
        type: 'memory'
    },

    data: [
        {
            "id": "1",
            "username": "teste",
            "password": "teste"
        },
        {
            "id": "2",
            "username": "123",
            "password": "123"
        }
    ]
});