# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

Yes! This is needed to prevent the accidental leakage of private repositories to unauthorized users.

> What can I do with an unauthenticated request?

You can make up to 60 unauthenticated requests per hour.  Unauthenticated requests are associated with your IP address, and not the user making requests. 

> What _can't_ I do with an unauthenticated request?

You cannot access private repository information.

> How can I authenticate my request?

* 1. First way -- with some description of what that is

Basic Authentication:

The easiest way to authenticate with the GitHub API is by simply using your GitHub username and password via Basic Authentication.

```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':
```

The -u flag sets the username, and cURL will prompt you for the password. You can use -u "username:password" to avoid the prompt, but this leaves your password in shell history and isn’t recommended. When authenticating, you should see your rate limit bumped to 5,000 requests an hour, as indicated in the X-RateLimit-Limit header.

In addition to just getting more calls per hour, authentication is the key to reading and writing private information via the API.

* 2. Second way -- and more descriptive text

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

* 3. Third way -- yep, include a short description

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

* 4. [Oauth2 Token](https://developer.github.com/v3/oauth/)

```
GET https://github.com/login/oauth/authorize
```

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

> [How do I know that there is more data available?](https://developer.github.com/guides/traversing-with-pagination/):

You should be able to tell if you receive your data back in a group of 30.  Anything less without specifically setting data return parameters would indicate that you don't have more data available.

> What are the endpoints for fetching...

The endpoints are extra parameters/identifiers at the end of the url.  I will address some of the most common below.

* the profile data for a user?
    
```
https://api.github.com/users/{/username}
```

* the organizations a user belongs to?

```
https://api.github.com/users/{/username}/orgs
```

* the repositories a user has created?

```
https://api.github.com/users/{/username}/repos
```

## Endpoints:

* a filtered list of repositories?

You can filter the list you get back by using one of three filters: `"type", "sort", "direction"`.
- The `"type"` parameter takes a string argument and can be one of all, owner, member with the default being owner.
- The `"sort"` parameter take a string argument and can be one of created, updated, pushed, full_name with the default being full_name.
- The `"direction"` parameter takes a string argument and can be one of asc or desc with the default being when using full_name: asc, otherwise desc.

```
https://api.github.com/users/{/username}/repos/{/parameters}
```

* a sorted list of repositories?

See above.

```
https://api.github.com/users/{/username}/repos/sort:{/created, updated, pushed or full_name}
```

* public events for a user?

In the example below you would substitue the string value public in the `{/privacy}` parameter argument place.

```
https://api.github.com/users/{/username}/events{/privacy}
```

## Events:

> [When fetching public events for a user...](https://developer.github.com/v3/activity/events/types/)

Types of events are as follows:

```
CommitCommentEvent, CreateEvent, DeleteEvent, DeploymentEvent, DeploymentStatusEvent, DownloadEvent(No longer created), FollowEvent(No longer created), ForkEvent, ForkApplyEvent(No longer created), GistEvent(No longer created), GollumEvent, IssueCommentEvent, IssuesEvent, MemberEvent, MembershipEvent, PageBuildEvent, PublicEvent, PullRequestEvent, PullRequestReviewCommentEvent, PushEvent, ReleaseEvent, RepositoryEvent, StatusEvent, TeamAddEvent and WatchEvent
```

* How many results are returned by default?

However many public events that user had within the last 90 days.

* What limitations exist on fetching more results?

It will only fetch up to 300 events and due to the rules of `pagination` it will be displayed in groups of no more than 30 events per page with a max of 10 pages.

* What is the basic structure of the results?

The basic structure of the results is similar to other results that fetching can get you.  By this I mean that it will be displayed to you in an array of dictionary objects with all the pertinent information.  I am including an example below.

```
{
    "id": "3193192596",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 4316268,
      "login": "jeffworley",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jeffworley",
      "avatar_url": "https://avatars.githubusercontent.com/u/4316268?"
    },
    "repo": {
      "id": 41694172,
      "name": "s4dmw/s4dmw.github.io",
      "url": "https://api.github.com/repos/s4dmw/s4dmw.github.io"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/17",
        "labels_url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/17/labels{/name}",
        "comments_url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/17/comments",
        "events_url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/17/events",
        "html_url": "https://github.com/s4dmw/s4dmw.github.io/pull/17",
        "id": 109002018,
        "number": 17,
        "title": "Journal and Tutorial week 4 to master",
        "user": {
          "login": "s4dmw",
          "id": 13879097,
          "avatar_url": "https://avatars.githubusercontent.com/u/13879097?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/s4dmw",
          "html_url": "https://github.com/s4dmw",
          "followers_url": "https://api.github.com/users/s4dmw/followers",
          "following_url": "https://api.github.com/users/s4dmw/following{/other_user}",
          "gists_url": "https://api.github.com/users/s4dmw/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/s4dmw/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/s4dmw/subscriptions",
          "organizations_url": "https://api.github.com/users/s4dmw/orgs",
          "repos_url": "https://api.github.com/users/s4dmw/repos",
          "events_url": "https://api.github.com/users/s4dmw/events{/privacy}",
          "received_events_url": "https://api.github.com/users/s4dmw/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "milestone": null,
        "comments": 1,
        "created_at": "2015-09-30T02:23:09Z",
        "updated_at": "2015-09-30T02:36:53Z",
        "closed_at": null,
        "pull_request": {
          "url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/pulls/17",
          "html_url": "https://github.com/s4dmw/s4dmw.github.io/pull/17",
          "diff_url": "https://github.com/s4dmw/s4dmw.github.io/pull/17.diff",
          "patch_url": "https://github.com/s4dmw/s4dmw.github.io/pull/17.patch"
        },
        "body": ""
      },
      "comment": {
        "url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/comments/144263187",
        "html_url": "https://github.com/s4dmw/s4dmw.github.io/pull/17#issuecomment-144263187",
        "issue_url": "https://api.github.com/repos/s4dmw/s4dmw.github.io/issues/17",
        "id": 144263187,
        "user": {
          "login": "jeffworley",
          "id": 4316268,
          "avatar_url": "https://avatars.githubusercontent.com/u/4316268?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/jeffworley",
          "html_url": "https://github.com/jeffworley",
          "followers_url": "https://api.github.com/users/jeffworley/followers",
          "following_url": "https://api.github.com/users/jeffworley/following{/other_user}",
          "gists_url": "https://api.github.com/users/jeffworley/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/jeffworley/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jeffworley/subscriptions",
          "organizations_url": "https://api.github.com/users/jeffworley/orgs",
          "repos_url": "https://api.github.com/users/jeffworley/repos",
          "events_url": "https://api.github.com/users/jeffworley/events{/privacy}",
          "received_events_url": "https://api.github.com/users/jeffworley/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2015-09-30T02:36:53Z",
        "updated_at": "2015-09-30T02:36:53Z",
        "body": "As always you are to the point and accurate!  Nice progress. :+1: "
      }
    },
    "public": true,
    "created_at": "2015-09-30T02:36:54Z"
  },
  ```

* What fields are included in each result?

The following fields are included in each fetch events result.

`user info, repo, type, payload and comment`

The `payload` object is unique each time based on the type of event being reported.

* What are the data types for each field?

Each of the above fields are objects.  In particular they are dictionary objects with a range of `key:value` pairs.

* What are some of the different values for the type field?

Please see the list of all possible `type` values directly under the "when fetching public events" header.

> How can I use the Github API to...

* get all the comments for a particular issue?

The GET way:
```
GET /repos/:owner/:repo/issues/:number/comments
```

The endpoint way:
```
https://api.github.com/repos/{/owner}/issues/{/issue number}/comments
```

There are no defaults for the above and comments are listed in acending order ID.

* add a comment to an issue?

The POST way:
```
POST /repos/:owner/:repo/issues/:number/comments
```

The endpoint way:
```
https://api.github.com/repos/{/owner}/{:repo}/issues/{/number}/comments{/this takes the string comment you want to add}
```

This is our first post specific task, so I am not positive this works.

# [jQuery API](http://api.jquery.com/);

> How can I use the jQuery API to...

* get the HTML contents of an element?

```
$("/element tag").content(function(){
  return
)};
```

In the above example you would fill in the `("/element tag")` section with the html element you want to grab and then invoke the content method with an annonymous function to catch your returned value.  The returned value is the child which in our case ideally would be text.

* create a new HTML element?

```
$("/element tag").appendTo("/<some tag>some content</some tag>");
```

The above example grabs and html element and inserts the new html element and content within the selected html element.

* add an HTML element to the page?

```
$("/element tag").add("/<some tag>some content</some tag>");
```

The above example grabs an html element and adds the new html element and content after the selected html element.

I am sure there are many other ways to do this as well.

# [Lodash API](https://lodash.com/docs/)

> How can I use the Lodash API to...

* replace placeholders with values from an object?

At this time I believe I have an idea of what lodash is used for but could not grasp a good enough understanding to find the answer to the above and below questions...

* repeat code for every item of an array?

