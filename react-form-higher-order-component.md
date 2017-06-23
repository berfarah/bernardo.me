# How we built React Form Validation

### The problem

We want to be able to do dynamic form validations. We want the system to be
flexible:

- Should take an object of validations
- Should work with validation libraries
- Should support custom error messages
- Should work with any HTML form
- Should give error messages
- Should collect input values
- Should validate only after the field has been left the first time
- Should validate before submission

### Higher Order Components

Higher order components take inspiration from Higher order functions - in that
they return a function as their result.

To quote from the [React docs](https://facebook.github.io/react/docs/higher-order-components.html)

> Concretely, a higher-order component is a function that takes a component and
> returns a new component

Why is it good for this usecase? You may be familiar with the Redux `connect`
component. If we use a HOC we'll be able to:

- Take arguments in the function around validation
- Manage state of the wrapped component
- Access the wrapped component's elements
- Access the wrapped component's events

Sounds perfect!

### The Abstractions

As we thought through this problem, a few different areas of abstraction
emerged:

##### Fields

Each field would need to track:

- Should it validate? We only want it to validate once it's been blurred
- Does it need to validate? We only need to validate it if it has changed (or
  was blurred)
- What is it validating? Each field should have its own validation
- What is the field's error?

##### Fieldsets

The fieldset should be able to:

- Construct a hash of fields for quick references
- Assign validations to each of those fields
- Trigger events, such as `submit`, `change` or `blur`, where submit would
  trigger a blur event for each field
- Validate all fields in concert and provide a set of errors

##### The form

The form needs to:

- Take in arguments validation arguments
- Keep track of values and errors
- Update when there are new validation errorsi
- Provide event handlers
- Allow for callbacks inside of those event handlers
- Render the wrapped form
- Tell the form whether or not it's valid

### Implementing the abstractions

As we look at these, only one of the abstractions actually needs to know about
React. Fields and Fieldsets can be regular old classes! Now you have the option
of either starting with TDD, knowing what the requirements are, or having at it
and writing regression tests. Knowing the information above, the methods become
quickly apparent. If you're curious to see what we did, check out the source for
`Field` [here](#) and `Fieldset` [here](#).

...<> Talk more about createForm here

### The code

We created a package for this that is free for all to use! See [here](#)

In use:

```jsx
// ...
```
