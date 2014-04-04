Ext.application({
    requires: ['Ext.container.Viewport'],
<<<<<<< HEAD
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
=======
    name: 'TR',
    appFolder: 'app',

   launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
    type: 'hbox',
    pack: 'start',
    align: 'stretch'
},
items: [
    {title:'Options', flex:1},
    {title:'Todo', flex:1},
    {title:'Ongoing', flex:1},
    {title:'Completed', flex:1}
]
>>>>>>> bd251b2c4d5b12e437565b2f0723c5bdf32a4214
        });
    }
});