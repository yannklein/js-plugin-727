import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'click' ]

  connect() {
    console.log('Hello from disable_button.js')
  }
  
  disable() {
    this.clickTarget.innerText = "Bingo";
    this.clickTarget.disabled= true;
    this.resetTarget.classList.remove("d-none");
  }

  reset() {
    this.resetTarget.classList.add("d-none");
    this.clickTarget.innerText = "Click me!";
    this.clickTarget.disabled = false;
  }
}