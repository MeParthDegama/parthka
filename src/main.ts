import './style.scss'
import downToUp from './downToUp'

downToUp()

setTimeout(() => {
    window.scrollTo(0, 0)
}, 1000)

let navBar = document.getElementById("navbtn") as HTMLElement
navBar.onclick = () => {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active")
    } else {
        navBar.classList.add("active")
    }
}
