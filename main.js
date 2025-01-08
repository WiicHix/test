/* Lösning till moment 5 - Fördjupning inom JavaScript, av Anna Norberg, 2024. */

"use strict";

/*  Delar till ej obligatorisk funktionalitet, som kan ge poäng för högre betyg
  Radera rader för funktioner du vill visa på webbsidan. 
document.getElementById("player").style.display = "none";      // Radera denna rad för att visa musikspelare
document.getElementById("shownumrows").style.display = "none"; // Radera denna rad för att visa antal träffar */

/* Variabler för de element i HTML-koden som behöver ha en funktionalitet */
const mainNavListEl = document.getElementById("mainnavlist");
const infoEl = document.getElementById("info");
const numrowsEl = document.getElementById("numrows");

/* Händelsehanterare */
// Vid laddad sida anropas funktionerna
window.onload = init;

// Visa vald tablå?
itemListEl.addEventListener("click")

/* Funktioner */
// Initerande-funktion
function init() {
  // Anrop på funktionen getChannels
  getChannels();
  // Anrop på funktionen startPage
  startPage();
}

// Funktion för att hämta kanaler från SR
function getChannels() {
  const url = `https://api.sr.se/api/v2/channels?format=json`;

  // Anropa webbtjänsten i ett JSON-format
  fetch(url)
    // Omvandlar svaret till ett JS-objekt
    .then((response) => response.json())
    // Anropa funktionen för att visa kanalerna
    .then((data) => showChannels(data.channels))
    // Felmeddelande
    .catch((error) => console.log(`Följande fel uppstod; ${error}`));
}

// Funktion för att skriva ut kanalerna till mainnavlist
function showChannels(channels) {
  // Tömma listan
  mainNavListEl.innerHTML = "";

  // Loopar igenom kanalerna och skapar en lista med kanaler
  channels.forEach((channel) => {
    // Skapa nytt li-element för varje enskild kanal
    let itemListEl = document.createElement("li");
    // Skapa textnod för att skriva ut kanalens namn
    let itemListText = document.createTextNode(channel.name);
    // Lägger till kanalnamnet i listan
    itemListEl.appendChild(itemListText);

    // Visa tagline text vid hover över kanalen
    itemListEl.setAttribute("title", channel.tagline);

    // Lägger till listan i mainnavlist
    mainNavListEl.appendChild(itemListEl);
  });
}

// Funktion för informationsfält på förstasidan
function startPage() {
  /* Titel för det högra fältet */
  // Element
  let newHeadingEL = document.createElement("h3");
  //Textnod
  let newHeadingText = document.createTextNode(
    " Välkommen till tablåer för Sveriges Radio"
  );

  /* Beskrivning av sidan */
  // Element
  let newParagraphEl = document.createElement("p");
  // Textnod
  let newDescriptionText = document.createTextNode(
    "Denna webb-applikation använder Sveriges Radios öppna API för tablåer och program. Välj kanal till vänster för att visa tablå för denna kanal."
  );

  // Slå ihop delarna
  newHeadingEL.appendChild(newHeadingText);
  newParagraphEl.appendChild(newDescriptionText);

  // Skriv ut till DOM
  infoEl.appendChild(newHeadingEL);
  infoEl.appendChild(newParagraphEl);
}

// Funktion för att hämta tablå
function getTableau(channelsId) {
  const tableauUrl = `https://api.sr.se/v2/scheduledepisodes?channelid=${channeslId}&format=json`;

  // Anrop på webbtjänsten
  fetch(tableauUrl)
    // Omvandlar svaret till ett JS-objekt
    .then((response) => response.json())
    // Anrop på funktionen för att visa tablån
    .then((data) => showTableau(data.schedule))
    // Felmeddelande
    .catch((error) => console.log(`Följande fel uppstod; ${error}`));
}

// Funktion för att skriva ut tablå till sidan
function showTableau(schedule) {
  // Tömmer info-elementet från tidigare innehåll
  infoEl.innerHTML = "";

  

  // Hämtar aktuell datum och tid
  const today = new Date();
  const currentTime = today.getTime();

  // Skapa element för program-titel
  let programTitelEl = document.createElement("h3");
  let programTitelText = document.createTextNode("TEST");

  // Skapa element för subtitle
  let subtitleEl = document.createElement("h4");
  let subtitleText = document.createTextNode("");

  // Programtid, start- och sluttid
  let programTimeEl = document.createElement("h5");
  let programTimeText = document.createTextNode("");
}

// Funktion för datum och tid
function convertDate(dateStr) {
  //KOD
}

// Funktion för att ändra headerfärg beroende på kanal
function headerStyle() {
  //KOD
}
