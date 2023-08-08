const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".search-icon");

magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
})