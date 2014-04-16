Ext.define('TR.controller.Login', {
    extend: 'Ext.app.Controller',

    models: ['User', 'Column', 'User'],
    stores: ['Users', 'Columns', 'Users'],
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
        },{
        ref:'login',
        selector:'login'
        }
          
          ],

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
        var form=this.getLogin().down('form');
        var username=form.items.get(0).value;
        var password=form.items.get(1).value;
        
        
    
        var storeuser = Ext.StoreManager.get('Users');
        
        for (var i = 1; i <= storeuser.data.length; i++) {
            if (storeuser.data.get(i).data.username == username && storeuser.data.get(i).data.password == password) {
                var flag = 'true';
            }
        }
        if (flag == 'true') {
            viewport.removeAll();
            var store = Ext.StoreManager.get("Columns");
            var listColumn = Ext.create("TR.view.Column.ListColumn", {});

            for (var i = 1; i <= Ext.StoreManager.get("Columns").data.length; i++) {
                var columnView = Ext.create("TR.view.Task.ListTask", {
                    record: store.data.get(i),
                    store: store,
                    columnWidth: 0.33
                });
                this.getColumnContainer().add(columnView);
            };

            viewport.add(listColumn);
        } else {
                Ext.Msg.alert('Login Failed','User or password incorrect');

            
        }







    }
});