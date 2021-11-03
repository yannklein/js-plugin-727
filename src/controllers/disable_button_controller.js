import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'back', 'button' ]

  connect() {
    console.log('Hello from disable_button_controller.js')
  }
  
  disable() {
    console.log("Disable the button!");
    this.buttonTarget.disabled = true;
    this.buttonTarget.innerText = "Bingo";
    this.backTarget.classList.remove("d-none");
  }

  reset() {
    console.log("Disable the button!");
    this.buttonTarget.disabled = false;
    this.buttonTarget.innerText = "Click me";
    this.backTarget.classList.add("d-none");
  }
}