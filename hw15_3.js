/*-||-Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування,
 включивши в них можливість роботи з датою.
*/
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(text) {
        if (text.trim() === "") {
            console.error("Справа не може бути порожньою.");
            return;
        }
        const now = new Date();
        const todo = {
            id: this.todos.length + 1,
            text,
            completed: false,
            createdAt: now,
            updatedAt: now
        };
        this.todos.push(todo);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, newText) {
        if (newText.trim() === "") {
            console.error("Справа не може бути порожньою.");
            return;
        }
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.text = newText;
            todo.updatedAt = new Date();
        } else {
            console.error("Справа не знайдена.");
        }
    }

    getTodoInfo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            return todo;
        } else {
            console.error("Справа не знайдена.");
            return null;
        }
    }

    getAllTodos() {
        return this.todos;
    }

    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            todo.updatedAt = new Date();
        } else {
            console.error("Справа не знайдена.");
        }
    }

    getTotalCount() {
        return this.todos.length;
    }

    getPendingCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    searchTodoByText(text) {
        return this.todos.filter(todo => todo.text.includes(text));
    }

    
    sortTodosByStatus() {
        return this.todos.sort((a, b) => a.completed - b.completed);
    }

    searchTodoByDate(date) {
        const targetDate = new Date(date).toDateString();
        return this.todos.filter(todo => new Date(todo.createdAt).toDateString() === targetDate);
    }

    sortTodosByCreatedAt() {
        return this.todos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    sortTodosByUpdatedAt() {
        return this.todos.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
    }
}

const myTodoList = new TodoList();
myTodoList.addTodo("Виконати дз по курсу");
myTodoList.addTodo("Погодувати кота");
myTodoList.completeTodo(myTodoList.getAllTodos()[0].id);
myTodoList.editTodo(myTodoList.getAllTodos()[1].id, "Купити ковбаски для кота");

console.log("Всі справи:", myTodoList.getAllTodos());
console.log("Кількість всіх справ:", myTodoList.getTotalCount());
console.log("Кількість невиконаних справ:", myTodoList.getPendingCount());

console.log("Пошук справ за текстом 'кот':", myTodoList.searchTodoByText('кот'));
console.log("Пошук справ за датою створення:", myTodoList.searchTodoByDate(new Date().toDateString()));

console.log("Сортування справ за статусом:", myTodoList.sortTodosByStatus());
console.log("Сортування справ за датою створення:", myTodoList.sortTodosByCreatedAt());
console.log("Сортування справ за датою редагування:", myTodoList.sortTodosByUpdatedAt());