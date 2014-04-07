Ext.define('TR.model.Task', {
    extend: 'Ext.data.Model',
    fields: ['title', 'description','column'],
    sorters: ['title', 'description','column'],
});