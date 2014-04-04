Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TR',

    appFolder: 'app',
    
    controllers: [
        'Tasks',
    ],
    
    autoCreateViewport: true
});