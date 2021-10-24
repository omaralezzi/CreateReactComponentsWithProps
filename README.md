# Task : Create React components with props

In this task we are going to build a small application that shows a list of users in nicely designed cards.
You can use the `listUsers.js` and use the array to generate the items.

## Task 1 - Create react app setup

1. Create a new folder called my `props-assignment-react`

2. Open the folder in visual studio and execute the following command in the terminal:
   `npx create-react-app .`
3. Ready to go! :)

## Task 2 - Create a component that shows detailcard of the user

In this part of the assignment we are going to build a card that displays the user information. The card needs to contain a username and a user description.

1. Create new folder `components` inside the `src` folder.
2. Create a new folder called `UserCard`.
3. Create a new file `index.js` inse the `UserCard` folder.
4. Write out the component. Make sure the component shows the name of the user and the age of the user. You can use the following snippet as a help:

```javascript
const ExampleComponent = () => {
   return (

   );
}
export default ExampleComponent;
```

You can use a style library like bootstrap or you can also apply your own styles.

5. Make sure the component uses a prop called `user`. You can use the following snippet as a help:

```javascript
const ExampleComponent = ({propname}) => {
   return (

   );
}
export default ExampleComponent;
```

## Task 3 - Create a component that shows a list of usercards

In this part of the assignment we want to build a component that displays the usercards in a list. This can be in a grid, or in any style you like, the choice is fully yours.
Make sure the component accepts a `users` as a prop.

1. Create a new folder called `UserList`.
2. Create a new file `index.js` inside the `UserList` folder.
3. Write out the component. You can use the following snippet for help :

```javascript
const ExampleComponent = ({propName}) => {
   return (

   );
}
export default ExampleComponent;
```

4.  Import the `UserCard` component.
5.  Make sure to display a card for each item inside `users`. You can use the following snippet as an example of how to list multiple components:

```javascript
{
  users.map((item, index) => {
    return <User user={item} key={index} />;
  });
}
```

## Task 4 - Wire up everything together

1. Import the `UserList` component inside `App.js`.
2. Import the users array from `listUsers.js` inside `App.js`

```javascript
import { users } from "./listUsers";
```

3. Configure the `UserList` component so it takes the array inside listUsers as a prop. Example :

```javascript
<UserList users={users} />
```
