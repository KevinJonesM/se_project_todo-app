export class Todo {
    constructor(data, selector, onComplete, onDelete) {
        this._data = data;
        this._selector = selector;
        this._onComplete = onComplete;
        this._onDelete = onDelete;
    }

    _setEventListeners(todoElement) {
        const deleteButton = todoElement.querySelector(".todo__delete-btn");
        const checkbox = todoElement.querySelector(".todo__completed");

        deleteButton.addEventListener("click", () => {
            if (this._data.completed) {
                this._onComplete(false);
            }
            this._onDelete();
            todoElement.remove();
        });

        checkbox.addEventListener("change", () => {
            this._data.completed = checkbox.checked;
            this._onComplete(this._data.completed);
        });
    }

    _formatDate(date) {
        if (!date) return "";
        const dueDate = new Date(date);
        return isNaN(dueDate) ? "" : `Due: ${dueDate.toLocaleDateString()}`;
    }

    getView() {
        const template = document.querySelector(this._selector).content.cloneNode(true);
        const todoElement = template.querySelector(".todo");

        const todoNameEl = todoElement.querySelector(".todo__name");
        const todoCheckboxEl = todoElement.querySelector(".todo__completed");
        const todoLabel = todoElement.querySelector(".todo__label");
        const todoDateEl = todoElement.querySelector(".todo__date");

        todoNameEl.textContent = this._data.name;
        todoCheckboxEl.checked = this._data.completed;

        const todoId = `todo-${this._data.id}`;
        todoCheckboxEl.id = todoId;
        todoLabel.setAttribute("for", todoId);
        todoDateEl.textContent = this._formatDate(this._data.date);

        this._setEventListeners(todoElement);
        return todoElement;
    }
}

