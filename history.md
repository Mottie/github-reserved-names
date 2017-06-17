## The history of building this list

When I needed a list of reserved GitHub usernames, I found that the author of [Octotree](https://github.com/buunguyen/octotree/) had a list in his repository; but with new pages added to GitHub, it became outdated. I added this list and expanded upon it in my [custom hotkeys userscript](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-custom-hotkeys).

More reserved names were encountered when GitHub introduced the marketplace. And I found a few more missing names in the [GitHub Hovercard](https://github.com/Justineo/github-hovercard/) repository.

I tried to build a few automated scripts to create this list, but it has been wrought with many difficulties...

### Reserved Names

I was prepared to use [this list of reserved usernames](https://github.com/shouldbee/reserved-usernames/) as a source.

I accidentally entered `404` into the new organization page (see below) and found that it was a reserved name. There were no numbers in the list I found, and this is why the current list includes numbers. All of which I manually entered :crying_cat_face:.

### New Organization Page

Go to the [new organization page](https://github.com/account/organizations/new) and enter a name:
* If the name is **reserved**, you will see that a Network tab of the developer tools that a query is sent to https://github.com/signup_check/username and a response of 403 Forbidden, "Username is a reserved word" is seen.
* If the name isn't reserved but **already taken**, a response of 403 Forbidden, "Username is already taken" is seen.
* And if is the name is available, a response of 200 OK is seen.
* While attempting to use `curl` to perform this check ([ref](https://stackoverflow.com/questions/28977164/github-api-how-to-check-username-availability)), I found that GitHub now requires cookies to be enabled

    ```bash
    curl --write-out ' %{http_code}\n' --data "value=$USERNAME" https://github.com/signup_check/username
    ```

* I tried creating a userscript to automate entry and check the tooltip... but I was not able to get any event listeners to trigger.
* I also found this ruby script (https://gist.github.com/buo/954b4b096650a595c853) which appears to no longer function since GitHub added the cookie requirement.
* As a last resort, I tried to create a [AutoHotKey](https://autohotkey.com/) script but that too was unsuccessful.

### GitHub support

Contacting them was very frustrating...

* They do not maintain an internal list of reserved names.
* It was recommended that I use the API (https://developer.github.com/v3/users/#get-a-single-user; without authentication) to see if a user with the name exists.
  * If it exists, then it is an existing user or organization.
  * If it doesn't exist, then... well, we still don't know if it is reserved.
* If you want to check a repository name, e.g. "github.com/settings/profile", I'd have to use the API again (https://developer.github.com/v3/repos/#get; without authentication, or use https://developer.github.com/v3/#authentication to check private repos with authentication).
* They were not inclined to create or provide a list.

### Conclusion

I did not want to access the API for a "quick" repository check, so hopefully this partial list of reserved names is good enough.

If anyone can help figure out a method to automate this process, or even help to manually update this list, I would be happy!
