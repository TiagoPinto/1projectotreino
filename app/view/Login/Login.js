Ext.define('TR.view.Login.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login',

    title: 'Login',
    queryMode: 'local',
    
    initComponent: function () {
        
        this.callParent(arguments);
        
        this.addEvents(
            /**
             * @event saveTask
             * Triggered when the user presses the save button.
             */
            "login");
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
                    inputType: 'password',
                    itemId: 'username'
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