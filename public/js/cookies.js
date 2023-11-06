const cookieValue1 = document.cookie.replace(
  /(?:(?:^|.*;\s*)connecter\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (document.cookie.indexOf("connecter") >= 0) {
  const profilLink = document.querySelector(
    'a[href="./html/page-de-connexion.html"]'
  );

  const profilIcon = document.createElement("i");
  profilIcon.classList.add("fa-solid", "fa-user");
  profilIcon.setAttribute("id", "profil");

  const profilLinkReplacement = document.createElement("a");
  profilLinkReplacement.setAttribute("href", "./html/profil.html");
  profilLinkReplacement.appendChild(profilIcon);

  profilLink.replaceWith(profilLinkReplacement);
}
