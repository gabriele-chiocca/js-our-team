const teamMembers = [
  {
    name: 'Marco Bianchi',
    role: 'Designer',
    email: 'marcobianchi@team.com',
    img: 'img/male1.png',
  },
  {
    name: 'Laura Rossi',
    role: 'Front-end Developer',
    email: 'laurarossi@team.com',
    img: 'img/female1.png',
  },
  {
    name: 'Giorgio Verdi',
    role: 'Back-end Developer',
    email: 'giorgioverdi@team.com',
    img: 'img/male2.png',
  },
  {
    name: 'Marta Ipsum',
    role: 'SEO Specialist',
    email: 'martarossi@team.com',
    img: 'img/female2.png',
  },
  {
    name: 'Roberto Lorem',
    role: 'SEO Specialist',
    email: 'robertolorem@team.com',
    img: 'img/male3.png',
  },
  {
    name: 'Daniela Amet',
    role: 'Analyst',
    email: 'danielaamet@team.com',
    img: 'img/female3.png',
  },
];

/*

Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)
il font è 'Fredoka'

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)


*/

const teamContainerElement = document.getElementById('row-containerteam');

// Const dei valori

const emailcompiledtaked = document.getElementById('mail-input');

const namecompiledtaked = document.getElementById('nome-input');

const ruolocompiledtaked = document.getElementById('ruolo-input');

const imgcompiledtaked = document.getElementById('image-input');

for (const member of teamMembers) {
  const cardhtml = generateTeamCardMember(member);

  teamContainerElement.innerHTML += cardhtml;
}

function generateTeamCardMember(member) {
  const { img, name, role, email } = member;

  const cardhtml = `
  <div class="col-4 gy-4">
        <!-- Prima Card -->
          <div class="card bg-dark">
            <div class="row">
              <div class="col">
                <img src="./${img}" alt="member-image" />
              </div>
              <div class="col text-light m-auto">
                <h2>${name}</h2>
                <p>${role}</p>
                <p>${email}</p>
              </div>
            </div>
          </div>
        </div>`;

  return cardhtml;
}

const forminput = document.getElementById('form-add-member');

forminput.addEventListener('submit', (e) => {
  e.preventDefault();

  // Value

  const emailcompiled = emailcompiledtaked.value.trim();

  const namecompiled = namecompiledtaked.value;

  const rolecompiled = ruolocompiledtaked.value;

  const imgcompiled = imgcompiledtaked.value.trim();

  if (emailcompiled && namecompiled && rolecompiled && imgcompiled) {
    const newMember = {
      name: namecompiled,
      role: rolecompiled,
      email: emailcompiled,
      img: imgcompiled,
    };

    teamMembers.push(newMember);

    const newcardhtml = generateTeamCardMember(newMember);

    teamContainerElement.innerHTML += newcardhtml;

    emailcompiledtaked.value = '';
    namecompiledtaked.value = '';
    ruolocompiledtaked.value = '';
    imgcompiledtaked.value = '';
  }
});
