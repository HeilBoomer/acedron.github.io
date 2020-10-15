function toggleDark() {
    document.querySelectorAll("*").forEach(function(element) {
        element.classList.toggle("dark");
    });
}
