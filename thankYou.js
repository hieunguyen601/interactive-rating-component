const ratingNumber = document.querySelector('.number');
const savedRating = localStorage.getItem("selectedRating");

if (ratingNumber && savedRating) {
    ratingNumber.textContent = savedRating;
}
