Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',

    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.List', 'Task.Edit'],

    refs: [{
            ref: 'taskList1',
            selector: 'tasklist[name=list1]'
        }, {
            ref: 'viewport',
            selector: 'viewport'
        }, {
            ref: 'buttonAddTask',
            selector: '#btnaddtask'
        }
          ],

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
            '#btnaddtask': {
                click: {
                    fn: this.addTask,
                    element: this,
                }
            }
        });
    },

    updateTask: function (record) {
        record.commit();

        this.getViewport().syncListStores();
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