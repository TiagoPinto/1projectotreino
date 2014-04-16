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
    }, {
        ref: "loginContainer",
        selector: "#log"
    }, {
        ref: "username",
        selector: "#username"
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
        this.getLoginContainer().removeAll();

        var store = Ext.StoreManager.get("Columns");
        var listColumn = Ext.create("TR.view.Column.ListColumn", {});
        //Create each collumn in store and add it to the listcolumnView
        for (var i = 1; i <= store.data.length; i++) {
            var columnView = Ext.create("TR.view.Task.ListTask", {
                record: store.data.get(i),
                store: store,
                columnWidth: 0.33
            });
            this.getColumnContainer().add(columnView);
        };
        this.getViewport().add(listColumn);
    }
});