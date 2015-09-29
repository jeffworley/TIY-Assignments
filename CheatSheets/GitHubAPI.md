# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?
Yes! This is needed to prevent the accidental leakage of private repositories to unauthorized users.

> What can I do with an unauthenticated request?
You can make up to 60 unauthenticated requests per hour.  Unauthenticated requests are associated with your IP address, and not the user making requests. 

> What _can't_ I do with an unauthenticated request?

> How can I authenticate my request?

1. First way -- with some description of what that is
Basic Authentication:
The easiest way to authenticate with the GitHub API is by simply using your GitHub username and password via Basic Authentication.
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':
```
The -u flag sets the username, and cURL will prompt you for the password. You can use -u "username:password" to avoid the prompt, but this leaves your password in shell history and isn’t recommended. When authenticating, you should see your rate limit bumped to 5,000 requests an hour, as indicated in the X-RateLimit-Limit header.

In addition to just getting more calls per hour, authentication is the key to reading and writing private information via the API.

2. Second way -- and more descriptive text
Two-Factor Authentication:
If you have two-factor authentication enabled, the API will return a 401 Unauthorized error code for the above request (and every other API request).  Two-factor authentication is a way of logging into websites that requires more than just a password. Using a password to log into a website is susceptible to security threats, because it represents a single piece of information a malicious person needs to acquire. The added security that 2FA provides is requiring additional information to sign in.
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':

HTTP/1.1 401 Unauthorized
X-GitHub-OTP: required; :2fa-type

{
  "message": "Must specify two-factor authentication OTP code.",
  "documentation_url": "https://developer.github.com/v3/auth#working-with-two-factor-authentication"
}
```
The easiest way to get around that error is to create an OAuth token and use OAuth authentication instead of Basic Authentication. See the OAuth section below for more information.

3. Third way -- yep, include a short description
Get Your Own User Profile:
When properly authenticated, you can take advantage of the permissions associated with your GitHub account. For example, try getting your own user profile.  You can achive this by executing `GET /user`.
```
$ curl -i -u <your_username> https://api.github.com/user

{
  ...
  "plan": {
    "space": 2516582,
    "collaborators": 10,
    "private_repos": 20,
    "name": "medium"
  }
  ...
}
```
This time, in addition to the same set of public information we retrieved for @defunkt earlier, you should also see the non-public information for your user profile. For example, you’ll see a plan object in the response which gives details about the GitHub plan for the account.


## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?
You can either use the `GET` command via `GET /users/defunkt` or you can use the below long hand but more accurate command line code.
```
$ curl -i https://api.github.com/users/defunkt
```

> [The repository listing for a specific user?](https://developer.github.com/guides/getting-started/#repositories)
The below will list repositories for a specific user.
```
$ curl -i https://api.github.com/users/technoweenie/repos
```

> [The recent, public activity for a specific user?](https://developer.github.com/v3/activity/events/#list-public-events)
The below will list public events by a specified user.  Based on what I can find this should be the same as public activity.
```
GET /users/:username/events/public
```

## [Requests/Rate Limiting](https://developer.github.com/v3/#rate-limiting):

> Is there a limit to the number of requests I can make?
Yes.  For you are allowed 60 unauthenticated requests per hour and you are allowed 5000 authenticated requests per hour.

> Is there a way of extending that limit?
Yes by authenticating.

> What happens when I hit the limit?
You will recieve an error response that looks like the example below:

```
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266

{
    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

## [Data/Pagination](https://developer.github.com/v3/#pagination):

> What if there is a lot of data returned?
If you are supposed to have a large amount of data returned, it is instead 'paginated' to 30 items by default.

> How can I ask for more (or less) data from a request?
You can set up custom parameters using the `?page` and `?per_page` parameters.  This would look something like the below example.

```
$ curl 'https://api.github.com/user/repos?page=2&per_page=100'
```

> [How do I know that there is more data available?](https://developer.github.com/guides/traversing-with-pagination/)
You should be able to tell if you receive your data back in a group of 30.  Anything less without specifically setting data return parameters would indicate that you don't have more data available.

