# Test Task - Interactive Tweet Cards of Hollywood Actors

## Source data

1. Technical assignment you can find [here](https://drive.google.com/file/d/1XQnUiuhy6zndS8wN9ZonHZV6Iu0esiA1/view);
2. The design of the project is presented in [Figma](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=BGCQIimBs4FgZXgl-0).

## Briefly about the application

An application showcases cards featuring Holliwood actors along with their respective tweet and follower counts. The page offers interactivity by allowing users to follow any actor with a simple click on the FOLLOW button. To keep track of subscribed characters, users can revisit the page in their browser as all personal subscription data is stored and immediately displayed.

### Functionality

Clicking the FOLLOW button enables users to subscribe to a perso. This action increments the follower count (FOLLOWERS) by 1, and the button's color and text label change to FOLLOWING. All character data is stored in the Local Storage, ensuring availability in subsequent browsing sessions.

If a user decides to unfollow a character, they can click the FOLLOWING button to revert its color and text label back to FOLLOW. Consequently, the number of followers decreases by 1.

### Technologies

- React
- React Router Dom
- Styled Components

## Instructions to run the project

1. Install dependencies using `npm install`.
2. Run the project `npm start`.
3. Navigate to /tweets to see the tweet cards and test their interactivity.
