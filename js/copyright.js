// Determine year for copyright notice
document.addEventListener("footerLoaded", function () {
    const copyright = document.getElementById("copyright");

    function setCopyrightDate() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        copyright.textContent = "© " + currentYear + " Jonathan Hill";
    }

    setCopyrightDate();
});