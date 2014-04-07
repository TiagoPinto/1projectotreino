Ext.define('TR.view.Viewport', {
    extend: 'Ext.Viewport',    
    requires: ['TR.data.proxy.Proxy'],

    title: "Trello",
    layout: {
        type: 'border'
        //align: 'stretch'
    },
    
    syncListStores: function () {
        Ext.Array.each(this.query("tasklist"), function(tl) {
            tl.getStore().reload();
        });
    },
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [{
                region: 'north',
                xtype: 'label',
                text: 'Isto é o header'
            }, {
                region: 'center',
                xtype: 'tasklist',
                name: 'list2',
                title: 'ToDo Tasks',
                flex: 2,
                store: Ext.create("Ext.data.Store", {
                    autoLoad: true,
                    model: "TR.model.Task",
                    proxy: {
                        type: "store",
                        sourceStore: "Tasks"
                    },
                    filters: [{property: "column", value: "col1"}]
                })
            }, {
                region: 'west',
                xtype: 'tasklist',
                name: 'list1',
                title: 'Doing Tasks',
                flex: 1,
                store: Ext.create("Ext.data.Store", {
                    autoLoad: true,
                    model: "TR.model.Task",
                    proxy: {
                        type: "store",
                        sourceStore: "Tasks"
                    },
                    filters: [{property: "column", value: "col2"}]
                })
            }, {
                region: 'east',
                xtype: 'tasklist',
                name: 'list3',
                title: 'Completed Tasks',
                flex: 1,
                store: Ext.create("Ext.data.Store", {
                    autoLoad: true,
                    model: "TR.model.Task",
                    proxy: {
                        type: "store",
                        sourceStore: "Tasks"
                    },
                    filters: [{property: "column", value: "col3"}]
                })
            }, {
                region: 'south',
                xtype: 'button',
                text: 'Save',
                action: 'save'
            }]
        });
        
        me.callParent(arguments);
    }
});