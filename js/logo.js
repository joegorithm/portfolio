// If the current date is during the week leading up to Christmas, switch the logo to the Christmas version

document.addEventListener("sidebarLoaded", function () {
    if (new Date().getMonth() === 11 && (new Date().getDate() >= 19 && new Date().getDate() <= 25)) {
        document.querySelector('.nav-icon-logo-christmas').style.display = 'block';
        document.querySelector('.nav-icon-logo-standard').style.display = 'none';
    } else {
        document.querySelector('.nav-icon-logo-christmas').style.display = 'none';
        document.querySelector('.nav-icon-logo-standard').style.display = 'block';
    }
});

document.addEventListener("footerLoaded", function () {
    if (new Date().getMonth() === 11 && (new Date().getDate() >= 19 && new Date().getDate() <= 25)) {
        document.querySelector('.footer-large-logo-christmas').style.display = 'block';
        document.querySelector('.footer-large-logo-standard').style.display = 'none';
        document.querySelector('.footer-small-logo-christmas').style.display = 'block';
        document.querySelector('.footer-small-logo-standard').style.display = 'none';
    } else {
        document.querySelector('.footer-large-logo-christmas').style.display = 'none';
        document.querySelector('.footer-large-logo-standard').style.display = 'block';
        document.querySelector('.footer-small-logo-christmas').style.display = 'none';
        document.querySelector('.footer-small-logo-standard').style.display = 'block';
    }
});