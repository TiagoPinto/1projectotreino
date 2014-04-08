Ext.define('TR.view.Task.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.taskedit',

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
            this.close();
            this.fireEvent("saveTask", record);
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
                    fieldLabel: 'Title'
                    },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Discription'
                    },
                {
                    xtype: 'combo',
                    fieldLabel: 'Column Name',
                    name: 'column',
                    queryMode: 'local',
                    store: 'Columns',
                    displayField: 'title'
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