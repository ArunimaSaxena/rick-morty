async function getData() {
    let url = 'https://rickandmortyapi.com/api/character/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

window.onload = async() => {
    const allData = await getData();
    // console.log(allData);
    const result = allData.results;
    // console.log(result);
    const mainDiv = document.getElementById("imgWrapper");
    result.map(resultData => {
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let addButton = document.createElement("button")
        addButton.innerHTML = "+"
        addButton.addEventListener("click", productCount)
        img.src = resultData.image
        let charName = document.createElement("p")
        let name = document.createTextNode(resultData.name)
        imgDiv.appendChild(img)
        imgDiv.classList.add("img-container")
        mainDiv.appendChild(imgDiv)
        charName.appendChild(name)
        charName.classList.add("char-name")
        imgDiv.appendChild(charName)
        imgDiv.appendChild(addButton)
        addButton.classList.add("add-btn")

    })
}
let count = 0;

function productCount() {
    count = count + 1;
    document.getElementById("addCount").innerHTML = count
}

async function searchImg(e) {
    // document.getElementById("imgWrapper").style.display = "none"
    const allData = await getData();
    // console.log(allData);
    const result = allData.results;
    let searchVal = e.target.value.toLowerCase();
    // console.log("nameeee", searchVal)
    let counter = 0;
    let searchResult = result.map((characterName) => {
        console.log({ searchVal, name: characterName.name })
        if (characterName.name.toLowerCase().includes(searchVal)) {
            console.log("counter value", counter)
            counter++;
        }
        if (characterName.name.toLowerCase().includes(searchVal)) {
            return `<div class="character">
            <img class="char-img" src="${characterName.image}"></img>
                <h2>${characterName.name}</h2>
                <button onclick='click()'>+</button>
              
            </div>`
        }
    }).join('')
    imgWrapper.innerHTML = searchResult;

}