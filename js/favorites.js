const favoriteContainer =
document.getElementById("favoriteAnimals");

if(!favoriteContainer){
console.log("favoriteAnimals bulunamadı");
}
else{

const favoriteIds =
JSON.parse(localStorage.getItem("favorites")) || [];

if(favoriteIds.length === 0){
favoriteContainer.innerHTML =
"<p class='no-favorites'>Henüz favori hayvan eklemediniz.</p>";
}
else{

favoriteContainer.innerHTML = "";

favoriteIds.forEach(id => {

const animal =
allAnimals.find(a => a.id === id);

if(!animal) return;

favoriteContainer.innerHTML += `
<div class="animal-card">

<img src="../${animal.image}" alt="">

<div class="animal-overlay"></div>

<div class="animal-info">

<span class="animal-tag">
${animal.category}
</span>

<h3>${animal.name}</h3>

<p>
${animal.description}
</p>

<a href="animal-detail.html?id=${animal.id}">
Detayları Gör →
</a>

</div>

</div>
`;

});

}
}