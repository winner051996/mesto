export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(item);
        });
        
        this.element = undefined;
    }

    _clearContainer() {
        this._container.textContent = "";
    }

    setItems(items) {
        this._items = items;
        this._clearContainer();
        this.renderItems();
    }

    addItem(item) {
        this._element = this._renderer(item);
        this._container.prepend(this._element);
    }
}
