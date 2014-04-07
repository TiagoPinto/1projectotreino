Ext.define('TR.model.Task', {
    extend: 'Ext.data.Model',
    fields: ['title', 'description'],
    sorters: ['title', 'description'],
});