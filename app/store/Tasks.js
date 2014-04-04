Ext.define('TR.store.Tasks', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Task',
    autoLoad: true,
    requires: [
        'Ext.data.proxy.LocalStorage',
    ],

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            successProperty: 'success'
        }
    }
});