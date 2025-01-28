<<<<<<< HEAD
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
=======
const initialTodos = [
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "Read project instructions",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Complete project",
    completed: false,
    date: new Date(),
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "button_disabled",
};

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todoElement = todoTemplate.content
    .querySelector(".todo")
    .cloneNode(true);
  const todoNameEl = todoElement.querySelector(".todo__name");
  const todoCheckboxEl = todoElement.querySelector(".todo__completed");
  const todoLabel = todoElement.querySelector(".todo__label");
  const todoDate = todoElement.querySelector(".todo__date");
  const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

  todoNameEl.textContent = data.name;
  todoCheckboxEl.checked = data.completed;

  // Apply id and for attributes.
  // The id will initially be undefined for new todos.
  todoCheckboxEl.id = `todo-${data.id}`;
  todoLabel.setAttribute("for", `todo-${data.id}`);

  // If a due date has been set, parsing this it with `new Date` will return a
  // number. If so, we display a string version of the due date in the todo.
  const dueDate = new Date(data.date);
  if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }

  todoDeleteBtn.addEventListener("click", () => {
    todoElement.remove();
  });

  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const values = { name, date };
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
>>>>>>> 6f9dea3c3328672c97577eac205da3ba9a8fa40b
