---
title: How we built React Form Validation
date: 2018-02-24 17:23 UTC
tags:
---

When building websites heavy on user interaction, validation of their input is a
considerable task. At CoverHound, it's a task we faced multiple times, often
taking the form of checking an input field for presence, or against a regular
expression.

As diligent programmers, once we'd encountered this enough times, we decided we
wanted an abstraction to simplify the problem and reduce boilerplate. We use
React + Redux, and up until this point, we had written separate logic per form -
not wanting to let a bad abstraction make our lives harder.

### Framing the problem

Having a substantial data set of expected behavior, we were able to deduce the
following requirements for form validations:

- Can pass in a collection of validation functions
- Able to re-use existing validation libraries
- Works with any HTML form
- Provides error messages
- Supports custom error messages
- Collects input values
- Validates only touched fields dynamically
- Validates all fields before submission

### Hunting down a suitable library

We hit Google and put in a combination of the search terms `react`, `form` and
`validation`. What we found fell under one (or more) of the following
categories:

- The project looked abandoned or the build was broken
- One or multiple of our requirements weren't met
- There was too much magic happening
- The project was too vast in scope, to the point where adding it would add too
  much complexity to the project

I would love to expand on this point further, but at this point I can't remember
for the life of me the libraries we looked up.

### Breaking the problem into workable chunks

When we look at the problem, here is what I see:

#### State management

There has to be some form of state management so we can keep track of all the
data, and its validity, in one place.

#### Field-level tracking

Each field has to know when its contents have been modified. If we leave this to
assuming `empty === not modified` we'll run into issues, as a user could delete
all the contents of the field.

### Identifying the tools for the job

Part of our

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
