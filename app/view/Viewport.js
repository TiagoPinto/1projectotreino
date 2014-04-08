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
                title: 'Trello',
                items: [{
                    xtype: 'tasklist',
                    name: 'list2',
                    title: 'ToDo Tasks',
                    columnWidth: 0.33,
                    columnHeight: 1,
                    flex: 1,
                    store: Ext.create("Ext.data.Store", {
                        autoLoad: true,
                        model: "TR.model.Task",
                        proxy: {
                            type: "store",
                            sourceStore: "Tasks"
                        },
                        filters: [{
                            property: "column",
                            value: "col1"
                    }]
                    })
                }, {
                    xtype: 'tasklist',
                    name: 'list3',
                    title: 'Doing Tasks',
                    columnWidth: 0.33,
                    columnHeight: 1,
                    flex: 1,
                    store: Ext.create("Ext.data.Store", {
                        autoLoad: true,
                        model: "TR.model.Task",
                        proxy: {
                            type: "store",
                            sourceStore: "Tasks"
                        },
                        filters: [{
                            property: "column",
                            value: "col2"
                    }]
                    })
            }, {
                    xtype: 'tasklist',
                    name: 'list1',
                    title: 'Completed Tasks',
                    columnWidth: 0.33,
                    flex: 1,
                    store: Ext.create("Ext.data.Store", {
                        autoLoad: true,
                        model: "TR.model.Task",
                        proxy: {
                            type: "store",
                            sourceStore: "Tasks"
                        },
                        filters: [{
                            property: "column",
                            value: "col3"
                    }]
                    })
            }]
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