Ext.define('AM.view.template.Header' ,{
    extend: 'Ext.window.Window',
    alias: 'widget.header',

    title: 'This is Header',

    initComponent: function() {
        this.callParent(arguments);
    }
});