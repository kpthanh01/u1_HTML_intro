let baseStats = {
    hp: 59,
    attack: 45,
    defense: 40,
    spAtk: 35,
    speed: 32
}

const pkmStats = document.getElementById('stats');
for(const[key, value] of Object.entries(baseStats)) {
    let content = document.createElement('p')
    content.innerHTML = `${key.toUpperCase()}: ${value}`
    pkmStats.appendChild(content)
}


function mapAlert() {
    alert("Map has been clicked");
}
