let popularityScore = 100;
const mammals = [
    
{
    id:1,
name: "Aslan",
popularity:100,
scientific: "Panthera leo",
image: "../images/mammals/lion.jpg",
description: "Aslanlar güçlü yapıları ve sosyal yaşamlarıyla bilinen büyük kedigillerdir.",
category: "Memeliler"
},

{
    id:2,
name: "Kaplan",
popularity: 99,
scientific: "Panthera tigris",
image: "../images/mammals/kaplan.jpg",
description: "Kaplanlar çizgili kürkleriyle tanınan büyük yırtıcı memelilerdir.",
category: "Memeliler"
},

{
    id:3,
name: "Asya Fili",
popularity: 61,
scientific: "Elephas maximus",
image: "../images/mammals/asya-fili.jpg",
description: "Asya filleri güçlü yapıları ve yüksek zekalarıyla bilinen dev memelilerdir.",
category: "Memeliler"
},
{
    id:4,
name: "Koala",
popularity: 94,
scientific: "Phascolarctos cinereus",

description:
"Koalalar okaliptüs ağaçlarında yaşayan ve günün büyük kısmını uyuyarak geçiren memelilerdir.",

image: "../images/mammals/koala.jpg",
category:"Memeliler"

},

{
    id:5,
    name: "Ornitorenk",
    popularity: 93,
    scientific: "Ornithorhynchus anatinus",
    description:
    "Ornitorenk yumurtlayan nadir memeli türlerinden biridir ve ördek benzeri gagasıyla tanınır.",
    image: "../images/mammals/ornitorenk.jpg",
category:"Memeliler"
},

{
    id:6,
    name: "Jaguar",
    popularity: 92,
    scientific: "Panthera onca",
    description:
    "Jaguar güçlü çene yapısı ve benekli kürküyle bilinen büyük kedigil türüdür.",
    image: "../images/mammals/jaguar.jpg",
category:"Memeliler"
},

{
    id:7,
    name: "Puma",
    popularity: 91,
    scientific: "Puma concolor",
    description:
    "Pumalar çevik hareketleri ve geniş yaşam alanlarıyla tanınan yırtıcı memelilerdir.",
    image: "../images/mammals/puma.jpg",
category:"Memeliler"
},
{
    id:8,
    name: "Kutup Ayısı",
    popularity: 90,
    scientific: "Ursus maritimus",
    description:
    "Kutup ayıları buzullarda yaşayan ve güçlü yüzme yetenekleriyle tanınan büyük memelilerdir.",
    image: "../images/mammals/kutup-ayisi.jpg",
    category:"Memeliler"
},

{
    id:9,
    name: "Rakun",
    popularity: 89,
    scientific: "Procyon lotor",
    description:
"Rakunlar maskeye benzeyen yüz desenleri ve meraklı davranışlarıyla bilinen memelilerdir.",
image: "../images/mammals/rakun.jpg",
category:"Memeliler"
},

{
    id:10,
    name: "Çita",
    popularity: 88,
    scientific: "Acinonyx jubatus",
    description:
"Çitalar dünyanın en hızlı kara memelileri arasında yer alan çevik avcılardır.",
image: "../images/mammals/cita.jpg",
category:"Memeliler"
},

{
    id:11,
    name: "Çakal",
    popularity: 87,
    scientific: "Canis aureus",
    description:
"Çakallar yüksek uyum yetenekleri sayesinde farklı yaşam alanlarında yaşayabilen memelilerdir.",
image: "../images/mammals/cakal.jpg",
category:"Memeliler"
},

{
    id:12,
    name: "Geyik",
    popularity: 86,
    scientific: "Cervidae",
description:
"Geyikler uzun boynuzları ve hızlı hareketleriyle tanınan otçul memelilerdir.",
image: "../images/mammals/geyik.jpg",
category:"Memeliler"
},

{
    id:13,
    name: "Leopar",
popularity: 84,
scientific: "Panthera pardus",
description:
"Leoparlar benekli kürkleri ve gizli avlanma yetenekleriyle tanınan büyük kedigil türleridir.",
image: "../images/mammals/leopar.jpg",
category:"Memeliler"
},

{
    id:14,
    name: "Vaşak",
    popularity: 83,
    scientific: "Lynx lynx",
    description:
    "Vaşaklar kısa kuyrukları ve keskin avcılık yetenekleriyle bilinen vahşi kedigil memelileridir.",
    image: "../images/mammals/vasak.jpg",
    category:"Memeliler"
},

{
    id:15,
    name: "Kırmızı Panda",
    popularity: 82,
    scientific: "Ailurus fulgens",
    description:
    "Kırmızı panda bambu ormanlarında yaşayan ve kızıl kürküyle dikkat çeken sevimli bir memelidir.",
    image: "../images/mammals/kirmizi-panda.jpg",
    category:"Memeliler"
},

{
    id:16,
    name: "Alpaka",
    popularity: 81,
    scientific: "Vicugna pacos",

description:
"Alpakalar yumuşak yünleriyle tanınan ve sürü halinde yaşayan Güney Amerika memelileridir.",

image: "../images/mammals/alpaka.jpg",
category:"Memeliler"
},

{
    id:17,
    name: "Kapibara",
popularity: 80,
scientific: "Hydrochoerus hydrochaeris",
description:
"Kapibaralar dünyanın en büyük kemirgenleri arasında yer alan sosyal memelilerdir.",
image: "../images/mammals/kapibara.jpg",
category:"Memeliler"
},
{
    id:18,
    name: "Amerikan Bizonu",
    popularity: 79,
scientific: "Bison bison",
description:
"Amerikan bizonları büyük sürüler halinde yaşayan ve güçlü gövdeleriyle tanınan otçul memelilerdir.",
image: "../images/mammals/amerikan-bizonu.jpg",
category:"Memeliler"
},

{
    id:19,
    name: "Bengal Kaplanı",
    popularity: 78,
scientific: "Panthera tigris tigris",
description:
"Bengal kaplanları güçlü kas yapıları ve dikkat çekici çizgileriyle tanınan büyük kedigil memelileridir.",
image: "../images/mammals/bengal-kaplani.jpg",
category:"Memeliler"
},

{
    id:20,
    name: "Eşek",
    popularity: 77,
scientific: "Equus africanus asinus",
description:
"Eşekler dayanıklı yapıları ve yük taşıma yetenekleriyle bilinen evcil memelilerdir.",
category:"Memeliler",
image: "../images/mammals/esek.jpg"
},

{
    id:21,
    name: "Keçi",
    popularity: 76,
scientific: "Capra aegagrus hircus",
category:"Memeliler",
description:
"Keçiler çevik yapıları ve farklı iklimlere uyum sağlayabilmeleriyle tanınan memelilerdir.",

image: "../images/mammals/keci.jpg"
},

{
    id:22,
    name: "Lama",
popularity: 75,
scientific: "Lama glama",
category:"Memeliler",
description:
"Lamalar uzun boyunları ve yoğun yünleriyle tanınan Güney Amerika memelileridir.",

image: "../images/mammals/lama.jpg"
},

{
    id:23,
    name: "Kar Parsı",
    popularity: 74,
    scientific: "Panthera uncia",
    category:"Memeliler",
    description:
    "Kar parsı yüksek dağlık bölgelerde yaşayan ve kalın kürküyle tanınan nadir büyük kedigil türüdür.",

image: "../images/mammals/kar-parsi.jpg"
},

{
    id:24,
    name: "Yaban Domuzu",
    popularity: 73,
    scientific: "Sus scrofa",
    category:"Memeliler",
    description:
"Yaban domuzları güçlü gövdeleri ve keskin duyularıyla farklı yaşam alanlarında yaşayabilen memelilerdir.",

image: "../images/mammals/yaban-domuzu.jpg"
},

{
    id:25,
    name: "Kızıl Tilki",
    popularity: 72,
    scientific: "Vulpes vulpes",
    category:"Memeliler",
description:
"Kızıl tilkiler çevik yapıları ve kızıl renkli kürkleriyle tanınan vahşi memelilerdir.",

image: "../images/mammals/kizil-tilki.jpg"
},

{
    id:26,
    name: "Yer Sincabı",
    popularity: 71,
    scientific: "Spermophilus",
category:"Memeliler",
description:
"Yer sincapları yer altında yaşayan ve hızlı hareketleriyle dikkat çeken küçük memelilerdir.",

image: "../images/mammals/yer-sincabi.jpg"
},

{
    id:27,
    name: "Mirket",
    popularity: 70,
scientific: "Suricata suricatta",
category:"Memeliler",
description:
"Mirketler sürü halinde yaşayan ve dik duruşlarıyla dikkat çeken sosyal memelilerdir.",

image: "../images/mammals/mirket.jpg"
},
{
    id:28,
    name: "Ren Geyiği",
    popularity: 69,
scientific: "Rangifer tarandus",
category:"Memeliler",
description:
"Ren geyikleri soğuk iklimlerde yaşayan ve uzun göçleriyle bilinen dayanıklı memelilerdir.",

image: "../images/mammals/ren-geyigi.jpg"
},

{
    id:29,
    name: "Okapi",
    popularity: 68,
    scientific: "Okapia johnstoni",
    category:"Memeliler",
    description:
    "Okapiler zebra desenli bacaklarıyla tanınan ve zürafalarla akraba olan memelilerdir.",

image: "../images/mammals/okapi.jpg"
},

{
    id:30,
    name: "Kutup Tilkisi",
    popularity: 67,
    scientific: "Vulpes lagopus",
    category:"Memeliler",
    description:
"Kutup tilkileri yoğun beyaz kürkleri sayesinde soğuk bölgelerde yaşayabilen dayanıklı memelilerdir.",

image: "../images/mammals/kutup-tilkisi.jpg"
},

{
    id:31,
    name: "Asya Aslanı",
    popularity: 66,
    scientific: "Panthera leo persica",
    category:"Memeliler",
description:
"Asya aslanları günümüzde yalnızca belirli bölgelerde yaşayan nadir büyük kedigil memelileridir.",

image: "../images/mammals/asya-aslani.jpg"
},

{
    id:32,
    name: "Deniz Samuru",
    popularity: 65,
    scientific: "Enhydra lutris",
category:"Memeliler",
description:
"Deniz samurları kalın kürkleri ve oyuncu davranışlarıyla bilinen deniz memelileridir.",

image: "../images/mammals/deniz-samuru.jpg"
},

{
    id:33,
    name: "Benekli Sırtlan",
    popularity: 64,
scientific: "Crocuta crocuta",
category:"Memeliler",
description:
"Benekli sırtlanlar güçlü çeneleri ve sosyal sürü yapılarıyla tanınan etçil memelilerdir.",

image: "../images/mammals/benekli-sirtlan.jpg"
},

{
    id:34,
    name: "Samur",
popularity: 63,
scientific: "Martes zibellina",
category:"Memeliler",
description:
"Samurlar yoğun kürkleriyle tanınan ve soğuk bölgelerde yaşayan çevik memelilerdir.",

image: "../images/mammals/samur.jpg"
},

{
    id:35,
    name: "Beyaz Gergedan",
    popularity: 62,
    scientific: "Ceratotherium simum",
    category:"Memeliler",
    description:
    "Beyaz gergedanlar kalın derileri ve büyük boynuzlarıyla tanınan güçlü memelilerdir.",

image: "../images/mammals/beyaz-gergedan.jpg"
},

{
    id:36,
    name: "Kızıl Geyik",
    popularity: 60,
    scientific: "Cervus elaphus",
    category:"Memeliler",
    description:
"Kızıl geyikler büyük boynuzları ve güçlü yapılarıyla bilinen otçul memelilerdir.",

image: "../images/mammals/kizil-geyik.jpg"
},

{
    id:37,
    name: "Kanada Vaşağı",
    popularity: 59,
    scientific: "Lynx canadensis",
    category:"Memeliler",
description:
"Kanada vaşakları kalın kürkleri sayesinde soğuk bölgelerde yaşayabilen vahşi kedigil memelileridir.",

image: "../images/mammals/kanada-vasagi.jpg"
},

{
    id:38,
    name: "Kara Antilop",
    popularity: 58,
    scientific: "Antilope cervicapra",

description:
"Kara antiloplar kıvrımlı boynuzları ve hızlı koşularıyla tanınan zarif memelilerdir.",
category:"Memeliler",
image: "../images/mammals/kara-antilop.jpg"
},

{
    id:39,
    name: "Dağ Keçisi",
    popularity: 57,
scientific: "Oreamnos americanus",
category:"Memeliler",
description:
"Dağ keçileri sarp kayalıklarda yaşayabilen güçlü ve çevik memelilerdir.",

image: "../images/mammals/dag-kecisi.jpg"
},

{
    id:40,
    name: "Çizgili Sırtlan",
popularity: 56,
scientific: "Hyaena hyaena",
category:"Memeliler",
description:
"Çizgili sırtlanlar gece aktif olan ve güçlü çeneleriyle tanınan etçil memelilerdir.",

image: "../images/mammals/cizgili-sirtlan.jpg"
},
{
    id:41,
    name: "Karaca",
popularity: 55,
category:"Memeliler",
scientific: "Capreolus capreolus",

description:
"Karacalar hızlı hareketleri ve zarif yapılarıyla ormanlık alanlarda yaşayan memelilerdir.",

image: "../images/mammals/karaca.jpg"
},

{
    id:42,
    name: "Amerikan Kunduzu",
    popularity: 54,
    scientific: "Castor canadensis",
    category:"Memeliler",
    description:
    "Amerikan kunduzları güçlü dişleriyle barajlar inşa edebilen çalışkan memelilerdir.",

image: "../images/mammals/amerikan-kunduzu.jpg"
},

{
    id:43,
    name: "Cüce Suaygırı",
    popularity: 53,
    scientific: "Choeropsis liberiensis",
    category:"Memeliler",
    description:
"Cüce suaygırları bataklık bölgelerde yaşayan ve normal suaygırlarına göre daha küçük memelilerdir.",

image: "../images/mammals/cuce-suaygiri.jpg"
},

{
    id:44,
    name: "Avrupa Kirpisi",
    popularity: 52,
    scientific: "Erinaceus europaeus",
    category:"Memeliler",
description:
"Avrupa kirpileri dikenli yapıları sayesinde kendilerini koruyabilen küçük memelilerdir.",

image: "../images/mammals/avrupa-kirpisi.jpg"
},

{
    id:45,
    name: "Cüce Hamster",
    popularity: 51,
    scientific: "Phodopus",
category:"Memeliler",
description:
"Cüce hamsterlar küçük boyutları ve hızlı hareketleriyle bilinen kemirgen memelilerdir.",

image: "../images/mammals/cuce-hamster.jpg"
},

{
    id:46,
    name: "Alaska Geyiği",
    popularity: 50,
scientific: "Alces alces gigas",
category:"Memeliler",
description:
"Alaska geyikleri büyük boyutları ve geniş boynuzlarıyla tanınan güçlü memelilerdir.",

image: "../images/mammals/alaska-geyigi.jpg"
},

{
    id:47,
    name: "Yaygın Vampir Yarasa",
popularity: 49,
scientific: "Desmodus rotundus",
category:"Memeliler",
description:
"Yaygın vampir yarasalar gece aktif olan ve kanla beslenmeleriyle bilinen memelilerdir.",

image: "../images/mammals/yaygin-vampir-yarasa.jpg"
},

{
    id:48,
    name: "Kutup Tavşanı",
    popularity: 48,
    scientific: "Lepus arcticus",
    category:"Memeliler",
    description:
    "Kutup tavşanları beyaz kürkleri sayesinde karla kaplı bölgelerde kamufle olabilen memelilerdir.",

image: "../images/mammals/kutup-tavsani.jpg"
},

{
    id:49,
    name: "Degu",
    popularity: 47,
    scientific: "Octodon degus",
    category:"Memeliler",
    description:
"Degular sosyal yaşamları ve enerjik hareketleriyle bilinen küçük kemirgen memelilerdir.",

image: "../images/mammals/degu.jpg"
},

{
    id:50,
    name: "Zürafa",
    popularity: 46,
    scientific: "Giraffa camelopardalis",
    category:"Memeliler",
description:
"Zürafalar uzun boyunları sayesinde yüksek ağaçlardaki yapraklarla beslenebilen memelilerdir.",

image: "../images/mammals/zurafa.jpg"
},
{
    id:51,
    name: "Ağaç Sansarı",
    popularity: 45,
    scientific: "Martes martes",
    category:"Memeliler",
description:
"Ağaç sansarları çevik yapıları sayesinde ağaçlarda kolayca hareket edebilen memelilerdir.",

image: "../images/mammals/agac-sansari.jpg"
},

{
    id:52,
    name: "Dağ Zebrası",
    popularity: 44,
    scientific: "Equus zebra",
category:"Memeliler",
description:
"Dağ zebraları siyah beyaz çizgileri ve dayanıklı yapılarıyla tanınan memelilerdir.",

image: "../images/mammals/dag-zebrasi.jpg"
},

{
    id:53,
    name: "Cüce Domuz",
    popularity: 43,
scientific: "Porcula salvania",
category:"Memeliler",
description:
"Cüce domuzlar dünyanın en küçük yabani domuz türleri arasında yer alan nadir memelilerdir.",

image: "../images/mammals/cuce-domuz.jpg"
},

{
    id:54,
    name: "Oribi",
popularity: 42,
scientific: "Ourebia ourebi",
category:"Memeliler",
description:
"Oribiler hızlı koşuları ve ince yapılarıyla bilinen küçük antilop memelileridir.",

image: "../images/mammals/oribi.jpg"
},

{
    id:55,
    name: "Mavi Maymun",
    popularity: 41,
    scientific: "Cercopithecus mitis",
    category:"Memeliler",
    description:
    "Mavi maymunlar uzun kuyrukları ve sosyal yaşamlarıyla bilinen ağaçta yaşayan memelilerdir.",

image: "../images/mammals/mavi-maymun.jpg"
},

{
    id:56,
    name: "Siyah-Beyaz Yakalı Lemur",
    popularity: 40,
    scientific: "Varecia variegata",
    category:"Memeliler",
    description:
"Siyah-beyaz yakalı lemurlar yoğun kürkleri ve yüksek sesli iletişimleriyle tanınan memelilerdir.",

image: "../images/mammals/siyah-beyaz-yakali-lemur.jpg"
},

{
    id:57,
    name: "Çizgili Yunus",
    popularity: 39,
    scientific: "Stenella coeruleoalba",
    category:"Memeliler",
description:
"Çizgili yunuslar hızlı yüzme yetenekleri ve sosyal davranışlarıyla tanınan deniz memelileridir.",

image: "../images/mammals/cizgili-yunus.jpg"
},
{
    id:58,
    name: "Gri Kurt",
    popularity: 96,
    category:"Memeliler",
scientific: "Canis lupus",

description:
"Gri kurt sürü halinde yaşayan ve gelişmiş iletişim yeteneklerine sahip yırtıcı memelidir.",

image: "../images/mammals/gri-kurt.jpg"
},

{
    id:59,
    name: "Kahverengi Ayı",
category:"Memeliler",
popularity: 95,

scientific: "Ursus arctos",

description:
"Kahverengi ayılar güçlü yapıları ve kalın kürkleriyle bilinen büyük memelilerdir.",

image: "../images/mammals/kahverengi-ayi.jpg"
},

{
    id:60,
    name: "Benekli Fok",
    popularity: 38,
    scientific: "Phoca largha",
    category:"Memeliler",
    description:
    "Benekli foklar soğuk denizlerde yaşayan ve benekli derileriyle dikkat çeken memelilerdir.",

image: "../images/mammals/benekli-fok.jpg"
},
{
    id:61,
    name: "Dağ Ceylanı",
popularity: 37,
scientific: "Gazella gazella",
category:"Memeliler",
description:
"Dağ ceylanları hızlı koşuları ve zarif yapılarıyla bilinen otçul memelilerdir.",

image: "../images/mammals/dag-ceylani.jpg"
},

{
    id:62,
    name: "Yakalı Pika",
    popularity: 36,
    scientific: "Ochotona collaris",
    category:"Memeliler",
    description:
"Yakalı pikalar taşlık alanlarda yaşayan ve tiz sesleriyle iletişim kuran küçük memelilerdir.",

image: "../images/mammals/yakali-pika.jpg"
},

{
    id:63,
    name: "Kuzey Sumatra Gergedanı",
    popularity: 35,
    scientific: "Dicerorhinus sumatrensis",
    category:"Memeliler",
description:
"Kuzey Sumatra gergedanı yoğun kürkü ve nadir görülmesiyle bilinen tehlike altındaki memelilerden biridir.",

image: "../images/mammals/kuzey-sumatra-gergedani.jpg"
},

{
    id:64,
    name: "Grivet",
    popularity: 34,
    scientific: "Chlorocebus aethiops",
category:"Memeliler",
description:
"Grivet maymunları sosyal yapıları ve hızlı hareketleriyle bilinen primat memelilerdir.",

image: "../images/mammals/grivet.jpg"
},

{
    id:65,
    name: "Taçlı Sifaka",
    popularity: 33,
scientific: "Propithecus coronatus",
category:"Memeliler",
description:
"Taçlı sifakalar uzun arka bacakları sayesinde sıçrayarak hareket eden lemur türleridir.",

image: "../images/mammals/tacli-sifaka.jpg"
},

{
    id:66,
    name: "Pichi",
popularity: 32,
scientific: "Zaedyus pichiy",
category:"Memeliler",
description:
"Pichiler sert zırhlı gövdeleri sayesinde kendilerini koruyabilen küçük memelilerdir.",

image: "../images/mammals/pichi.jpg"
},

{
    id:67,
    name: "Kipunji",
    popularity: 31,
    scientific: "Rungwecebus kipunji",
    category:"Memeliler",
    description:
    "Kipunjiler Afrika'nın dağlık bölgelerinde yaşayan nadir primat memelilerindendir.",

image: "../images/mammals/kipunji.jpg"
},

{
    id:68,
    name: "Kuzey Pika",
    popularity: 30,
    scientific: "Ochotona hyperborea",
    category:"Memeliler",
    description:
"Kuzey pikaları soğuk bölgelerde yaşayan ve küçük kulaklarıyla dikkat çeken memelilerdir.",

image: "../images/mammals/kuzey-pika.jpg"
},
{
    id:69,
    name: "Cüce Tarsiyer",
    popularity: 29,
    scientific: "Tarsius pumilus",
    category:"Memeliler",
    description:
"Cüce tarsiyerler büyük gözleri ve gece aktif yaşam tarzlarıyla bilinen küçük primatlardır.",

image: "../images/mammals/cuce-tarsiyer.jpg"
},

{
    id:70,
    name: "Bonobo",
    popularity: 28,
    scientific: "Pan paniscus",
    category:"Memeliler",
description:
"Bonobolar gelişmiş sosyal ilişkileri ve yüksek zekalarıyla tanınan primat memelileridir.",

image: "../images/mammals/bonobo.jpg"
},

{
    id:71,
    name: "Protocetus",
    popularity: 27,
    scientific: "Protocetus atavus",
category:"Memeliler",
description:
"Protocetus hem karada hem suda yaşayabilmiş eski balina atalarından biridir.",

image: "../images/mammals/protocetus.jpg"
},

{
    id:72,
    name: "Mors",
    popularity: 26,
scientific: "Odobenus rosmarus",
category:"Memeliler",
description:
"Morslar uzun dişleri ve kalın yağ tabakalarıyla kutup bölgelerinde yaşayan büyük memelilerdir.",

image: "../images/mammals/mors.jpg"
},

{
    id:73,
    name: "Ocelot",
popularity: 25,
scientific: "Leopardus pardalis",
category:"Memeliler",
description:
"Ocelotlar benekli kürkleri ve çevik hareketleriyle tanınan vahşi kedigil memelilerdir.",

image: "../images/mammals/ocelot.jpg"
},

{
    id:74,
    name: "Serval",
    popularity: 24,
    scientific: "Leptailurus serval",
    category:"Memeliler",
    description:
    "Servaller uzun bacakları ve büyük kulaklarıyla bilinen Afrika kökenli kedigil memelilerdir.",

image: "../images/mammals/serval.jpg"
},

{
    id:75,
    name: "Ermin",
    popularity: 23,
    scientific: "Mustela erminea",
    category:"Memeliler",
    description:
"Erminler kışın beyaza dönen kürkleriyle tanınan küçük etçil memelilerdir.",

image: "../images/mammals/ermin.jpg"
},

{
    id:76,
    name: "Vaquita",
    popularity: 22,
    scientific: "Phocoena sinus",
    category:"Memeliler",
description:
"Vaquitalar nesli kritik tehlike altında olan nadir deniz memelilerinden biridir.",

image: "../images/mammals/vaquita.jpg"
},

{
    id:77,
    name: "Gaur",
    popularity: 21,
    scientific: "Bos gaurus",
category:"Memeliler",
description:
"Gaur güçlü kas yapısı ve büyük gövdesiyle dünyanın en büyük yabani sığır türlerinden biridir.",

image: "../images/mammals/gaur.jpg"
},

{
    id:78,
    name: "Deniz Gergedanı",
    popularity: 85,
scientific: "Monodon monoceros",
category:"Memeliler",
description:
"Deniz gergedanları uzun spiral dişleriyle tanınan kutup bölgesi deniz memelileridir.",

image: "../images/mammals/deniz-gergedani.jpg"
},
{
    id:79,
    name: "Mavi Balina",
    popularity: 98,
category:"Memeliler",
scientific: "Balaenoptera musculus",

description:
"Mavi balina dünyanın en büyük canlısı olarak bilinen dev deniz memelisidir.",

image: "../images/mammals/mavi-balina.jpg"
},

{
    id:80,
    name: "Katil Balina",
    popularity: 97,
    category:"Memeliler",
    scientific: "Orcinus orca",

description:
"Katil balinalar yüksek zekaları ve güçlü avcılık yetenekleriyle bilinen sosyal canlılardır.",

image: "../images/mammals/katil-balina.jpg"
},

];
window.mammals = mammals;

