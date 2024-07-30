const test = require("ava");
const oddballs = require("./oddballs.json");
const r = require("./index.js");

test("Check reserved-names checker", t => {
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
	const has = {
		reserved: true, taken: true, typical: true, included: true,
	};
	for (const entry of Object.values(oddballs)) {
		has.reserved = has.reserved ? "reserved" in entry : false;
		has.taken = has.taken ? "taken" in entry : false;
		has.typical = has.typical ? "typical" in entry : false;
		has.included = has.included ? "included" in entry : false;
	}

	t.true(has.reserved);
	t.true(has.taken);
	t.true(has.typical);
	t.true(has.included);
});

test("Check oddballs return value", t => {
	// Oddballs function returns an array
	t.true(r.oddballs().length > 0);
	// Passing in a name returns the oddball data
	t.deepEqual(r.oddballs("apps"), {
		reserved: true,
		taken: false,
		typical: false,
		redirect: "https://github.com/marketplace",
		included: true,
	});
});
