class ItemMakanan extends HTMLElement {
    set makan(makan) {
      this._makan = makan;
      this.render();
    }
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
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
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        }
        
        .fan-art-makan {
            width: 100%;
            max-height: 700px;
            object-fit: cover;
            object-position: center;
        }
        
        .makan-info {
            padding: 24px;
            background-color: burlywood;
        }
        
        .makan-info > h1 {
            font-weight: lighter;
            font-weight: bold;
            
        }
        .makan-info > h2 {
            font-weight: lighter;
            
        }
        .makan-info > p {
            margin-top: 10px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
            text-align: justify;
            
        }
      </style>
        <img class="fan-art-makan" src="${this._makan.strMealThumb}" alt="Fan Art">
        <div class="makan-info">
          <h1> ${this._makan.strMeal}</h1>
          <h2> ${this._makan.strArea} -  ${this._makan.strCategory}<h2>
          <h2></h2>
          <p>${this._makan.strInstructions}</p>
        </div>
      `;
    }
  }
   
  customElements.define('item-makanan', ItemMakanan);