function downToUp() {
    let dtuEle = document.getElementsByClassName("down-to-up") as HTMLCollectionOf<HTMLElement>

    for (let i = 0; i < dtuEle.length; i++) {

        let line = dtuEle[i];

        let lh = line.getBoundingClientRect().height


        let lineWord = line.innerText.split(" ")

        line.innerText = ""

        lineWord.map((e) => {

            if (e === ".br") {
                let wordElementBox = document.createElement("span")
                wordElementBox.classList.add("word-br")

                line.append(wordElementBox)

                return
            }

            let wordElementBox = document.createElement("span")
            wordElementBox.classList.add("word")

            let wordElement = document.createElement("span")
            wordElement.classList.add("word-text")

            wordElement.innerText = e + String.fromCharCode(160)

            wordElementBox.append(wordElement)


            line.append(wordElementBox)
        })

    }

}

export default downToUp