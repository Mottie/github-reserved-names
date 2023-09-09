## Table of contents

* [What is an oddball?](#what-is-an-oddball)
* [Oddballs function](#oddballs-function)
  * [Oddballs list](#oddballs-list)
  * [Oddballs object keys](#oddballs-object-keys)
* [Existing reserved names](#existing-reserved-names)
* [Reserved but page redirects](#reserved-but-page-redirects)
* [Reserved, but page is atypical](#reserved-but-page-is-atypical)
* [Not reserved, but page is atypical](#not-reserved-but-page-is-atypical)
* [Misc](#misc)
* [Private Feed](#private-feed)

## What is an oddball?

Let's first define a typical reserved page. Typical pages **do not** appear as a user or organization page. There are no repositories, people, teams or projects listed. For example, the `https://github.com/search` page contains a single input and search button.

This list of oddball names are pages that *do appear* as a typical user/organization page, they don't exist because of a redirect, they show an error page, or they are *not* listed as reserved *and* the page does not appear as a typical user/organization page.

## Oddballs function

This function is called from the API (`require("github-reserved-names").oddballs();`).

Pass a `name` parameter (e.g. `settings` from `https://github.com/settings`) to get an oddballs object key, if it exists.

### Oddballs list

An array of oddball sites is returned when the function is called:
  * without a named page.
  * with a named page, but the named page doesn't exist within the list.

This list *will* have some duplicates from the `reserved-names.json` list.

Example:

```js
require("github-reserved-names").oddballs();
/* => [
  "account",
  "apps",
  ...
  "windows"
]
*/
```

## Oddballs object keys

When the function is called with an existing named page, an object is returned containing the following keys:

* `reserved` (required) - Boolean reporting if the oddball name is reported as reserved on the [new organization page](https://github.com/organizations/new).
* `taken` (required) - Boolean reporting if the oddball name is reported as taken on the [new organization page](https://github.com/organizations/new).
* `typical` (required) - Boolean indicating that the oddball page appears as a typical user or organization page.
* `included` (required) - Boolean reporting if the oddball name has been included in the reserved names list.
* `redirect` (optional) - String containing a url of the page where the user will be redirected, if it happens.
* `notes` (optional) - String containing any special notes (see "suspended").

Example:

```js
require("github-reserved-names").oddballs("account");
/* => {
  "reserved": true, // is reserved
  "taken": false,   // not reported as taken
  "typical": false, // not a typical page
  "redirect": "https://github.com/settings/profile",
  "included": true  // is included in the github-reserved-names list
}
*/
```

## Existing reserved names

These names are labeled as both *reserved and existing* (by the [new organization page](https://github.com/organizations/new)).

These names have **not** been included in the `reserved-names.json` file because the pages appear as a typical user/organization page.

* https://github.com/avatars
* https://github.com/assets
* https://github.com/bookmarks
* https://github.com/checks
* https://github.com/conversations
* https://github.com/labels
* https://github.com/media
* https://github.com/nodes
* https://github.com/owners
* https://github.com/page
* https://github.com/registry
* https://github.com/seats
* https://github.com/shared
* https://github.com/tasks
* https://github.com/uploads

## Reserved, but page redirects

These names are labeled as *reserved* but you *should not* see them in the address bar because the page automatically redirects.

These names *have been* included in the `reserved-names.json` file.

| Name | Redirect |
|------|----------|
| https://github.com/account | https://github.com/settings/profile |
| https://github.com/apps | https://github.com/marketplace |
| https://github.com/blog | https://blog.github.com/ |
| https://github.com/c | https://support.github.com/ |
| https://github.com/contact | https://support.github.com/ |
| https://github.com/contributing | https://github.com/about/careers |
| https://github.com/customer | https://github.com/business/customers |
| https://github.com/customers | https://github.com/business/customers |
| https://github.com/developer | https://developer.github.com/ |
| https://github.com/edu | https://education.github.com/ |
| https://github.com/guides | https://help.github.com/ |
| https://github.com/help | https://help.github.com/ |
| https://github.com/launch | https://github.com/search |
| https://github.com/mac | https://desktop.github.com/ |
| https://github.com/mirrors | https://help.github.com/articles/about-github-mirrors/ |
| https://github.com/pages | https://pages.github.com/ |
| https://github.com/plans | https://github.com/pricing |
| https://github.com/press | https://github.com/about/press |
| https://github.com/repositories | https://github.com/trending |
| https://github.com/resources | https://resources.github.com/ |
| https://github.com/security | https://help.github.com/articles/github-security/ |
| https://github.com/settings | https://github.com/settings/profile |
| https://github.com/signup | https://github.com/join |
| https://github.com/terms | https://help.github.com/articles/github-terms-of-service/ |
| https://github.com/topic | https://github.com/topics |
| https://github.com/tos | https://help.github.com/articles/github-terms-of-service/ |
| https://github.com/training | https://services.github.com/ |
| https://github.com/users | https://github.com/ |
| https://github.com/wiki | https://github.com/ |
| https://github.com/windows | https://desktop.github.com/ |
| ~https://github.com/readme~ | ~https://github.com/about~ (modified ~10/2020) |

## Reserved, but page is atypical

* https://github.com/advisories - GitHub Advisory Database
* https://github.com/collections - Curated lists of GitHub repos.
* https://github.com/dashboard-feed - Dashboard feed (undocumented?).
* https://github.com/hovercards - Page shows a 406 error.
* https://github.com/inbox - Page always returns 410. This username shows as taken and reserved.
* https://github.com/invalid-email-address - Page shows a 404 error. This username shows as taken. Reserved status is unknown, but marked as true.
* https://github.com/suggestions - Page returns 406 if logged in, 404 otherwise. This username only shows as reserved.
* https://github.com/suspended - Page behaviour depends on whether you're logged in or if your account is actually suspended. This username shows as taken and reserved.

## Not reserved, but page is atypical

This entry **is not** labeled as a *reserved* name, but it has been listed in the `reserved-names.json` file because it does not appear as a typical user/organization page.

* https://github.com/case-studies
* https://github.com/save-net-neutrality (atypical layout)
* https://github.com/watching

## Not reserved, but page is typical

This entry **is not** labeled as a *reserved* name, but it has been listed in the `reserved-names.json` file because of special circumstances.

* https://github.com/ghost - Catch all user page for deleted users.

## Misc

This entry **is labeled** as a *reserved* name, and it *is listed* in the `reserved-names.json` file.

It is shown here because it is unique, and alive?!

* https://github.com/status (GitHub lives!)

## Private Feed

Clicking on the "Subscribe to your news feed" at the bottom of the main https://github.com page takes you to news feed page with a url similar to this: `https://github.com/{user}.private.atom?token=Base_16_encoded_value==`.

This list doesn't account for these pages as the "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen".
