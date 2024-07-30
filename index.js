"use strict";
const reservedNames = require("./reserved-names.json");
const oddballs = require("./oddballs.json");

exports.all = reservedNames;
exports.check = name => {
	name = (name || "").toString().toLowerCase();
	return reservedNames.includes(name);
};

exports.oddballs = name => name && name in oddballs
	? oddballs[name]
	: Object.keys(oddballs).sort();
