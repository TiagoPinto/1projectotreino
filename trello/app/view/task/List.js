Ext.define('TR.view.task.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'All Tasks',

    store: 'Tasks',

    initComponent: function() {

        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1},
            {header: 'Description', dataIndex: 'description', flex: 1}
        ];
        
        this.buttons = [{
        text: 'Remove', action :'remove'
        }
        ];

        this.callParent(arguments);
    }
});