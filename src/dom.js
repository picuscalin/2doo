export function display(list) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  list.forEach((element, index) => {
    let card = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.index = index;
    deleteBtn.addEventListener("click", (e) => {
      list.splice(e.target.dataset.index, 1);
      display(list);
    });

    card.classList.add("card");
    card.innerHTML = `<div> Title: ${element.title}</div><div> Desc: ${element.description}</div><div> Date: ${element.date}</div><div> Priority: ${element.priority}</div> `;
    card.appendChild(deleteBtn);
    container.appendChild(card);
  });
}
