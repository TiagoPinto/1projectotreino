Ext.define('TR.view.Task.ListTask', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listtask',

    queryMode: 'local',

    constructor: function (config) {
        var columnsStore = config.store;

        config.store = Ext.create("Ext.data.Store", {
            autoLoad: true,
            model: "TR.model.Task",
            proxy: {
                type: "store",
                sourceStore: "Tasks"
            },
            filters: [{
                property: "column",
                value: config.record.get("title")
            }]
        });
        
        this.title = config.record.get("title");

        this.callParent(arguments);

        this.columnsStore = columnsStore;
        this.record = config.record;

        if (columnsStore) {
            columnsStore.on("update", this.storeUpdated, this);
        }

    },

    storeUpdated: function (store, record, operation) {
        if (store === this.columnsStore && record === this.record) {
            console.log("must update filters");
        }
    },

    initComponent: function () {

        this.columns = [
            {
                header: 'Title',
                dataIndex: 'title',
                flex: 1
            },
            {
                header: 'Description',
                dataIndex: 'description',
                flex: 1
            },
            {
                header: 'Column Number',
                dataIndex: 'column',
                flex: 1
            }
        ];

        this.callParent(arguments);
    },

    addTask: function (record) {
        this.getStore().add(record);
    }
});