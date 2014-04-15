Ext.define('TR.controller.Login', {
    extend: 'Ext.app.Controller',

    views: ['Login.Login'],

    refs: [{
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
     console.log('faz login',record);
    }
});