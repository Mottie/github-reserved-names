"use strict";
const reservedNames = require("./reserved-names.json");

exports.all = reservedNames;
exports.check = name => {
	return reservedNames.includes(name || "");
};
