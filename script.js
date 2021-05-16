"use strict";

const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const cancel = document.getElementById("cancel");
const done = document.getElementById("continue");


open.addEventListener("click", function() {
    modal_container.classList.add("show");
})

cancel.addEventListener("click", function () {
    modal_container.classList.remove("show");
});

done.addEventListener("click", function () {
    modal_container.classList.remove("show");
});