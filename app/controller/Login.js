Ext.define('TR.controller.Login', {
    extend: 'Ext.app.Controller',

    models: ['User', 'Column'],
    stores: ['Users', 'Columns'],
    views: ['Login.Login', 'Column.ListColumn'],

    refs: [{
        ref: 'btnlogin',
        selector: '#btnlogin'
    }, {
        ref: 'viewport',
        selector: 'viewport'
    }, {
        ref: "columnContainer",
        selector: "listcolumn [name=listtaskcontainer]"
        }],

    init: function () {
        this.control({
            '#btnlogin': {
                click: {
                    fn: this.login,
                    element: this,
                }
            }
        });
    },

    login: function (grid, record) {
        var viewport = this.getViewport();
        var log = this.getViewport().down('login');
        viewport.removeAll();
        var store = Ext.StoreManager.get("Columns");
        var listColumn = Ext.create("TR.view.Column.ListColumn", {});

        for (var i = 1; i <= Ext.StoreManager.get("Columns").data.length; i++) {
            console.log("coluna", store.data.get(i));
            var columnView = Ext.create("TR.view.Task.ListTask", {
                record: store.data.get(i),
                store: store,
                columnWidth: 0.33
            });
            this.getColumnContainer().add(columnView);
        };

        viewport.add(listColumn);
    }
});