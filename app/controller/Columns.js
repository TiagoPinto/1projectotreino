Ext.define('TR.controller.Columns', {
    extend: 'Ext.app.Controller',

    stores: ['Columns'],
    models: ['Column'],
    views: ['Column.AddColumn'],

    refs: [
        {
            ref: "columnContainer",
            selector: "viewport [name=tasklistcontainer]"
        }
    ],

    onLaunch: function () {
        var store = Ext.StoreManager.get("Columns");

        for (var i = 1; i <= Ext.StoreManager.get("Columns").data.length; i++) {
            console.log("coluna", store.data.get(i));
            var columnView = Ext.create("TR.view.Task.List", {
                record: store.data.get(i),
                store: store,
                columnWidth: 0.33
            });
            this.getColumnContainer().add(columnView);
        };
    },

    init: function () {
        this.control({
            'viewport button[action=addcolumn]': {
                click: {
                    fn: this.addColumn,
                    element: this
                }
            }
        });
        //this.getColumnContainer().add(store.get(0));
    },

    addColumn: function (grid, record) {

        var record = Ext.create("TR.model.Column");
        var store = Ext.StoreManager.get("Columns");
        var view = Ext.widget('addcolumn', {
            record: record
        });

        view.on('addColumn', function (record) {
            if(record.data.title==""){
            Ext.Msg.alert('Please insert a Title');
                         }else{
            store.add(record);
            var columnView = Ext.create("TR.view.Task.List", {
                record: record,
                store: store,
                columnWidth: 0.33
            });

            this.getColumnContainer().add(columnView);
                             
            }}, this);

    }
});