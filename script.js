document.querySelectorAll(".blog-item").forEach(item => {
    item.addEventListener("click", event => {
        if (event.target.closest("a")) return;

        item.classList.toggle("expanded");

        const button = item.querySelector(".blog-toggle");

        if (button) {
            button.textContent = item.classList.contains("expanded")
                ? "Show less"
                : "Read more";
        }
    });
});