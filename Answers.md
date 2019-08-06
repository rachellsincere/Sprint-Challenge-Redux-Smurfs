1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, Filter, concat. We use the spread operator or Object.Assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 

Actions represent the facts about “what happened” and the reducers update the state according to those actions.
The Store is the object that brings them together. The store is also where the state lives.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state holds the data of the appplication and component state handles data that affects the UI. Application state has information that many components can use while component state is can only be used by the component.
A good time to use component state is a menu bar with a "see more" or "hide" state.

1.  What is middleware?
Middleware is a function that is called between dispatch and reducers, and can alter actions or perform other functionalities using them.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk lets action creators return a function instead of an action to be able to make asynchronous calls.
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()
