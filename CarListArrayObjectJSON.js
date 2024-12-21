var cars = [
	{
		"marca": "Chevrolet",
		"modelo": "Onix",
		"ano": "2020",
	},
	{
		"marca": "Fiat",
		"modelo": "Mobi",
		"ano": "2017",
	},
	{
		"marca": "Honda",
		"modelo": "Fit",
		"ano": "2011",
	},
];

gs.info(cars);

var carsListStr = JSON.stringify(cars);
gs.info(carsListStr);

var carsListStrFormat = JSON.stringify(cars, null, 4);
gs.info(carsListStrFormat);
