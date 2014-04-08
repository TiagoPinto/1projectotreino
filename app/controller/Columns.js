Ext.define('TR.controller.Columns', {
    extend: 'Ext.app.Controller',

    stores: ['Columns'],
    models: ['Column'],
    views: ['Column.ColumnList'],

    init: function () {
        this.control({
            'addcolumn': {
                click: {
                    fn: this.addTask,
                    element: this
                }
            }
        });
    },
    
    addColumn: function (grid, record) {
        var view = Ext.widget('addcolumn', {
            record: record
        });
    },
});