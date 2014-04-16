Ext.define('TR.view.Column.ListColumn', {
    extend: 'Ext.Container',
    alias: 'widget.listcolumn',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start',
    },

    syncListStores: function () {
        Ext.Array.each(this.query("listtask"), function (tl) {
            tl.getStore().reload();
        });
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'container',
                layout: 'column',
                name: 'listtaskcontainer',
                items: []
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'Add Task',
                    action: 'addtask',
                    itemId: 'btnaddtask',
                    flex: 0.5
                }, {
                    xtype: 'button',
                    text: 'Add Column',
                    action: 'addcolumn',
                    itemId: 'btnaddcolumn',
                    flex: 0.5
                }]
            }]
        });

        me.callParent(arguments);
    }
});