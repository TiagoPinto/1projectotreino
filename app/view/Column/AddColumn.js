Ext.define('TR.view.Column.AddColumn', {
    extend: 'Ext.window.Window',
    alias: 'widget.addcolumn',

    title: 'Add Column',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.callParent(arguments);
        
        this.addEvents(
            /**
             * @event saveTask
             * Triggered when the user presses the save button.
             */
            "addColumn");

        this.down("button[action=addColumn]").on("click", function() {
            var form = this.down("form"),
                record = form.getRecord(),
                values = form.getValues();
            record.set(values);
            this.close();
            this.fireEvent("addColumn", record);
        }, this);
        
        this.down("button[action=cancel]").on("click", function() {
            this.close();
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
                        name : 'column',
                        fieldLabel: 'Column'
                    },
                    {
                        xtype: 'textfield',
                        name : 'title',
                        fieldLabel: 'Title'
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
                action: 'cancel'
            }
        ]
});