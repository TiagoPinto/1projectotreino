Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
    
    controllers: [
        'Users',
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            title: "Trello",
            layout: {
                type: 'border',
                //align: 'stretch'
            },
            renderTo: document.body,
            items: [{
                region: 'north',
                xtype: 'label',
                text: 'Isto é o header'
            }, {
                region: 'center',
                xtype: 'userlist',
                title: 'Painel com users',
                flex: 2
            }, {
                region: 'west',
                xtype: 'userlist',
                title: 'Inner Panel Two',
                flex: 1
            }, {
                region: 'east',
                xtype: 'userlist',
                title: 'Inner Panel Three',
                flex: 1
            }, {
                region: 'south',
                xtype: 'button',
                text: 'Save',
                action: 'save'
            }]
        });
    }
});