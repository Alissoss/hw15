/*-||- Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я,
 а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).
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
        const todo = {
            id: this.todos.length + 1,
            text,
            completed: false
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

searchTodoByTitle(title) {
    return this.todos.filter(todo => todo.title.includes(title));
  }

  sortTodosByStatus() {
    return this.todos.sort((a, b) => a.completed - b.completed);
  }
}
const todoList = new TodoList();
todoList.addTodo('Купити ласощі');
todoList.addTodo('Винести сміття');
todoList.addTodo('Подзвонити мамі');
todoList.completeTodo(2);
console.log(todoList.getAllTodos());
console.log(todoList.getTotalCount());
console.log(todoList.searchTodoByTitle('сміття'));
console.log(todoList.sortTodosByStatus());

todoList.editTodo(1, 'Погладити собаку');
console.log(todoList.getTodoInfo(1));

todoList.deleteTodo(3);
console.log(todoList.getAllTodos());