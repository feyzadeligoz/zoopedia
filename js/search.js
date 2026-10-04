const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

function searchAnimal(){

const searchText =
searchInput.value.trim().toLowerCase();

if(searchText === "") return;

const animal =
allAnimals.find(animal =>
animal.name.toLowerCase().includes(searchText)
);

if(animal){

window.location.href =
`pages/animal-detail.html?id=${animal.id}`;

}else{

alert("Hayvan bulunamadı.");

}

}

searchBtn.addEventListener(
"click",
searchAnimal
);

searchInput.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){
searchAnimal();
}

}
);