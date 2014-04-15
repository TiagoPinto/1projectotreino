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
        Ext.Array.each(this.query("listtask"), function (tl) {
            tl.getStore().reload();
        });
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'container',
                items: [{
                    xtype: 'login'
                }]
            }]
        });

        me.callParent(arguments);
    }
});