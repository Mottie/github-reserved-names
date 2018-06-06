import test from "ava";
import r from ".";

const oddballs = require("./oddballs.json");

test("Check reserved-names cli", t => {
	t.true(r.all.length > 0);
	t.true(r.check("settings"));
	t.true(r.check("Issues"));
	t.true(r.check(404));

	t.false(r.check());
	t.false(r.check(null));
	t.false(r.check("Google"));
	t.false(r.check("Mottie"));
});

test("Check oddball properties", t => {
	// Every oddballs entry must include reserved, taken, typical & included keys
	const has = Object.keys(oddballs).reduce((acc, key) => {
		const entry = oddballs[key];
		acc.reserved = acc.reserved ? "reserved" in entry : false;
		acc.taken = acc.taken ? "taken" in entry : false;
		acc.typical = acc.typical ? "typical" in entry : false;
		acc.included = acc.included ? "included" in entry : false;
		return acc;
	}, {reserved: true, taken: true, typical: true, included: true});
	t.true(has.reserved);
	t.true(has.taken);
	t.true(has.typical);
	t.true(has.included);
});

test("Check oddballs return value", t => {
	// Oddballs function returns an array
	t.true(r.oddballs().length > 0);
	// Passing in a name returns the oddball data
	t.deepEqual(r.oddballs("readme"), {
		reserved: true,
		taken: true,
		typical: false,
		redirect: "https://github.com/about",
		included: true
	});
});
