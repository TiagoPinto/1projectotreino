Ext.define('TR.controller.Login', {
    extend: 'Ext.app.Controller',

    views: ['Login.Login','Task.ListColumns'],
    
    refs: {
        ref: 'mainPage',
        selector: 'mainpage'
    },

    init: function () {
        this.control({
            'viewport button[action=login]': {
                click: {
                    fn: this.login,
                    element: this,
                }
            }
        });
    },
    
    login: function (grid, record) {
        var me = this;
        debugger;
        
        Ext.create('TR.view.Task.ListColumns').show();
    }
});