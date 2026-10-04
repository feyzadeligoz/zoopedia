const amphibians = [
    {
        id:401,
name: "Cochranella Granulosa",
latin: "Cochranella granulosa",
image: "../images/amphibians/cochranella-granulosa.jpg",
category:"Amfibiler",
description:
"Cochranella granulosa yarı saydam derisiyle bilinen özel bir cam kurbağa türüdür.",
popularity: 73
},

{
    id:402,
    name: "Melanobatrakus",
    latin: "Melanobatrachus indicus",
    image: "../images/amphibians/melanobatrachus.jpg",
    category:"Amfibiler",
    description:
    "Melanobatrakus koyu renkli görünümüyle Hindistan ormanlarında yaşayan nadir bir kurbağadır.",
popularity: 72
},
{
    id:403,
    name: "Sira Zehirli Ok Kurbağası",
    latin: "Ranitomeya variabilis",
    image: "../images/amphibians/sira-poison-dart-frog.jpg",
    category:"Amfibiler",
    description:
    "Sira zehirli ok kurbağası canlı desenleri ve küçük boyutuyla dikkat çeken zehirli bir türdür.",
    popularity: 71
},
{
    id:404,
    name: "Kızıl Gözlü Ağaç Kurbağası",
    latin: "Agalychnis callidryas",
    image: "../images/amphibians/red-eyed-tree-frog.jpg",
    category:"Amfibiler",
    description:
    "Kızıl gözlü ağaç kurbağası canlı renkleri ve kırmızı gözleriyle dünyanın en ünlü kurbağalarındandır.",
    popularity: 92
},

{
    id:405,
    name: "Cam Kurbağa",
    latin: "Centrolenidae",
    image: "../images/amphibians/glass-frog.jpg",
    category:"Amfibiler",
    description:
    "Cam kurbağanın yarı saydam derisi sayesinde iç organları görülebilir.",
    popularity: 91
},
{
    id:406,
name: "Küba Ağaç Kurbağası",
latin: "Osteopilus septentrionalis",
image: "../images/amphibians/cuban-tree-frog.jpg",
category:"Amfibiler",
description:
"Küba ağaç kurbağası büyük yapısı ve güçlü tırmanma yeteneğiyle bilinir.",
popularity: 94
},
{
    id:407,
    name: "Aksolotl",
    latin: "Ambystoma mexicanum",
    image: "../images/amphibians/axolotl.jpg",
    category:"Amfibiler",
    description:
    "Aksolotl yenilenebilme yeteneği ve sevimli görünümüyle tanınan sıra dışı bir amfibidir.",
popularity: 99
},

{
    id:408,
    name: "Kaplan Semenderi",
    latin: "Ambystoma tigrinum",
    image: "../images/amphibians/tiger-salamander.jpg",
    category:"Amfibiler",
    description:
    "Kaplan semenderi sarı desenleri ve güçlü yapısıyla Kuzey Amerika'nın dikkat çeken amfibilerindendir.",
    popularity: 96
},

{
    id:409,
    name: "Kurbağa",
    latin: "Anura",
    image: "../images/amphibians/frog.jpg",
    category:"Amfibiler",
    description:
    "Kurbağalar güçlü arka bacakları sayesinde sıçrayabilen yaygın amfibi canlılardır.",
    popularity: 95
},

{
    id:410,
    name: "Ateş Semenderi",
    latin: "Salamandra salamandra",
image: "../images/amphibians/fire-salamander.jpg",
category:"Amfibiler",
description:
"Ateş semenderi siyah vücudu üzerindeki sarı desenlerle kolayca tanınır.",
popularity: 88
},

{
    id:411,
    name: "Tanecikli Zehirli Kurbağa",
latin: "Oophaga granulifera",
image: "../images/amphibians/granular-poison-frog.jpg",
category:"Amfibiler",
description:
"Tanecikli zehirli kurbağa parlak renkleri ve zehirli derisiyle dikkat çeken tropikal bir amfibidir.",
popularity: 78
},

{
    id:412,
    name: "Çöl Ağaç Kurbağası",
    latin: "Litoria rubella",
image: "../images/amphibians/desert-tree-frog.jpg",
category:"Amfibiler",
description:
"Çöl ağaç kurbağası kurak bölgelerde yaşayabilen dayanıklı bir ağaç kurbağası türüdür.",
popularity: 77
},

{
    id:413,
    name: "Yosemite Kurbağası",
    latin: "Rana sierrae",
    image: "../images/amphibians/yosemite-frog.jpg",
    category:"Amfibiler",
description:
"Yosemite kurbağası yüksek rakımlı dağ göllerinde yaşayan nadir bir amfibi türüdür.",
popularity: 76
},

{
    id:414,
    name: "Alabama Su Köpeği",
    latin: "Necturus alabamensis",
    image: "../images/amphibians/alabama-waterdog.jpg",
    category:"Amfibiler",
    description:
"Alabama su köpeği tamamen suda yaşayan ve dış solungaçlara sahip bir semender türüdür.",
popularity: 75
},

{
    id:415,
    name: "Çevik Kurbağa",
    latin: "Rana dalmatina",
    image: "../images/amphibians/agile-frog.jpg",
    category:"Amfibiler",
    description:
"Çevik kurbağa hızlı hareketleri ve esnekliğiyle bilinir.",
popularity: 74
},

];

window.amphibians = amphibians;

let currentPage = 1;

const amphibiansPerPage = 7;

let filteredAmphibians = [...amphibians];

const animalsContainer =
document.getElementById("animalsContainer");



function renderAmphibians(data){

animalsContainer.innerHTML = "";

data.forEach(amphibian => {

animalsContainer.innerHTML += `

<div class="amphibian-card">

<img src="${amphibian.image}" alt="">

<div class="amphibian-info">

<h3>${amphibian.name}</h3>

<span class="latin-name">
${amphibian.latin}
</span>

<p>
${amphibian.description}
</p>

</div>

<div class="card-right">

<div class="card-tag">
Amfibiler
</div>

<a href="animal-detail.html?id=${amphibian.id}" class="arrow-btn">
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
(currentPage - 1) * amphibiansPerPage;

const end =
start + amphibiansPerPage;

const paginatedAmphibians =
filteredAmphibians.slice(start,end);

renderAmphibians(paginatedAmphibians);

}



function renderPagination(){

const pageNumbers =
document.getElementById("pageNumbers");

pageNumbers.innerHTML = "";

const totalPages =
Math.ceil(filteredAmphibians.length / amphibiansPerPage);

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

filteredAmphibians =
amphibians.filter(amphibian =>

amphibian.name
.toLowerCase()
.includes(value)

);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});



popularityBtn.addEventListener("click", () => {

filteredAmphibians =
[...amphibians].sort(
(a,b) =>
b.popularity - a.popularity
);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});


sortAZ.addEventListener("click", () => {

filteredAmphibians =
[...amphibians].sort(
(a,b) =>
a.name.localeCompare(b.name)
);

currentPage = 1;

renderPage(currentPage);

renderPagination();

});

allAnimals.addEventListener("click", () => {

filteredAmphibians = [...amphibians];

currentPage = 1;

renderPage(currentPage);

renderPagination();

});



renderPage(currentPage);

renderPagination();