const animalsContainer =
document.getElementById("animalsContainer");

const pageNumbers =
document.getElementById("pageNumbers");

const prevPage =
document.getElementById("prevPage");

const nextPage =
document.getElementById("nextPage");

let currentPage = 1;

const animalsPerPage = 6;
const searchInput =
document.getElementById("searchInput");
const sortAZ =
document.getElementById("sortAZ");
const popularityBtn =
document.getElementById("popularityBtn");
const allAnimals =
document.getElementById("allAnimals");

let filteredAnimals = [...mammals];

function showAnimals(page){

animalsContainer.innerHTML = "";

const start =
(page - 1) * animalsPerPage;

const end =
start + animalsPerPage;

const currentAnimals =
filteredAnimals.slice(start, end);

currentAnimals.forEach(animal => {

animalsContainer.innerHTML += `
<div class="mammal-card">

<img src="${animal.image}" alt="${animal.name}">

<div class="mammal-info">

<h3>${animal.name}</h3>

<span class="latin-name">
${animal.scientific}
</span>

<p>
${animal.description}
</p>

</div>

<div class="card-right">

<div class="card-tag">
Memeliler
</div>

<a href="animal-detail.html?id=${animal.id}" class="arrow-btn">
→
</a>

</div>

</div>
`;

});

updatePagination();
}

