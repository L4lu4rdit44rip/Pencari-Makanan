import './item-makanan.js';
class ListMakanan extends HTMLElement {
    set makanan(makanan) {
        this._makanan = makanan;
        this.render();
    }

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            display: block;
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    render() {
        this.shadowDOM.innerHTML = '';
        this._makanan.forEach(makan => {
          const makanItemElement = document.createElement('item-makanan');
          makanItemElement.makan = makan;
          this.shadowDOM.appendChild(makanItemElement);
        });
    }
}
customElements.define('list-makanan', ListMakanan);