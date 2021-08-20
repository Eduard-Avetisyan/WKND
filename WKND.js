function open_burger() {
    document.getElementById("burger-block").classList.toggle("none");
    document.addEventListener("click", function(event) {
        if (event.target.closest(".burger") || event.target.closest(".burger-block"))return;
        document.getElementById("burger-block").classList.add("none");
    });
}

function open_lang() {
    document.getElementById("lang-nav").classList.toggle("none");
    document.addEventListener("click", function(event) {
        if (event.target.closest(".lang-bar") || event.target.closest(".lang-nav"))return;
        document.getElementById("lang-nav").classList.add("none");
    });
}