// BR que limita a visualização de incidentes baseado na role do usuário

(function executeRule(current, previous /*null when async*/) {

	if (!gs.hasRole('itil')) {
	current.addEncodedQuery('priority!=1^ORpriority=NULL');
	gs.addErrorMessage("Você não pode ver incidentes P1.");
	}

})(current, previous);
