# Karma Farm
![Image of app](./public/api-screenshot.png) \
Plant your karma seeds and watch them grow!\
Watch the demonstration here: \
https://www.youtube.com/watch?v=6ElSeGuKak4 \
Wireframes:
  1. https://wireframe.cc/UXIN66
  2. https://wireframe.cc/VjUXWI

**Original Art by McKinley Smith** \
https://www.mckinleysmith.com \
## User Stories
The user will navigate to the RUKF and enter a subreddit in the search bar.\
When the user selects the subreddit, the view is populated with the ten most successful posts in that subreddit this month.\
Below that, the user is shown the best time of day for a successful subreddit post, based on a bell curve of the top posts.\
The user will then have the option of making a Google Calendar event to remind her to post for maximum karma.

## Currently in Alpha
1. The user selects a subreddit and is given an error if that subreddit doesn't exist
2. The user is provided with the top one hundred posts of that subreddit this week
3. The user is provided with the opportune time of day to post on that subreddit
4. Using Oauth, the user can log in with her Reddit credentials and post directly from Karma Farm
5. A logged in user can stage her posts and Karma Farm will post them at the opportune time
6. **Currently the user must leave his browser open to use the stage post feature. This will
    change when Karma Farm moves to a server**

## Future Implementations
1. The user can choose what time to post and is not restricted to Karma Farm's algorithm
2. The user will not be required to stay on the page in order to use the stage post functionality

## Required APIs and Data
For MVP, the app will need to utilize Reddit's open Source API and will not require OAuth.\
Required data from a GET request to this API will include:
  1. score
  2. created_utc
  3. id
  4. over_18
  5. permalink
  6. title
  7. url\
All of these data are provided by the Reddit API and have been successfully retrieved via testing.\
![Image of api-test](./public/api-test.png)
