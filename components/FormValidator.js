export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(
            this._formElement.querySelectorAll(this._settings.inputSelector)
        );
        this._submitButton = this._formElement.querySelector(
            this._settings.submitButtonSelector
        );
    }
  
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(
            `#${inputElement.id}-error`
        );
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._settings.errorClass);
    }
  
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(
            `#${inputElement.id}-error`
        );
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    }
  
    _toggleButtonState() {
        const isFormValid = this._inputList.every(
            inputElement => inputElement.validity.valid
        );
  
        if (isFormValid) {
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }
  
    _setEventListeners() {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }
  
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }
  
    enableValidation() {
        this._setEventListeners();
    }
  
    resetValidation() {
        this._formElement.reset();
        
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
  
        this._toggleButtonState();
    }
}
