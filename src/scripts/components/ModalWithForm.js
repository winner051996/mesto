import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
    constructor(props, formSubmitCallback) {
        super(props);
        this._formSubmitCallback = formSubmitCallback;
        this._form = this._modal.querySelector(".edit-form");
        this._inputs = this._form.querySelectorAll(".edit-form__input");

    }

    _getInputValues() {
        return Array.from(this._inputs).map((node) => {
            return node.value;
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            this._formSubmitCallback(event, this._getInputValues());
            this.closeModal();
        });
    }
    
    closeModal() {
        super.closeModal();
        this._form.reset();
    }
}
