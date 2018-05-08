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
| https://github.com/c | https://github.com/contact |
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
| https://github.com/readme | https://github.com/about |
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

## Reserved, but page is atypical

* https://github.com/suggestions - Page returns 406 if logged in, 404 otherwise. This username only shows as reserved.
* https://github.com/inbox - Page always returns 410. This username shows as taken and reserved.
* https://github.com/suspended - Page behaviour depends on whether you're logged in or if your account is actually suspended. This username shows as taken and reserved.

## Not reserved, but page is atypical

This entry **is not** labeled as a *reserved* name, but it has been listed in the `reserved-names.json` file because it does not appear as a typical user/organization page.

* https://github.com/watching (page redirects)
* https://github.com/save-net-neutrality (atypical layout)

## Misc

This entry **is labeled** as a *reserved* name, and it *is listed* in the `reserved-names.json` file.

It is shown here because it is unique, and alive?!

* https://github.com/status (GitHub lives!)

## Private Feed

Clicking on the "subscript to your news feed" at the bottom of the main https://github.com page takes you to news feed page with a url similar to this: `https://github.com/{user}.private.atom?token=Base_16_encoded_value==`.

This list doesn't account for these pages as the "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen".
