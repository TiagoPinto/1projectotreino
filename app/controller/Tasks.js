Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',
    
    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.List', 'Task.Edit'],
    
    refs: [{
        ref: 'userList2',
        selector: 'userlist[name=list2]',
    }],
    
    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit': {
                saveTask: {fn:this.updateUser, element:this}
            }
        });
    },
    
    updateUser: function(record) {
        // synchronize the store after editing the record
        //this.getTasksStore().sync();
        
        var rec = Ext.create("TR.model.Task", {
            name: record.get("name"),
            email: record.get("email")
        });
        
        this.getUserList2().addTask(rec);
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit', {
            record: record
        });
    }
});