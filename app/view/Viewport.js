Ext.define('TR.view.Viewport', {
    extend: 'Ext.Viewport',    
    
    title: "Trello",
    layout: {
        type: 'border'
        //align: 'stretch'
    },
    
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
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
        
        me.callParent(arguments);
    }
});