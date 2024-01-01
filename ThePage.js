const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Mode open function
function openModal(){
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};


// Mode close function
function closeModal(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}