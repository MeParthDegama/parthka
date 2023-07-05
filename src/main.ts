import './style.scss'

let bggr = document.getElementById("bggr") as HTMLElement

window.onmousemove = (e) => {
  bggr.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(250, 90, 90, 0.09), transparent 80%)`
}

let projectBlocks = document.getElementsByClassName("project-block") as HTMLCollectionOf<HTMLElement>
for (let i = 0; i < projectBlocks.length; i++) {
  let block = projectBlocks[i]
  let link = block.getAttribute("openlink")
  block.onclick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }
}

