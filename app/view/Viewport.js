Ext.define('TR.view.Viewport', {
    extend: 'Ext.Viewport',
    requires: ['TR.data.proxy.Proxy'],

    title: "Trello",
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
                xtype: 'label',
                text: 'Isto é o header'
            }, {
                xtype: 'container',
                layout: 'column',
                name: "tasklistcontainer",
                title: 'Trello',
                items: []
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'Add Task',
                    action: 'addtask',
                    flex: 0.5
                }, {
                    xtype: 'button',
                    text: 'Add Column',
                    action: 'addcolumn',
                    flex: 0.5
                }]
            }]
        });

        me.callParent(arguments);
    }
});