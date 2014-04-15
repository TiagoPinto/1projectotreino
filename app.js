Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TR',

    appFolder: 'app',

    controllers: [
        'Login','Tasks','Columns'
    ],

    autoCreateViewport: true
});