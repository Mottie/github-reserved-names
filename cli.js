#!/usr/bin/env node
"use strict";
const meow = require("meow");
const reservedNames = require("./");

const cli = meow([
	`Examples
  $ github-reserved issues
  true

  $ github-reserved --all
  400
  401
  ...

Options
  --all   Show all reserved names`
]);

console.log(
	cli.flags.all ?
		reservedNames.all.join("\n") :
		reservedNames.check((cli.input || [])[0])
);
