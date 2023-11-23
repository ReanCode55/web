// Menu

function isShow() {
    document.getElementById("nav").style.width = "300px";
    console.log("Show");
}
function isHide() {
    document.getElementById("nav").style.width = "0px";
    console.log("Hide");
}

// Click Scroll ( Smooth )
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
}); 