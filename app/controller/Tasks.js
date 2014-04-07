Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',
    
    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.List', 'Task.Edit'],
    
    refs: [{
        ref: 'taskList2',
        selector: 'tasklist[name=list2]',
    }],
    
    init: function() {
        this.control({
            'tasklist': {
                itemdblclick: this.editTask
            },
            'taskedit': {
                saveTask: {
                    fn: this.updateTask, 
                    element: this}
            }
        });
    },
    
    updateTask: function(record) {
        // synchronize the store after editing the record
        //this.getTasksStore().sync();
        
        var rec = Ext.create("TR.model.Task", {
            title: record.get("title"),
            description: record.get("description")
        });
        
        this.getTaskList2().addTask(rec);
    },

    editTask: function(grid, record) {
        var view = Ext.widget('taskedit', {
            record: record
        });
    }
});