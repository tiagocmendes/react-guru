class Todo {
    id: string;
    text: string;

    constructor(text: string) {
        this.id = new Date().toISOString() + text;
        this.text = text;
    }
}

export default Todo;
