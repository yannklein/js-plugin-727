import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

// initialize StimulusJS
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

// imports
import { fetchAPI, searchMovie } from "./movie";
import { initSortable } from "./plugins/init_sortable";

// element selection
const submit = document.querySelector("#submit");

// functions calls
fetchAPI("Jaws");
initSortable();

// event handling
submit.addEventListener("click", searchMovie);