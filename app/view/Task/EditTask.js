Ext.define('TR.view.Task.EditTask', {
    extend: 'Ext.window.Window',
    alias: 'widget.edittask',

    title: 'Edit Task',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.callParent(arguments);

        this.addEvents(
            /**
             * @event saveTask
             * Triggered when the user presses the save button.
             */
            "saveTask");

        this.down("button[action=save]").on("click", function () {
            var form = this.down("form"),
                record = form.getRecord(),
                values = form.getValues();
            record.set(values);
            if (record.data.title == "") {
                Ext.Msg.alert('Please insert a Title');
            } else if (record.data.description == "") {
                Ext.Msg.alert('Please insert a Decription');

            } else if (record.data.column == "") {
                Ext.Msg.alert('Please insert a Column');

            } else {
                this.close();
                this.fireEvent("saveTask", record);
            }
        }, this);

        this.down("button[action=cancel]").on("click", function () {
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
                    name: 'title',
                    fieldLabel: 'Title',
                    allowBlank:false
                    },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Discription',
                    allowBlank:false
                    },
                {
                    xtype: 'combo',
                    fieldLabel: 'Column Name',
                    name: 'column',
                    queryMode: 'local',
                    store: 'Columns',
                    displayField: 'title',
                    allowBlank:false
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