// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= link_tree ../images
//= link_directory ../stylesheets .css
//= require semantic-ui
//= require turbolinks
//= require jquery

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
})

Rails.start()
Turbolinks.start()
ActiveStorage.start()

