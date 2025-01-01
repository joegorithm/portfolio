document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("nav").innerHTML = data;
        });

    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});