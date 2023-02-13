//active nav bar
var activePage = window.location.pathname;

console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});

$("#follow, #unfollow").click(function () {
    $("#follow, #unfollow").toggleClass('hidden');
});
