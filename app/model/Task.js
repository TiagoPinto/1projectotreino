Ext.define('TR.model.Task', {
    extend: 'Ext.data.Model',
    fields: ['name', 'email'],
    sorters: ['name', 'email'],
});