// Script Include

var CalculatorUtils = Class.create();
CalculatorUtils.prototype = {
    initialize: function() {
    },

	sum: function(num1, num2) {
		var result = num1 + num2;
		return result;
	},

	sub: function(num1, num2) {
		var result = num1 - num2;
		return result;
	},

	mult: function(num1, num2) {
		var result = num1 * num2;
		return result;
	},

	div: function(num1, num2) {
		var result = num1 / num2;
		return result;
	},

    type: 'CalculatorUtils'
};

// Scripts - Background / Business Rule

var calc = new CalculatorUtils();
var divResult = calc.div(10, 2);
gs.info(divResult);
