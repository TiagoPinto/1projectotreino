Ext.define('TR.controller.Tasks', {
    extend: 'Ext.app.Controller',

    stores: ['Tasks'],
    models: ['Task'],
    views: ['Task.ListTask', 'Task.EditTask'],

    refs: [{
            ref: 'listTask',
            selector: 'listtask[name=list1]'
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
            'listtask': {
                itemdblclick: this.editTask
            },
            'edittask': {
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
        var view = Ext.widget('edittask', {
            record: record
        });
    },

    addTask: function (grid, record) {
        var record = Ext.create("TR.model.Task");
        Ext.StoreManager.get("Tasks").add(record);
        var view = Ext.widget('edittask', {
            record: record
        });
    }
});