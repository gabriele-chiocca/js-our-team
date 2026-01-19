for (const member of teamMembers) {
  const cardhtml = generateTeamCardMember(member);

  teamContainerElement.innerHTML += cardhtml;
}

function generateTeamCardMember(member) {
  const { img, name, role, email } = member;

  const cardhtml = `
  <div class="col-lg-4 col-12 gy-4">
        <!-- Prima Card -->
          <div class="card bg-dark">
            <div class="row">
              <div class="col">
                <img src="./${img}" alt="member-image" class="team-img" />
              </div>
              <div class="col text-light m-auto">
                <h2 class="fs-3">${name}</h2>
                <p>${role}</p>
                <p>${email}</p>
              </div>
            </div>
          </div>
        </div>`;

  return cardhtml;
}

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
