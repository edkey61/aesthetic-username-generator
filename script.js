
const usernames = [
  "softmoondust", "lavendervibes", "starryglow", "rosydreamer", "cloudykisses",
  "peachymuse", "etherealpetal", "pastelpixie", "lunarwhisper", "velvetfrost"
];

function generateUsername() {
  const result = document.getElementById("result");
  const randomName = usernames[Math.floor(Math.random() * usernames.length)];
  result.textContent = randomName;
}

function saveFavorite() {
  const current = document.getElementById("result").textContent;
  if (!current) return;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(current)) {
    favorites.push(current);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
}

function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const list = document.getElementById("favoritesList");
  list.innerHTML = "";
  favorites.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function clearFavorites() {
  localStorage.removeItem("favorites");
  renderFavorites();
}

// Initial render
renderFavorites();
