Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',
    
    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.List', 'Task.Edit'],
    
    init: function() {
        console.log('Model', this.getTasksStore());
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
        });
    },
    
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        // synchronize the store after editing the record
        this.getTasksStore().sync();
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    }
});