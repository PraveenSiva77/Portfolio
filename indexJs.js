let menu = document.querySelector("#menuIcon");
let xIcon = document.querySelector(".fa-bars")
let navList = document.querySelector(".navList");

menu.onclick = () => {
    navList.classList.toggle('active');
    xIcon.classList.toggle('fa-xmark');
};

window.onscroll = () => {
    navList.classList.remove('active');
    xIcon.classList.remove('fa-xmark');
};


