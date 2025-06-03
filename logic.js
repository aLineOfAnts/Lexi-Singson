var activeSection;
var transition; 

function UpdateHeader(section) {
    var navButtons = document.querySelector(".Header-Nav-Buttons");
    console.log(navButtons);
    if (section.id == "Projects" || section.id == "Artworks") {
        navButtons.style.color = '#69259D'
    } else
    {
        navButtons.style.color = '#FBE4B4'
    }
}

window.onload = function() {
    activeSection = document.getElementById("Home");
    transition = document.getElementById("Transition");
};

function NavButton(button) {
    let id = button.getAttribute("direct");
    console.log(id);
    transition.classList.add("Fade-In");

    transition.addEventListener("animationend", () => {
        activeSection.classList.add("hidden");
        activeSection = document.getElementById(id);
        activeSection.classList.remove("hidden");
        UpdateHeader(activeSection);
        transition.classList.remove("Fade-In");
        transition.classList.add("Fade-Out");
        transition.addEventListener("animationend", () => {
            transition.classList.remove("Fade-Out");
        });
    });
}