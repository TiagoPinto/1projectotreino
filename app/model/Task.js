Ext.define('TR.model.Task', {
    extend: 'Ext.data.Model',
    fields: ['column', 'title','discription'],
    sorters: ['column', 'title','discription'],
});