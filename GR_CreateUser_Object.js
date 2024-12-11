var gr = new GlideRecord('sys_user');
var user = {
	user_name: 'joa',
	first_name: 'Joinha',
	last_name: 'Fontana'
}
gr.setValue('user_name', user.user_name);
gr.setValue('first_name', user.first_name);
gr.setValue('last_name', user.last_name);
gr.insert();
gs.info('O usuário foi criado');
