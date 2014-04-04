Ext.application({
    requires: ['Ext.container.Viewport'],
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
        });
    }
});