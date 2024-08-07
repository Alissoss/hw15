/*Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання
 нової нотатки, видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток.
  Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього
   нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.
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
}

const myTodoList = new TodoList();
myTodoList.addTodo("Виконати дз по курсу");
myTodoList.addTodo("Погодувати кота");
myTodoList.completeTodo(myTodoList.getAllTodos()[0].id);
myTodoList.editTodo(myTodoList.getAllTodos()[1].id, "Купити ковбаски для кота");

console.log("Всі справи:", myTodoList.getAllTodos());
console.log("Кількість всіх справ:", myTodoList.getTotalCount());
console.log("Кількість невиконаних справ:", myTodoList.getPendingCount());