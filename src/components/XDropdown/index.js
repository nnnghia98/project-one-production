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
  </style>

  <div class="dropdown">
    <div
      class='dropdown-header'
    ></div>
    <ul class='dropdown-body'>
      <li>Item</li>
    </ul>
    <slot></slot>
  </div>
`;

export class XDropdown extends HTMLElement {
  constructor() {
    super();

    this._title = "Dropdown";
    this.show = false;

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$header = this.shadowRoot.querySelector(".dropdown-header");

    this.$body = this.shadowRoot.querySelector("ul.dropdown-body");
    this.$body.style.display = "none";
  }

  static get observedAttributes() {
    return ["title"];
  }

  connectedCallback() {
    if (this.$header.isConnected) {
      this.$header = this.addEventListener("click", () => this.toggle());
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this.$header.innerText = newValue;
        break;
      default:
        break;
    }
  }

  get title() {
    return this.$header;
  }

  set title(newValue) {
    this.$header = newValue;
    this.$header.innerHTML = this.$header;
  }

  toggle() {
    this.show = !this.show;
    this.$body.style.display = this.show ? "display" : "none";
  }
}

window.customElements.define("x-dropdown", XDropdown);
