# GitHub-reserved-names [![NPM Version][npm-image]][npm-url]

[npm-url]: https://npmjs.org/package/github-reserved-names
[npm-image]: https://img.shields.io/npm/v/github-reserved-names.svg

> Get a list, or check if a user or organization name is reserved by GitHub

The list comprises user or organization names that GitHub reserves for special use, e.g. the `new` in `https://github.com/new` is a reserved name and is contained in this list.

**Update 11/11/2019** Sites are now reported as being "unavailable" or "taken"; we can no longer determine if a name is reserved. All new additions will be included in the reserved list and marked as reserved.

This is *by no means a complete list* of reserved GitHub user/organization names.

The list in this repository was gathered from several sources:

* [Octotree](https://github.com/buunguyen/octotree/) ([ref](https://github.com/buunguyen/octotree/blob/master/src/adapters/github.js#L1-L12)).
* [GitHub Hovercard](https://github.com/Justineo/github-hovercard/) ([ref](https://github.com/Justineo/github-hovercard/blob/master/src/hovercard.js#L35-L42)).
* [GitHub Custom Hotkeys Userscript](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-custom-hotkeys) ([ref](https://github.com/Mottie/GitHub-userscripts/blob/master/github-custom-hotkeys.user.js#L58-L90)).
* [shorten-repo-url](https://github.com/fregante/shorten-repo-url) ([ref](https://github.com/fregante/shorten-repo-url/blob/master/index.js#L9)).
* Manually entering names into https://github.com/account/organizations/new and seeing it labeled as "Reserved". **Update** Sites are now reported as "unavailable".
* And a lot of hard work by [@strafe](https://github.com/strafe). Thanks!

See the [history page](./history.md) for more details and how you can help expand this list.

## Oddballs

There are a few names that have been added or omitted because of their behavior, these are listed in the [oddballs](./oddballs.md) read me.

In version 1.1.0, an `oddballs.json` has been included along with an API function & command-line interface (CLI). The data returned by the oddballs function is described in the [oddballs](./oddballs.md#oddballs-object-keys) read me.

## Install

```
$ npm install --save github-reserved-names
```

## Usage

Pass a `name` (e.g. `settings` from `https://github.com/settings`) parameter to the `check` or `oddballs` function.

```js
const isReserved = require('github-reserved-names');

isReserved.check("settings");
//=> true

isReserved.check("google");
//=> false

isReserved.all;
// [ 400, 401, 402, ..., "www8", "www9" ]

isReserved.oddballs("avatars");
// { reserved: true, taken: true, typical: true, included: false }

isReserved.oddballs();
// [ "account", "apps", ..., "wiki", "windows" ]
```

*NOTE*: Also make sure to check that the username doesn't include invalid alphanumeric characters; such is the case for the url of a [private feed](./oddballs.md#private-feed).

## API

### `.all`

Type: `array`

Current list of gathered GitHub reserved names.

### `.check(name)`

Type: `function`

Returns a boolean of `true` if the `name` parameter is in the reserved list, `false` if not.

### `.oddballs(name)`

Type: `function`

If `name` is in the list, this function returns data related to the named oddball; otherwise it returns an array of oddballs pages.

## CLI

Removed in v2.0.0.

## Related

- [github-url-detection](https://github.com/fregante/github-url-detection) - Check what type of GitHub page you’re on (includes `github-reserved-names`).

## License

MIT
