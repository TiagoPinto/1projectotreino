Ext.define('TR.view.Task.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.callParent(arguments);
        
        this.addEvents(
            /**
             * @event saveTask
             * Triggered when the user presses the save button.
             */
            "saveTask");

        this.down("button[action=save]").on("click", function() {
            var form = this.down("form"),
                record = form.getRecord(),
                values = form.getValues();
            record.set(values);
            this.close();
            this.fireEvent("saveTask", record);
        }, this);
        
        this.down("form").loadRecord(this.record);
        delete this.record;
    },
    
    items: [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                    }
                ]
            }
        ],
    
    buttons: [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ]
});