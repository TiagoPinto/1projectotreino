Ext.define('TR.view.Task.ListColumns', {
    extend: 'Ext.Container',
    alias: 'widget.mainpage',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start',
    },

    syncListStores: function () {
        Ext.Array.each(this.query("tasklist"), function (tl) {
            tl.getStore().reload();
        });
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'container',
                items: [{
                    xtype: 'label',
                    text: 'Aqui está o header'
                }]
            }, {
                xtype: 'container',
                layout: 'column',
                name: 'tasklistcontainer',
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