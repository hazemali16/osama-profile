let sections = document.querySelectorAll(".container > div:not(:last-child):not(:first-child)")
let projects = document.querySelectorAll(".projects .project")
let lis = document.querySelectorAll(".nav ul > li a")
let nav = document.querySelector(".nav")
let btn = document.querySelector(".up")

window.onscroll = () => {
    if (window.scrollY >= 10) {
        nav.style.cssText = "background-color: #0a1930; box-shadow: 0px 3px 5px;"
    } else {
        nav.style.cssText = "background-color: none; box-shadow: unset"
    }
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 400) {
            section.style.cssText = "opacity: 1; transform: translateY(0);"
            lis.forEach(li => {
                li.classList.remove("active")
            })
            lis[+section.id[1]].classList.add("active")
        } else {
            section.style.cssText = "opacity: 0; transform: translateY(50px);"
        }
    })
    projects.forEach((proj) => {
        if (window.scrollY >= proj.offsetTop + 400) {
            proj.style.cssText = "opacity: 1; transform: translateY(0);"
        } else if (window.scrollY >= sections[2].offsetTop - 400) {
            proj.style.cssText = "opacity: 0; transform: translateY(50px);"
        }
    })
    if (window.scrollY >= 1500) {
        btn.style.opacity = "1"
    } else {
        btn.style.opacity = "0"
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
lis.forEach((li) => {
    li.addEventListener("click", (ele) => {
        lis.forEach(li => {
            li.classList.remove("active")
        })
        ele.currentTarget.classList.add("active")
    })
})