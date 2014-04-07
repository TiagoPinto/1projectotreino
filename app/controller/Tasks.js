Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',

    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.List', 'Task.Edit'],

    refs: [{
        ref: 'taskList1',
        selector: 'tasklist[name=list1]'
        }, {
        ref: 'taskList2',
        selector: 'tasklist[name=list2]'
        }, {
        ref: 'taskList3',
        selector: 'tasklist[name=list3]'
        }, {
        ref: 'viewport',
        selector: 'viewport'
        }],

    init: function () {
        this.control({
            'tasklist': {
                itemdblclick: this.editTask
            },
            'taskedit': {
                saveTask: {
                    fn: this.updateTask,
                    element: this
                }
            },
            'viewport > button[action=save]': {
                click: {
                    fn: this.addTask,
                    element: this
                }
            }
        });
    },

    updateTask: function (record) {
        record.commit();

        this.getViewport().syncListStores();

        // synchronize the store after editing the record
        //this.getTasksStore().sync();

        /*var rec = Ext.create("TR.model.Task", {
            title: record.get("title"),
            description: record.get("description"),
            column: record.get("column")
        });
        
        
        if(record.get("column") == '1')
            this.getTaskList1().addTask(rec);
            //this.getTaskList1().deleteTask(rec);
        if(record.get("column") == '2')
            this.getTaskList2().addTask(rec);
        if(record.get("column") == '3')
            this.getTaskList3().addTask(rec);
            //this.getTaskList3().remove;*/
    },

    editTask: function (grid, record) {
        var view = Ext.widget('taskedit', {
            record: record
        });
    },

    addTask: function (grid, record) {
        var record = Ext.create("TR.model.Task");
        Ext.StoreManager.get("Tasks").add(record);

        var view = Ext.widget('taskedit', {
            record: record
        });
    }
});