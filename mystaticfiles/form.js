var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("mouseover", function() {
    this.querySelector(".dropdown-content").classList.add("show");
    });
    dropdowns[i].addEventListener("mouseout", function() {
    this.querySelector(".dropdown-content").classList.remove("show");
    });
}