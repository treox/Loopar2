
// Skapa array med saker:
let saker = ['Programmering', 
            'Träna', 
            'Resa', 
            'lära känna nya människor', 
            'Lära mig nya saker'];

// Få åtkomst till element:
let bodytag = document.getElementById('body-tag');
let unorlitag = document.createElement('ul');

bodytag.appendChild(unorlitag);

// Skapa loop som skriver ut en lista med varje element i arrayn:
for (let i = 0; i < saker.length; i++) {
    let litag = document.createElement('li');
    unorlitag.appendChild(litag);
    litag.innerText = saker[i];
}
