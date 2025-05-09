
function startVersion1() {
    let kaverit1 = [];
    for (let i = 0; i < 10; i++) {
        let nimi = prompt(`Anna nimi:`);
        if (nimi) kaverit1.push(nimi);
    }
    let listElement1 = document.getElementById("friendsList1");
    listElement1.innerHTML = "";
    kaverit1.forEach(nimi => {
        let li = document.createElement("li");
        li.textContent = nimi;
        listElement1.appendChild(li);
    });
}

let kaverit2 = [];

function addFriend() {
    let nameInput = document.getElementById("nameInput");
    let nimi = nameInput.value.trim();
    if (nimi && !kaverit2.includes(nimi)) {
        kaverit2.push(nimi);
        nameInput.value = "";
        updateList();
    } else {
        alert("Nimi on jo listalla tai kenttä on tyhjä!");
    }
}

function removeFriend() {
    let nameInput = document.getElementById("nameInput");
    let nimi = nameInput.value.trim();
    let index = kaverit2.indexOf(nimi);
    if (index !== -1) {
        kaverit2.splice(index, 1);
        nameInput.value = "";
        updateList();
    } else {
        alert("Nimeä ei löytynyt listalta!");
    }
}

function sortFriends() {
    kaverit2.sort();
    updateList();
}

function updateList() {
    let listElement2 = document.getElementById("friendsList2");
    listElement2.innerHTML = "";
    kaverit2.forEach((nimi, index) => {
        let li = document.createElement("li");
        li.textContent = `$${nimi}`;
        listElement2.appendChild(li);
    });
}


