console.log("DOM HW loaded");



//TITLE EDITING AND MAIN DECLARATION
// 1) Grab your title and main section
const titleEl = document.getElementById("TitleId");
const mainEl = document.getElementById("MainId");
// 2) Update the title text
titleEl.textContent = "Stars — Powered by JavaScript";
// WHY: textContent replaces the visible text inside the element safely.



//ADDING IMAGE OVER THE DEFAULT
const imgEl = document.getElementById("Img1Id");
// Swap to a new image and alt text (use any public image URL)
imgEl.src = "https://cdn.mos.cms.futurecdn.net/fjbeeRiPRQjQNhizwy7cWX-970-80.jpg.webp";
imgEl.alt = "a high resolution pic of Mercury";
//I added these so it wasn't absolutely massive, editing img sizes thru js
imgEl.style.length = "600px";
imgEl.style.height = "260px";
// WHY: Changing attributes lets you swap content without editing HTML.



//ADDING A LIST TO THE PAGE THROUGH ARRAYS
const items = [
{ name: "Quasar", info: "an active galactic nucleus powered by a black hole, also the brightest known thing in the universe!" },
{ name: "Aphelion", info: "The point in it's orbit at which a celestial body is the furthest from it's sun(Earth's aphelion is in early July!)" },
{ name: "Facula", info: "Bright spots on the surface of the sun, a planet, or a moon. For suns, its usually a warm part, but for planets and moons, its just a super reflective patch of land!" }
];
// Target the list you created in HTML
const listEl = document.getElementById("ListId");
listEl.innerHTML = ""; // clear existing
// Create and append list items from your data
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});
// WHY: createElement + appendChild builds real nodes (safer than string HTML).



//ADDING HIGHLIGHT CLASS BUTTON FUNCTIONALITY
const toggleBtn = document.getElementById("HLButton");
// Toggle on the <main> or on document.body — your choice
toggleBtn.addEventListener("click", () => {
    mainEl.classList.toggle("HighlightClass");
});
// WHY: classList.toggle adds the class if missing, removes if present.
// This keeps style logic in CSS, behavior in JS (good separation).


//dark mode
document.body.classList.toggle("DarkClass");



//IMAGE SWAPPER
const swapBtn = document.getElementById("SwapBtn");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) { //if not swapped
imgEl.src = "https://photos.smugmug.com/Astrophotography/Nebulae/i-PZs85N6/4/NZjQm29ZWjBcmCQDJ542GccjKWCwBVkKBR2BGCP4V/M/Helix_HaOIII_LRGB_3326x2504-M.jpg";
imgEl.alt = "A nebula named 'The Eye of God', with a striking blue center and red borders";
swapped = true; } else { //swaps boolean at the end
imgEl.src = "https://assets.newsweek.com/wp-content/uploads/2025/08/2061883-comet-space.jpg?w=750&quality=80&webp=1";
imgEl.alt = "A blue comet streaking through the night sky, leaving a neon trail";
swapped = false; //swaps boolean at the end
}
});
// WHY: This shows conditional logic + DOM attribute updates on a user action.


//part 9, editing text and color of my own element
const part9Text = document.getElementById("part9");
part9Text.textContent = "Please note I have no ownership of any of the images used.";
part9Text.style.color = "#F00";