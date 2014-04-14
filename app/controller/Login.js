Ext.define('TR.controller.Login', {
    extend: 'Ext.app.Controller',

    views: ['Login.Login', 'Task.ListColumns'],

    refs: [{
        ref: 'mainpage',
        selector: 'mainpage'
    },{
        ref: 'btnlogin',
        selector: '#btnlogin'
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
        viewport = Ext.ComponentQuery.query('mainpage');
        debugger;
        target = Ext.ComponentQuery.query(btn.go);
        viewport[0].setActiveItem(target[0]);
    }
});