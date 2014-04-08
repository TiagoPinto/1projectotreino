Ext.define('TR.controller.Columns', {
    extend: 'Ext.app.Controller',

    stores: ['Columns'],
    models: ['Column'],
    views: ['Column.AddColumn'],

    refs: [
        {
            ref: "columnContainer",
            selector: "viewport > [name=tasklistcontainer]"
        }
    ],

    init: function () {
        this.control({
            'viewport button[action=addcolumn]': {
                click: {
                    fn: this.addColumn,
                    element: this
                }
            }
        });
    },

    addColumn: function (grid, record) {
        var record = Ext.create("TR.model.Column");
        var store = Ext.StoreManager.get("Columns");

        //debugger;
        var view = Ext.widget('addcolumn', {
            record: record
        });

        view.on('addColumn', function (record) {
            store.add(record);

            var columnView = Ext.create("TR.view.Task.List", {
                record: record,
                store: store,
                columnWidth: 0.33
            });

            this.getColumnContainer().add(columnView);
        }, this);
    }
});