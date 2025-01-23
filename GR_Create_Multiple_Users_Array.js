// Array com os dados dos usuários que serão adicionados
var users = [
    { user_name: 'dora', first_name: 'Gina', last_name: 'Smith', email: 'dora@example.com' },
    { user_name: 'john', first_name: 'John', last_name: 'Doe', email: 'john@example.com' },
    { user_name: 'maria', first_name: 'Maria', last_name: 'Garcia', email: 'maria@example.com' }
];

// Loop para adicionar cada usuário
for (var i = 0; i < users.length; i++) {
    var userData = users[i];
    
    var grUser = new GlideRecord('sys_user');
    grUser.initialize(); // Inicializa o GlideRecord para um novo registro
    grUser.setValue('user_name', userData.user_name);
    grUser.setValue('first_name', userData.first_name);
    grUser.setValue('last_name', userData.last_name);
    grUser.setValue('email', userData.email);
    
    var userSysId = grUser.insert(); // Insere o registro e retorna o sys_id do novo usuário
    gs.print('Usuário criado: ' + userSysId); // Log para confirmar a criação
}
