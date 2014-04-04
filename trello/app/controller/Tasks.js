Ext.define('TR.controller.Users', {
    extend: 'Ext.app.Controller',
stores: ['Tasks'],
    models: ['Task'],
    views: ['task.List'],

  init: function() {
        this.control({
            
            'useredit button[action=remove]': {
                click: this.removeTask
            }
        });
    },
    
removeTask: function(button) {
   alert('Remover!')
}
});
