function calcAge(byear){
	var gd = new GlideDate();
	var year = gd.getYear();
	var age = year - byear;
	gs.info(age); 
}

calcAge(1991);

////////////////////////////////////////
// with return
//

function calcAge(byear){
	var gd = new GlideDate();
	var year = gd.getYear();
	var age = year - byear;
	return age; 
}

gs.info(calcAge(1991));
