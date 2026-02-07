const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".card button");
const closeBtn = document.querySelector(".close");
const productName = document.getElementById("product-name");

function openModal(e) {
    const card = e.currentTarget.closest(".card");
    const name = card.dataset.name;
    productName.textContent = "Вы покупаете: " + name;
    modal.classList.add("active");
}


function closeModal(e) {
    modal.classList.remove("active");
}


function setupButtons() {
    buttons.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    
    closeBtn.addEventListener("click", closeModal);


    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

setupButtons();
