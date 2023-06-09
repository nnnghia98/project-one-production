const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    margin-bottom: 10px;
    display: block;
  }
  .invalid-field {
    border: 1px solid #db524e;
    transition: 0.1s linear;

    &::placeholder {
      font-family: "Avenir Next LT Pro";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #db524e;
    }

    &:focus {
      outline-color: #db524e;

      &::placeholder {
        font-family: "Avenir Next LT Pro";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #adb5bd;
      }
    }
  }
  .input-wrapper {
    display: table;
  }
  input {
    width: 100%;
    height: 56px;
    font-family: "Avenir Next LT Pro";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: table-cell;
    color: #594545;
    border: 1px solid #9e7676;
    border-radius: 8px;
    text-indent: 16px;
    transition: 0.1s linear;

    &::placeholder {
      font-family: "Avenir Next LT Pro";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #adb5bd;
    }

    &:active {
      border-color: #594545;
    }

    &:hover {
      border-color: #815b5b;
    }

    &:focus {
      outline: none;
    }
  }
  .error-message {
    display: block;
    font-family: "Avenir Next LT Pro";
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    margin: 2px 0 0 20px;
    color: #db524e;
  }
  .hidden {
    display: none;
  }
  ::slotted(span) {
    color: grey;
    font-style: italic;
    padding-left: 10px;
  }
</style>

<div class="input-wrapper">
  <input />
  <slot></slot>
  <span class="error-message hidden"></span>
</div>`;

export class XInputField extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector("input");
    this.$error = this.shadowRoot.querySelector(".error-message");
  }

  static get observedAttributes() {
    return [
      "value",
      "type",
      "placeholder",
      "onchange",
      "error-message",
      "invalid",
    ];
  }

  connectedCallback() {
    if (this.$input.isConnected) {
      this.$input.addEventListener("blur", (event) => {
        if (!event.target.value && this.hasAttribute("required")) {
          this.invalid = true;
          this.$error.innerText = "This field is required!";
        } else {
          this.invalid = false;
          this.value = event.target.value;
        }
      });
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "type":
        this.$input.type = newValue;
        break;
      case "placeholder":
        this.$input.placeholder = newValue;
        break;
      case "onchange":
        // this.$input.addEventListener("change", (newValue));
        break;
      case "error-message":
        this.$error.innerText = newValue;
        break;
      case "invalid":
        this._handleInvalidState(newValue);
        break;
      default:
        break;
    }
  }

  get invalid() {
    return this.hasAttribute("invalid");
  }

  set invalid(value) {
    if (!!value) {
      this.setAttribute("invalid", "");
    } else {
      this.removeAttribute("invalid");
    }
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  _handleInvalidState(value) {
    if (value !== null) {
      this.$error.classList.remove("hidden");
      this.$input.classList.add("invalid-field");
    } else {
      this.$error.classList.add("hidden");
      this.$input.classList.remove("invalid-field");
    }
  }
}

window.customElements.define("x-input", XInputField);
