- [ ] Why would you use class component over function components (removing hooks from the question)?

    So that you have a more defined way to access the react lifecycle. e.g. constructor() componentDidMount() render()

- [ ] Name three lifecycle methods and their purposes.

    constructor() initialize initial state of the component and calls the constructor of its parent class when using super().
    render() After constructor() and changes to state renders the components to the window.
    componentDidMount() After a component is loaded for the first time, do an action.

- [ ] What is the purpose of a custom hook?

    To create an snippet of code that has its own isolated state logic that can be passed and reused in any other file.

- [ ] Why is it important to test our apps?

    To see that the application is working properly and that subsequent changes to the code will not break functionality.