let menu = document.querySelector("#menu-bar");

let header = document.querySelector("header");

let cursor1 = document.querySelector(".cursor1");

let cursor2 = document.querySelector(".cursor2");

menu.onclick = () => {
    menu.classList.toggle("fa-times");

    header.classList.toggle("active");
}

menu.onscroll = () => {
    menu.classList.remove("fa-times");

    header.classList.remove("active");
}

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
}

document.querySelectorAll("a").forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add("active");
        cursor2.classList.add("active");
    }

    links.onmouseleave = () => {
        cursor1.classList.remove("active");
        cursor2.classList.remove("active");
    }
});

var typed = new Typed(".typing-text", {
    strings : ["back-end developer", "front-end developer", "back end developer", "UI designer"],
    loop : true,
    typeSpeed : 150
});

VanillTilt.init(document.querySelectorAll(".tilt"), {
    max : 25
});