import {createRequire} from "node:module";
import test from "ava";

const require = createRequire(import.meta.url);
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

// GitHub user and organization profile pages include `og:type" content="profile"`
// in their HTML. Reserved-name pages (e.g. /settings, /explore) do not.
const isGitHubProfile = async name => {
	const response = await fetch(`https://github.com/${name}`);
	if (response.status === 429 || response.status >= 500) {
		throw new Error(`Unexpected HTTP ${response.status} for github.com/${name}`);
	}

	const text = await response.text();
	return text.includes("content=\"profile\"");
};

const delay = ms => new Promise(resolve => {
	setTimeout(resolve, ms);
});

test("Check none of the reserved names appear as a user or organization", async t => {
	// Sanity check: Mottie is a user
	t.true(await isGitHubProfile("Mottie"), "Mottie should be a user profile");
	await delay(200);

	// None of the reserved names should be a user or organization profile
	for (const name of r.all) {
		// eslint-disable-next-line no-await-in-loop
		t.false(await isGitHubProfile(name), `${name} should not be a user or organization profile`);
		// eslint-disable-next-line no-await-in-loop
		await delay(200);
	}

	// Sanity check: refined-github is an organization
	t.true(await isGitHubProfile("refined-github"), "refined-github should be an organization profile");
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
