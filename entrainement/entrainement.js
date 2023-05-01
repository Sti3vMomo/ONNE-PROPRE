const DemandeSesInformations = () => {
  let prenom = prompt("Entrez votre prénom");
  let nom = prompt("Entrez votre nom");
  let age;
  do {
  age = prompt("Entrez votre âge");
  } while (isNaN(age));
  alert("Vous vous appelez " + nom + " " + prenom + " et vous avez " + age + " ans");
};

DemandeSesInformations();
