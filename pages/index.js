import { initialTodos, validationConfig } from "../utils/constants.js";
import { Todo } from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { TodoCounter } from "../components/TodoCounter.js";

document.addEventListener("DOMContentLoaded", () => {
    const addTodoButton = document.querySelector(".button_action_add");
    const todosListSelector = ".todos__list";
    const counterSelector = ".counter__text";

    const addTodoForm = document.querySelector(".popup__form");
    const formValidator = new FormValidator(validationConfig, addTodoForm);
    formValidator.enableValidation();

    const todoCounter = new TodoCounter(initialTodos, counterSelector);

    const generateTodo = (data) => {
        if (!data || !data.name) return null;

        try {
            const todo = new Todo(data, "#todo-template");
            const todoElement = todo.getView();

            const checkbox = todoElement.querySelector(".todo__completed");
            const deleteButton = todoElement.querySelector(".todo__delete-btn");

            checkbox.addEventListener("change", () => {
                todoCounter.updateCompleted(checkbox.checked);
            });

            deleteButton.addEventListener("click", () => {
                todoCounter.updateTotal(false);
                if (checkbox.checked) {
                    todoCounter.updateCompleted(false);
                }
            });

            return todoElement;
        } catch (error) {
            return null;
        }
    };

    const todoSection = new Section({
        items: initialTodos,
        renderer: (item) => {
            const todoElement = generateTodo(item);
            if (todoElement) {
                todoSection.addItem(todoElement);
            }
        },
        containerSelector: todosListSelector
    });

    todoSection.renderItems();

    const addTodoPopup = new PopupWithForm("#add-todo-popup", (formData) => {
        if (!formData.name) return;

        const date = formData.date ? new Date(formData.date) : null;
        if (date) date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

        const newTodo = { id: uuidv4(), name: formData.name, date, completed: false };
        const todoElement = generateTodo(newTodo);
        if (todoElement) {
            todoSection.addItem(todoElement);
            todoCounter.updateTotal(true);
        }

        formValidator.resetValidation();
    });

    addTodoPopup.setEventListeners();

    addTodoButton.addEventListener("click", () => {
        addTodoPopup.open();
    });
});
