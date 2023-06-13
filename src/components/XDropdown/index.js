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

    .selected {
      font-weight: 600;
      color: #594545;
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
      z-index: 9999;
    }

    .dropdown-item {
      font-family: "Avenir Next LT Pro";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 8px 16px;
      cursor: pointer;
    }

    .svg-wrapper {
      display: flex;
      transform: rotate(0deg);
      transition: all 0.2s ease-in-out;
    }

    .svg-wrapper.open {
      transform: rotate(180deg);
    }

  </style>

  <div class="dropdown">
    <div
      class='dropdown-header'
    >
    </div>
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
        const dropdownData = JSON.parse(this.data);
        const header = this._header;

        dropdownData.forEach((item) => {
          const li = document.createElement("li");

          const selectItem = (item) => {
            return () => {
              header.innerText = item.name;
              header.classList.add("selected");
            };
          };

          li.className = "dropdown-item";
          li.innerText = item.name;
          li.addEventListener("click", selectItem(item));

          this._body.appendChild(li);
        });
      }

      const svgWrapper = document.createElement("div");

      svgWrapper.className = "svg-wrapper";
      svgWrapper.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.72 15.7799C12.5795 15.9206 12.3888 15.9997 12.19 15.9999H11.81C11.6116 15.9976 11.4217 15.9188 11.28 15.7799L6.14997 10.6399C6.05532 10.546 6.00208 10.4182 6.00208 10.2849C6.00208 10.1516 6.05532 10.0238 6.14997 9.92992L6.85997 9.21992C6.95214 9.12586 7.07828 9.07285 7.20997 9.07285C7.34166 9.07285 7.46781 9.12586 7.55997 9.21992L12 13.6699L16.44 9.21992C16.5339 9.12526 16.6617 9.07202 16.795 9.07202C16.9283 9.07202 17.0561 9.12526 17.15 9.21992L17.85 9.92992C17.9446 10.0238 17.9979 10.1516 17.9979 10.2849C17.9979 10.4182 17.9446 10.546 17.85 10.6399L12.72 15.7799Z" fill="#ADB5BD"/>
      </svg>
      `;

      this._header.appendChild(svgWrapper);
      this._header = this.addEventListener("click", () => this.toggle());
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
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
    this._title = newValue;
    this._header.innerText = this._title;
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
