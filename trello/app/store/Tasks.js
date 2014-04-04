Ext.define('TR.store.Users', {
    extend: 'Ext.data.Store',
    fields: ['position', 'title', 'description'],
    data: [
        {position: '1',    title: 'Tarefa 1', description: 'Fazer XPTO'},
          {position: '2',    title: 'Tarefa 2', description: 'Fazer XPTO2'},
          {position: '3',    title: 'Tarefa 3', description: 'Fazer XPTO3'},
    ]
});
