const buttonElement = document.querySelectorAll('.circle');
buttonElement.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.circle').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        localStorage.setItem("selectedRating", button.value);
    });
});
