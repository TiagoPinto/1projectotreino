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

        this.down("button[action=add]").on("click", function() {
            debugger;
            var form = this.down("form"),
                record = form.getRecord(),
                values = form.getValues();
            record.set(values);
            this.close();
            debugger;
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
                        name : 'title',
                        fieldLabel: 'Title'
                    }
                ]
            }
        ],
    
    buttons: [
            {
                text: 'Add',
                action: 'add'
            },
            {
                text: 'Cancel',
                action: 'cancel'
            }
        ]
});