const cartButtons = document.querySelectorAll(".card button");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").textContent;
        alert(`${productName} added to cart`);
    });
});
