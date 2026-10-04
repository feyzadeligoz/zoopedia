const insects = [
    {
        id:500,
name: "Karniyol Bal Arısı",
latin: "Apis mellifera carnica",
image: "../images/insects/carniolan-honey-bee.jpg",
category:"Böcekler",
description:
"Karniyol bal arısı sakin yapısı ve yüksek bal üretimiyle bilinen bir arı türüdür.",
popularity: 71
},

{
    id:501,
    name: "Harmonia Axyridis",
    latin: "Harmonia axyridis",
    image: "../images/insects/harlequin-ladybug.jpg",
    category:"Böcekler",
    description:
    "Harmonia axyridis farklı renk desenlerine sahip istilacı bir uğur böceği türüdür.",
popularity: 91
},

{
    id:502,
    name: "Monarch Kelebeği",
    latin: "Danaus plexippus",
    image: "../images/insects/monarch-butterfly.jpg",
    category:"Böcekler",
    description:
    "Monarch kelebeği uzun göç yolculukları ve turuncu kanatlarıyla ünlü bir türdür.",
    popularity: 97
},
{
    id:503,
name: "Apollo",
latin: "Parnassius apollo",
image: "../images/insects/apollo-butterfly.jpg",
category:"Böcekler",
description:
"Apollo beyaz kanatları üzerindeki kırmızı beneklerle tanınan etkileyici bir kelebektir.",
popularity: 68
},
{
    id:504,
    name: "Zürafa Böceği",
    latin: "Trachelophorus giraffa",
image: "../images/insects/giraffe-weevil.jpg",
category:"Böcekler",
description:
"Zürafa böceği uzun boyun yapısıyla dikkat çeken sıra dışı bir böcektir.",
popularity: 88
},
{
    id:505,
    name: "Akçaağaç Böceği",
    latin: "Boisea trivittata",
    image: "../images/insects/boxelder-bug.jpg",
    category:"Böcekler",
    description:
"Akçaağaç böceği siyah gövdesi üzerindeki kırmızı çizgilerle dikkat çeken bir böcektir.",
popularity: 96
},

{
    id:506,
    name: "Asya Dev Eşekarısı",
    latin: "Vespa mandarinia",
    image: "../images/insects/asian-giant-hornet.jpg",
    category:"Böcekler",
    description:
"Asya dev eşekarısı güçlü çeneleri ve büyük boyutuyla dünyanın en iri eşekarılarından biridir.",
popularity: 95
},


{
    id:507,
    name: "Attacus Atlas",
    latin: "Attacus atlas",
    image: "../images/insects/attacus-atlas.jpg",
    category:"Böcekler",
    description:
"Attacus atlas dünyanın en büyük güve türlerinden biri olarak bilinen dev bir kelebektir.",
popularity: 99
},


{
    id:508,
name: "Herkül Böceği",
latin: "Dynastes hercules",
image: "../images/insects/hercules-beetle.jpg",
category:"Böcekler",
description:
"Herkül böceği büyük boynuzları ve güçlü yapısıyla dünyanın en iri böceklerinden biridir.",
popularity: 87
},


{
    id:509,
    name: "Avrupa Peygamberdevesi",
    latin: "Mantis religiosa",
    image: "../images/insects/european-mantis.jpg",
    category:"Böcekler",
    description:
    "Avrupa peygamberdevesi avlanma pozisyonu ve keskin refleksleriyle bilinir.",
    popularity: 81
},
{
    id:510,
    name: "Kahverengi Benekli Koku Böceği",
    latin: "Halyomorpha halys",
    image: "../images/insects/brown-marmorated-stink-bug.jpg",
    category:"Böcekler",
    description:
    "Kahverengi benekli koku böceği tarım ürünlerine zarar verebilen istilacı bir böcek türüdür.",
    popularity: 98
},

{
    id:511,
    name: "Amerikan Yaban Arısı",
    latin: "Bombus pensylvanicus",
    image: "../images/insects/american-bumblebee.jpg",
    category:"Böcekler",
    description:
    "Bombus pensylvanicus büyük yapısı ve polen taşıma yeteneğiyle önemli bir arı türüdür.",
    popularity: 79
},

{
    id:512,
    name: "Meksika Fasulye Böceği",
    latin: "Epilachna varivestis",
    image: "../images/insects/mexican-bean-beetle.jpg",
    category:"Böcekler",
    description:
    "Meksika fasulye böceği yapraklarla beslenen ve tarım alanlarında görülebilen bir uğur böceği türüdür.",
    popularity: 77
},

{
    id:513,
    name: "Körfez Fritillary",
    latin: "Agraulis vanillae",
    image: "../images/insects/gulf-fritillary.jpg",
    category:"Böcekler",
    description:
    "Körfez fritillary parlak turuncu kanatları ve gümüş desenleriyle tanınır.",
    popularity: 75
},

{
    id:514,
    name: "Danaus Genutia",
    latin: "Danaus genutia",
    image: "../images/insects/striped-tiger-butterfly.jpg",
    category:"Böcekler",
    description:
    "Danaus genutia siyah çizgili turuncu kanatlarıyla dikkat çeken tropikal bir kelebektir.",
    popularity: 70
},


{
    id:515,
    name: "Kahverengi Kuyruklu Güve",
    latin: "Euproctis chrysorrhoea",
    image: "../images/insects/brown-tail-moth.jpg",
    category:"Böcekler",
    description:
    "Kahverengi kuyruklu güve beyaz kanatları ve tüylü kahverengi kuyruğuyla tanınan bir güve türüdür.",
    popularity: 67
},

{
    id:516,
    name: "Baharat Çalısı Kelebeği",
    latin: "Papilio troilus",
    image: "../images/insects/papilio-troilus.jpg",
    category:"Böcekler",
    description:
    "Papilio troilus koyu renkli kanatları ve zarif uçuşuyla bilinen etkileyici bir kelebektir.",
    popularity: 60
},

{
    id:517,
    name: "Çeşitli Halı Böceği",
    latin: "Anthrenus verbasci",
    image: "../images/insects/varied-carpet-beetle.jpg",
    category:"Böcekler",
    description:
    "Çeşitli halı böceği evlerde kumaş ve halılarda görülebilen küçük desenli bir böcektir.",
    popularity: 58
},


];