function updatePagination(){

pageNumbers.innerHTML = "";

const totalPages =
Math.ceil(
filteredAnimals.length / animalsPerPage
);

for(let i = 1; i <= totalPages; i++){

const pageBtn =
document.createElement("div");

pageBtn.classList.add("page-number");

if(i === currentPage){
pageBtn.classList.add("active");
}

pageBtn.innerText = i;

pageBtn.addEventListener("click", () => {

currentPage = i;

showAnimals(currentPage);

});

pageNumbers.appendChild(pageBtn);

}
}

prevPage.addEventListener("click", () => {

if(currentPage > 1){

currentPage--;

showAnimals(currentPage);

}

});

nextPage.addEventListener("click", () => {

const totalPages =
Math.ceil(
filteredAnimals.length / animalsPerPage
);

if(currentPage < totalPages){

currentPage++;

showAnimals(currentPage);

}

});

showAnimals(currentPage);

searchInput.addEventListener("input", () => {

const value =
searchInput.value.toLowerCase();

filteredAnimals =
mammals.filter(animal =>

animal.name
.toLowerCase()
.includes(value)

);

currentPage = 1;

showAnimals(currentPage);

});

sortAZ.addEventListener("click", () => {

filteredAnimals.sort((a, b) =>

a.name.localeCompare(b.name)

);

currentPage = 1;

showAnimals(currentPage);

});

popularityBtn.addEventListener("click", () => {

filteredAnimals.sort((a, b) =>

b.popularity - a.popularity

);

currentPage = 1;

showAnimals(currentPage);

});

allAnimals.addEventListener("click", () => {

filteredAnimals = mammals;

currentPage = 1;

showAnimals(currentPage);

});
