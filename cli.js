#!/usr/bin/env node
"use strict";
const meow = require("meow");
const reservedNames = require(".");

const cli = meow(`
Examples
  $ github-reserved issues
  true

  $ github-reserved --all
  400
  401
  ...

  $ github-reserved readme --oddballs
  { reserved: true, taken: true, typical: true, included: false }

  $ github-reserved --oddballs
  account
  apps
  ...

Options
  --all      Return all reserved names
  --oddballs Return oddballs list or data`
);

if (cli.flags.oddballs) {
	const results = reservedNames.oddballs(cli.input || "");
	console.log(Array.isArray(results) ? results.join("\n") : results);
} else {
	console.log(
		cli.flags.all ?
			reservedNames.all.join("\n") :
			reservedNames.check((cli.input || [])[0])
	);
}
