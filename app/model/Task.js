Ext.define('TR.model.Task', {
    extend: 'Ext.data.Model',
    fields: ['columm', 'title','discription'],
    sorters: ['columm', 'title','discription'],
});