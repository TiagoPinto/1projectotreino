Ext.define('TR.view.Task.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',
    
    store: 'Tasks',

    initComponent: function() {

        this.columns = [
            {header: 'Coluna',  dataIndex: 'columm',  flex: 1},
            {header: 'Título', dataIndex: 'title', flex: 1},
            {header: 'Descrição', dataIndex: 'discription', flex: 1}
        ];

        this.callParent(arguments);
    }
});