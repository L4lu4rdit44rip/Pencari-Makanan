class HeadBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
      
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: brown;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
          font-size: 24px;
        }
        h2 {
          padding: 20px;
        }
      </style>
      <h2>Makanan Arip's</h2>`;
    }
}
  
  customElements.define('head-bar', HeadBar);