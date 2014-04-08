Ext.define('TR.controller.Columns', {
    extend: 'Ext.app.Controller',

    stores: ['Columns'],
    models: ['Column'],
    views: ['Column.AddColumn'],

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
        Ext.StoreManager.get("Columns").add(record);
        //debugger;
        var view = Ext.widget('addcolumn', {
            record: record
        });
    }
});