# differences between `useEffect` and `useState`

## `useEffect`

    - Ran at each render
    - Can have dependancies
    ```
        // Change the page everytime the action on the form changes
        React.useEffect(
            () => {
            window.location.href = form.target.action;
        }, [form]);
    ```
    - Not used for maintaining state variables like `useState` does

## `useState`

    - Maintains state by what it returns
        `const [name, setName] = React.useState('john');`

    - Ran on each render, with the exception of...
        - if you pass in an initializer function, that will get ran only once

```
function MyComponent({ initialName= ''}){
    const [name,setName] = React.useState(
        () => window.localStorage.getItem('name') || initialName    /** ran once */
    );
    const [age,setAge] = React.useState(0); /** ran every re-render */
}
```

## `useEffect`
