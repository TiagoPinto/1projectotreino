Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TR',

    appFolder: 'app',

    controllers: [
        'Tasks', 'Columns', 'Login'
    ],

    autoCreateViewport: true
});