Ext.define('TR.view.Column.Column' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.columnlist',

    title: 'All Columns',
    queryMode: 'local',

    initComponent: function() {

        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1},
            {header: 'Task List', dataIndex: 'title', flex: 1},
            {header: 'Column Number', dataIndex: 'column', flex: 1}
        ];

        this.callParent(arguments);
    },
    
});