window.insects = insects;

let currentPage = 1;

const insectsPerPage = 7;

let filteredInsects = [...insects];

const animalsContainer =
document.getElementById("animalsContainer");



function renderInsects(data){

animalsContainer.innerHTML = "";

data.forEach(insect => {

animalsContainer.innerHTML += `

<div class="insect-card">

<img src="${insect.image}" alt="">

<div class="insect-info">

<h3>${insect.name}</h3>

<span class="latin-name">
${insect.latin}
</span>

<p>
${insect.description}
</p>

</div>

<div class="card-right">

<div class="card-tag">
Böcekler
</div>

<a href="animal-detail.html?id=${insect.id}" class="arrow-btn">
→
</a>

</div>

</div>

`;

});

}



function renderPage(page){

currentPage = page;

const start =
(currentPage - 1) * insectsPerPage;

const end =
start + insectsPerPage;

const paginatedInsects =
filteredInsects.slice(start,end);

renderInsects(paginatedInsects);

}



function renderPagination(){

const pageNumbers =
document.getElementById("pageNumbers");

pageNumbers.innerHTML = "";

const totalPages =
Math.ceil(filteredInsects.length / insectsPerPage);

for(let i = 1; i <= totalPages; i++){

pageNumbers.innerHTML += `

<div
class="page-number ${i === currentPage ? "active" : ""}"
onclick="goToPage(${i})">

${i}

</div>

`;

}

}



function goToPage(page){

currentPage = page;

renderPage(currentPage);

renderPagination();

}



const searchInput =
document.getElementById("searchInput");

const popularityBtn =
document.getElementById("popularityBtn");

const sortAZ =
document.getElementById("sortAZ");

const allAnimals =
document.getElementById("allAnimals");



searchInput.addEventListener("input", () => {

const value =
searchInput.value.toLowerCase();

filteredInsects =
insects.filter(insect =>

insect.name
.toLowerCase()
.includes(value)

);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});

popularityBtn.addEventListener("click", () => {

filteredInsects =
[...insects].sort(
(a,b) =>
b.popularity - a.popularity
);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});

sortAZ.addEventListener("click", () => {

filteredInsects =
[...insects].sort(
(a,b) =>
a.name.localeCompare(b.name)
);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});

allAnimals.addEventListener("click", () => {

filteredInsects = [...insects];

currentPage = 1;

renderPage(currentPage);

renderPagination();

});


renderPage(currentPage);

renderPagination();
