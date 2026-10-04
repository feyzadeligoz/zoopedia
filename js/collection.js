const recentContainer =
document.getElementById("recentAnimals");

const recentIds =
JSON.parse(
localStorage.getItem("recentAnimals")
) || [];

if(recentIds.length === 0){

recentContainer.innerHTML =
"<p class='no-favorites'>Henüz hayvan incelemediniz.</p>";

}
else{

recentIds.forEach(id => {

const animal =
allAnimals.find(
a => a.id === id
);

if(!animal) return;

recentContainer.innerHTML += `
<div class="animal-card">

<img src="../${animal.image}" alt="">

<div class="animal-overlay"></div>

<div class="animal-info">

<span class="animal-tag">
${animal.category}
</span>

<h3>${animal.name}</h3>

<a href="animal-detail.html?id=${animal.id}">
Detayları Gör →
</a>

</div>

</div>
`;

});

}