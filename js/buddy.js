const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const allBuddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddies of allBuddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddies.name.title} ${buddies.name.first} ${buddies.name.last}.
        Email Address: ${buddies.email}`;
        buddiesDiv.appendChild(p)
    }
}