Ext.define('TR.view.Task.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'column',
                        fieldLabel: 'Coluna'
                    },
                    {
                        xtype: 'textfield',
                        name : 'title',
                        fieldLabel: 'Titulo'
                    },
                    {
                        xtype: 'textfield',
                        name : 'discription',
                        fieldLabel: 'Descrição'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});