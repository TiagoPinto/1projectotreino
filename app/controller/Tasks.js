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
            'viewport button[action=addtask]': {
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