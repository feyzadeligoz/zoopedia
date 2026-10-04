    const params =
    new URLSearchParams(window.location.search);

    const id =
    Number(params.get("id"));

    const animal =
    allAnimals.find(
    animal => animal.id === id
    );

    document.getElementById("animalImage").src =
    animal.image;

    document.getElementById("behaviorImage").src =
    animal.behaviorImage;

    document.getElementById("animalName").textContent =
    animal.name;

    document.getElementById("animalScientific").textContent =
    animal.scientific;

    document.getElementById("animalDescription").textContent =
    animal.description;

    document.getElementById("animalCategory").textContent =
    animal.category;

    document.getElementById("animalPopularity").textContent =
    animal.popularity;

    document.getElementById("animalWeight").textContent =
    animal.weight;

    document.getElementById("animalLength").textContent =
    animal.length;

    document.getElementById("animalLifespan").textContent =
    animal.lifespan;

    document.getElementById("animalPopulation").textContent =
    animal.population;

    document.getElementById("animalSpeed").textContent =
    animal.speed;

    document.getElementById("animalBehavior").textContent =
    animal.behavior;

    console.log(animal);
    console.log(animal.diet);
    console.log(animal.facts);

    document.getElementById("animalLocation").textContent =
    animal.distribution;



    if(document.getElementById("animalDiet")){
    document.getElementById("animalDiet").textContent =
    animal.diet;
    }

    const factsList =
    document.getElementById("factsList");

    animal.facts.forEach(fact => {

    const li =
    document.createElement("li");

    li.textContent = fact;

    factsList.appendChild(li);

    });



    const currentIndex =
    allAnimals.findIndex(
    animal => animal.id === id
    );

    const prevButton =
    document.getElementById("prevAnimal");

    const nextButton =
    document.getElementById("nextAnimal");

    if(currentIndex > 0){

    const previousAnimal =
    allAnimals[currentIndex - 1];

    prevButton.href =
    `animal-detail.html?id=${previousAnimal.id}`;

    prevButton.textContent =
    `← ${previousAnimal.name}`;

    }else{

    prevButton.style.display = "none";

    }

    if(currentIndex < allAnimals.length - 1){

    const nextAnimal =
    allAnimals[currentIndex + 1];

    nextButton.href =
    `animal-detail.html?id=${nextAnimal.id}`;

    nextButton.textContent =
    `${nextAnimal.name} →`;

    }else{

    nextButton.style.display = "none";

    }

    const backBtn =
    document.getElementById("backBtn");

    if(animal.category === "Memeliler"){
    backBtn.href =
    "mammals.html";
    }

    else if(animal.category === "Kuşlar"){
    backBtn.href =
    "birds.html";
    }

    else if(animal.category === "Sürüngenler"){
    backBtn.href =
    "reptiles.html";
    }

    else if(animal.category === "Balıklar"){
    backBtn.href =
    "fish.html";
    }

    else if(animal.category === "Amfibiler"){
    backBtn.href =
    "amphibians.html";
    }

    else if(animal.category === "Böcekler"){
    backBtn.href =
    "insects.html";
    }
    const favoriteBtn =
document.getElementById("favoriteBtn");

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

const isFavorite =
favorites.includes(animal.id);

if(isFavorite){
favoriteBtn.textContent =
"❤️ Favorilerde";
}

favoriteBtn.addEventListener("click", () => {

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

if(favorites.includes(animal.id)){

favorites =
favorites.filter(
id => id !== animal.id
);

favoriteBtn.textContent =
"🤍 Favorilere Ekle";

}else{

favorites.push(animal.id);

favoriteBtn.textContent =
"❤️ Favorilerde";

}

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

});
let recentAnimals =
JSON.parse(localStorage.getItem("recentAnimals")) || [];

recentAnimals =
recentAnimals.filter(animalId => animalId !== animal.id);

recentAnimals.unshift(animal.id);

if(recentAnimals.length > 4){
recentAnimals.pop();
}

localStorage.setItem(
"recentAnimals",
JSON.stringify(recentAnimals)
);