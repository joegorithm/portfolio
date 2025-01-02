document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("nav").innerHTML = data;
            document.dispatchEvent(new Event("sidebarLoaded"));
        });

    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
            document.dispatchEvent(new Event("footerLoaded"));
        });
    
    fetch("/components/head.html")
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML += data;
        });
});

