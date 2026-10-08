const toggleBtn = document.querySelector(".theme-toggle");
const themeText =document.querySelector("#theme-text");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeText.textContent = "LIGHT";
    } else {
        themeText.textContent = "DARK";
    }

});