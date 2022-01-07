const modal = document.getElementById("rulesModal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("close");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");


// Open Modal When User Clicks Button
modalBtn.onclick = function () {
    modal.style.display = "block";
};

// Close the Modal When User Clicks the Close Button
closeModal.onclick = function () {
    modal.style.display = "none";
};