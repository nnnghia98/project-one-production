const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      margin-bottom: 10px;
      display: block;
    }

    .dropdown {
      position: relative;
    }

    .dropdown-header {
      border: 1px solid #9e7676;
      border-radius: 8px;
      background-color: #ffffff;
      font-family: "Avenir Next LT Pro";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #adb5bd;
      padding: 16px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dropdown-body {
      width: 100%;
      position: absolute;
      margin-top: 4px;
      padding: 8px 1px;
      background: #ffffff;
      border: 1px solid #9e7676;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 20px 20px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      display: none;
      list-style: none;
      max-height: 300px;
      overflow-y: scroll;
    }

    .dropdown-item {
      font-family: "Avenir Next LT Pro";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 8px 16px;
      cursor: pointer;
    }
  </style>

  <div class="dropdown">
    <div
      class='dropdown-header'
    ></div>
    <ul class='dropdown-body'>
    </ul>
    <slot></slot>
  </div>
`;

export class XDropdown extends HTMLElement {
  constructor() {
    super();

    this._title = "Dropdown";
    this._selected = {};
    this.show = false;

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this._header = this.shadowRoot.querySelector(".dropdown-header");
    this._header.innerText = this.title;

    this._body = this.shadowRoot.querySelector(".dropdown-body");
    this._body.style.display = "none";
  }

  static get observedAttributes() {
    return ["title", "dataset", "data", "selected", "onchange"];
  }

  connectedCallback() {
    if (this._header.isConnected) {
      if (this.data) {
        console.log(this._header.onchange);

        const dropdownData = JSON.parse(this.data);

        dropdownData.forEach((item) => {
          const li = document.createElement("li");

          li.className = "dropdown-item";
          li.innerText = item.name;
          li.addEventListener("click", () => this._select(item));

          this._body.appendChild(li);
        });
      }

      this._header = this.addEventListener("click", () => this.toggle());
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(name);
    switch (name) {
      case "title":
        this._header.innerText = newValue;
        break;
      case "data":
        this._header.dataset.dropdown = newValue;
        break;
      case "onchange":
        this._header.onchange = newValue;
        break;
      default:
        break;
    }
  }

  get title() {
    return this._header;
  }

  set title(newValue) {
    this._header = newValue;
    this._header.innerText = this._header;
  }

  get data() {
    return this._header.dataset.dropdown;
  }

  set data(newValue) {
    this.data = newValue;
    this._header.dataset.dropdown = this.data;
  }

  get onchange() {
    return this._header.onchange;
  }

  set onchange(newValue) {
    this.onchange = newValue;
    this._header.onchange = this.onchange;
  }

  toggle() {
    this.show = !this.show;
    this._body.style.display = this.show ? "block" : "none";
    // this.dispatchEvent(new CustomEvent("showChange", { detail: this.show }));
  }

  _select(item) {
    this._selected = item;
    // this._header.innerText = this._selected.name;
  }
}

window.customElements.define("x-dropdown", XDropdown);
