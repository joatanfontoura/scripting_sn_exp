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

var carCount = cars.length;

for (i = 0; i < carCount; i++) {
	var car = cars[i];
	gs.info('A marca do carro é ' + car.marca + ', o modelo é ' + car.modelo + ' e o ano é ' + car.ano);
}
