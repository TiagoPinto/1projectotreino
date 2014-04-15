Ext.define('TR.view.Login.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login',

    title: 'Login',
    queryMode: 'local',
    
    

    initComponent: function () {
        
        this.callParent(arguments);
    },

    items: [
        {
            xtype: 'form',
            items: [
                {
                
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Username:',
                    inputType:'email'
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Password',
                    inputType: 'password'
                }]
        }
    ],

    buttons: [
        {
            text: 'Login',
            action: 'login',
            itemId: 'btnlogin'
            }
        ]

});