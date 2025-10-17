let toDolist = [];
import { Todo } from "./toDoCreate";
import { display } from "./dom";
export function toDoHandle() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("date").value;

    toDolist.push(new Todo(title, description, date, priority));
    console.log(toDolist);
    display(toDolist);
    form.reset();
  });
}
export function dialogHandle() {
  const dialog = document.querySelector("dialog");
  const button = document.querySelector(".dialogBtn");
  const close = document.querySelector(".closeBtn");
  const form = document.querySelector("form");
  button.addEventListener("click", () => {
    dialog.showModal();
  });
  close.addEventListener("click", () => {
    dialog.close();
    form.reset();
  });
}
