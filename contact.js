// Récupérez les éléments du formulaire
const formulaire = document.getElementById('monFormulaire');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const objet = document.getElementById('objet');
const message = document.getElementById('message');

// Écoutez l'événement de soumission du formulaire
formulaire.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupérez les valeurs des champs
  const nomValue = nom?.value;
  const prenomValue = prenom?.value;
  const emailValue = email?.value;
  const objetValue = objet?.value;
  const messageValue = message?.value;

  // Envoyez les données à MailJet
  fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer a2c4fb487a1c192c4513b86760dc89e2',
    },
    body: JSON.stringify({
      Messages: [
        {
          From: {
            Email: 'karimtaslimant@gmail.com',
            Name: 'Karim TASLIMANT',
          },
          To: [
            {
              Email: 'karimtaslimant@gmail.com',
              Name: 'Karim TASLIMANT',
            },
          ],
          Subject: 'Nouveau message de contact portfolio',
          TextPart: `Nom: ${nomValue}\nPrenom: ${prenomValue}\nEmail: ${emailValue}\nObjet: ${objetValue}\nMessage: ${messageValue}`,
        },
      ],
    }),
  })
    .then((response) => {
     console.log('test') // Gérez la réponse de MailJet
      if (response.ok) {
        // Le message a été envoyé avec succès
        alert('Votre message a été envoyé avec succès.');
        nom.value = '';
        prenom.value = '';
        objet.value = '';
        email.value = '';
        message.value = '';
      } else {
        // Une erreur s'est produite lors de l'envoi du message
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      }
    })
    .catch((error) => {
      // Gérez les erreurs de connexion ou autres erreurs
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    });
});
