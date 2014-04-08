Ext.define('TR.view.Task.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasklist',

    title: 'All Tasks',
    queryMode: 'local',

    initComponent: function() {

        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1},
            {header: 'Description', dataIndex: 'description', flex: 1},
            {header: 'Column Number', dataIndex: 'column', flex: 1}
        ];

        this.callParent(arguments);
    },
    
    addTask: function(record) {
        this.getStore().add(record);   
    }
});