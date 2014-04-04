Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    fields: ['name', 'email'],
    sorters: ['name', 'email'],
});