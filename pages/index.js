import { initialTodos, validationConfig } from "../utils/constants.js";
import { Todo } from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { FormValidator } from "../components/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
  const addTodoButton = document.querySelector(".button_action_add");
  const addTodoPopup = document.querySelector("#add-todo-popup");
  const addTodoForm = addTodoPopup.querySelector(".popup__form");
  const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
  const todosList = document.querySelector(".todos__list");

  const formValidator = new FormValidator(validationConfig, addTodoForm);
  formValidator.enableValidation();

  const openModal = (modal) => {
    modal.classList.add("popup_visible");
    document.addEventListener("keydown", closeOnEscape);
  };

  const closeModal = (modal) => {
    modal.classList.remove("popup_visible");
    document.removeEventListener("keydown", closeOnEscape);
  };

  const closeOnEscape = (evt) => {
    if (evt.key === "Escape") {
      closeModal(addTodoPopup);
    }
  };

  const closeOnClickOutside = (evt) => {
    if (evt.target === addTodoPopup) {
      closeModal(addTodoPopup);
    }
  };

  addTodoButton.addEventListener("click", () => {
    openModal(addTodoPopup);
  });

  addTodoCloseBtn.addEventListener("click", () => {
    closeModal(addTodoPopup);
  });

  addTodoPopup.addEventListener("click", closeOnClickOutside);

  const generateTodo = (data) => {
    const todo = new Todo(data, "#todo-template");
    return todo.getView();
  };

  initialTodos.forEach((item) => {
    const todo = generateTodo(item);
    todosList.append(todo);
  });

  addTodoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const newTodo = { id: uuidv4(), name, date, completed: false };
    const todoElement = generateTodo(newTodo);
    todosList.append(todoElement);

    closeModal(addTodoPopup);
    formValidator.resetValidation();
  });
});
