var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5 // Adjust the minZoom as needed
});

var bounds = [[0, 0], [6686, 5200]];
L.imageOverlay('Map of the Saints.jpg', bounds).addTo(map);

// Click event to get coordinates
map.on('click', function (e) {
    var coordinates = e.latlng;
    alert('Coordinates: ' + coordinates.lat + ', ' + coordinates.lng);
});

// Specify your pixel coordinates directly
var pixelCoordinates1 = [4133, 3135]; // Existing custom marker coordinates
var pixelCoordinates2 = [3628.5, 3140]; // New custom marker coordinates
var pixelCoordinates3 = [4157.375, 3089]; // New custom marker coordinates
var pixelCoordinates4 = [3360, 3569]; // New custom marker coordinates for Whitby Abbey
var pixelCoordinates5 = [3377, 3554]; // New custom marker coordinates for Caedmon
var pixelCoordinates6 = [4589, 1373]; // New custom marker coordinates for St Columbas Bay
var pixelCoordinates7 = [4603, 1389]; // New custom marker coordinates for Iona Abbey
var pixelCoordinates8 = [4456, 1729]; // New custom marker coordinates for Dunadd Fort
var pixelCoordinates9 = [3916, 1639]; // New custom marker coordinates for St Columbas Well
var pixelCoordinates10 = [4279, 2968]; // New custom marker coordinates for St Abbs head
var pixelCoordinates11 = [4121, 2701]; // New custom marker coordinates for Melrose Abbey
var pixelCoordinates12 = [4070, 2945]; // New custom marker coordinates for Yeavering
var pixelCoordinates13 = [4106, 3027]; // New custom marker coordinates for St Cuthberts Cave
var pixelCoordinates14 = [4092, 3114]; // New custom marker coordinates for St Aidans Church
var pixelCoordinates15 = [4099, 3130]; // New custom marker coordinates for Bamburgh Beach
var pixelCoordinates16 = [3716, 2911]; // New custom marker coordinates for Heavenfield
var pixelCoordinates17 = [3689, 2906]; // New custom marker coordinates for Hexham
var pixelCoordinates18 = [3714, 2502]; // New custom marker coordinates for Ruthwell
var pixelCoordinates19 = [3688, 3176]; // New custom marker coordinates for St Pauls Jarrow
var pixelCoordinates20 = [4301, 2153]; // New custom marker coordinates for Jordanhill
var pixelCoordinates21 = [3252, 3462]; // New custom marker coordinates for Middleton Cross
var pixelCoordinates22 = [3142, 3205]; // New custom marker coordinates for Ripon
var pixelCoordinates23 = [3032, 3364]; // New custom marker coordinates for York Minster
var pixelCoordinates24 = [3001, 3125]; // New custom marker coordinates for Ilkley
var pixelCoordinates25 = [2942, 3648]; // New custom marker coordinates for Beverley
var pixelCoordinates26 = [2851, 3098]; // New custom marker coordinates for Walton
var pixelCoordinates27 = [3504, 3328]; // New custom marker coordinates for Hartlepool
var pixelCoordinates28 = [2860, 3642]; // New custom marker coordinates for Lincolnshire
var pixelCoordinates29 = [2560, 2556]; // New custom marker coordinates for St Winefrides Chapel
var pixelCoordinates30 = [2546, 3168]; // New custom marker coordinates for Eyam
var pixelCoordinates31 = [2282, 2497]; // New custom marker coordinates for St Melangell
var pixelCoordinates32 = [2320, 2631]; // New custom marker coordinates for St Oswalds Well
var pixelCoordinates33 = [2576, 2021]; // New custom marker coordinates for St Cybis
var pixelCoordinates34 = [3290, 2481]; // New custom marker coordinates for Gosforth
var pixelCoordinates35 = [2324, 3307]; // New custom marker coordinates for wystan
var pixelCoordinates36 = [2192, 3841]; // New custom marker coordinates for Crowland
var pixelCoordinates37 = [2365, 4190]; // New custom marker coordinates for Walsingham
var pixelCoordinates38 = [2154, 3127]; // New custom marker coordinates for Lichfield
var pixelCoordinates39 = [1966, 4141]; // New custom marker coordinates for Bury
var pixelCoordinates40 = [1738, 3101]; // New custom marker coordinates for Kenelm
var pixelCoordinates41 = [1462, 3329]; // New custom marker coordinates for Dragon Hill
var pixelCoordinates42 = [1659, 1764]; // New custom marker coordinates for St Davids
var pixelCoordinates43 = [1642, 1764]; // New custom marker coordinates for St Non
var pixelCoordinates44 = [1640, 3431]; // New custom marker coordinates for St Margarets Well
var pixelCoordinates45 = [1590, 3769]; // New custom marker coordinates for St Albans
var pixelCoordinates46 = [1600, 4231]; // New custom marker coordinates for St Cedd
var pixelCoordinates47 = [1446, 3833]; // New custom marker coordinates for Westminster
var pixelCoordinates48 = [1288, 2970]; // New custom marker coordinates for Saxon Chapel
var pixelCoordinates49 = [1316, 4296]; // New custom marker coordinates for Canterbury Cathedral
var pixelCoordinates50 = [1313, 4304]; // New custom marker coordinates for Augustine
var pixelCoordinates51 = [1359, 4416]; // New custom marker coordinates for Augustines Cross
var pixelCoordinates52 = [1364, 4444]; // New custom marker coordinates for Shrine Augustine
var pixelCoordinates53 = [1004, 3743]; // New custom marker coordinates for Mary Blessed
var pixelCoordinates54 = [1084, 3150]; // New custom marker coordinates for Breamore
var pixelCoordinates55 = [1214, 2793]; // New custom marker coordinates for Glastonbury
var pixelCoordinates56 = [1211, 2804]; // New custom marker coordinates for Glastonbury Tor
var pixelCoordinates57 = [1140, 2717]; // New custom marker coordinates for Alfred
var pixelCoordinates58 = [1007, 2176]; // New custom marker coordinates for Petrocs Well
var pixelCoordinates59 = [869, 1950]; // New custom marker coordinates for Tintagel
var pixelCoordinates60 = [791, 1874]; // New custom marker coordinates for Padstow
var pixelCoordinates61 = [789, 1845]; // New custom marker coordinates for Cuthbert Cornwall
var pixelCoordinates62 = [867, 1961]; // New custom marker coordinates for Merlin

// Create a custom marker using the custom icon at specified pixel coordinates
var customIcon = L.icon({
    iconUrl: 'map-marker.png', // Replace with the path to your custom marker icon
    iconSize: [256, 256], // Adjust the size of the icon
    iconAnchor: [25, 50], // Adjust the anchor point if needed
    popupAnchor: [0, -50] // Adjust the popup anchor point if needed
});

var customMarker1 = L.marker(pixelCoordinates1, { icon: customIcon }).addTo(map);
customMarker1.bindPopup(
    '<div>' +
    '<h3>Inner Farne</h3>' +
    '<img src="Inner-Farne.jpg" alt="Inner Farne" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>The Farne Islands are a group of islands off the coast of Northumberland. Inner Farne was the home of Saint Cuthbert, who spent several years of his life here. Boat trips to the island leave daily from Seahouses. The group has between 15 and 20 islands depending on the level of the tide.</p>' +
    '</div>'
);

var customMarker2 = L.marker(pixelCoordinates2, { icon: customIcon }).addTo(map);
customMarker2.bindPopup(
    '<div>' +
    '<h3>Durham Cathedral</h3>' +
    '<img src="20 Durham Cathedral.jpg" alt="Durham Cathedral" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>The shrine and resting place of Saint Cuthbert, as well as relics of Saint Oswald and The Venerable Saint Bede. The cathedral is home to many Anglo-Saxon treasures of Saint Cuthbert, including his pectoral cross and portable altar.</p>' +
    '</div>'
);

var customMarker3 = L.marker(pixelCoordinates3, { icon: customIcon }).addTo(map);
customMarker3.bindPopup(
    '<div>' +
    '<h3>Lindisfarne (Holy Island)</h3>' +
    '<img src="10 Lindisfarne.jpg" alt="Lindisfarne (Holy Island)" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Lindisfarne, also called Holy Island, is known as the cradle of Christianity in the North of England. Gifted to St Aidan by King Oswald in the year 635, it was the centre of Celtic Christianity, and was soon after home to St Cuthbert and the Lindisfarne Gospels. Much of this tidal island is a nature reserve and is still a truly enchanted place to visit in the early morning hours.</p>' +
    '</div>'
);

var customMarker4 = L.marker(pixelCoordinates4, { icon: customIcon }).addTo(map);
customMarker4.bindPopup(
    '<div>' +
    '<h3>Whitby Abbey</h3>' +
    '<img src="25 Whitby Abbey.jpg" alt="Whitby Abbey" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Iconic ruins of a Benedictine abbey on windswept clifftops, on the site of Saint Hilda\'s Anglo-Saxon abbey. Once a great centre of learning and the Synod of Whitby. Hilda\'s legend speaks of snakes being turned into stone through prayer, and snakestones can still be found on Whitby\'s beaches.</p>' +
    '</div>'
);

var customMarker5 = L.marker(pixelCoordinates5, { icon: customIcon }).addTo(map);
customMarker5.bindPopup(
    '<div>' +
    '<h3>Caedmon\'s Cross</h3>' +
    '<img src="24 Caedmons Cross.jpg" alt="Caedmons Cross" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Beautiful stone cross standing near Whitby Abbey and St Mary\'s Church. It is carved in a traditional style with Anglo-Saxon motifs, animals and runes. The huge cross depicts the poet Caedmon, St Hilda, King David and Christ. </p>' +
    '</div>'
);

var customMarker6 = L.marker(pixelCoordinates6, { icon: customIcon }).addTo(map);
customMarker6.bindPopup(
    '<div>' +
    '<h3>St Columba\'s Bay</h3>' +
    '<img src="2 St Columbas Bay.jpg" alt="St Columbas Bay" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>The shimmering bay is named after St Columba, who landed here from Ireland in the year 563 and founded the monastery from which much of northern Britain would be converted to Christianity. </p>' +
    '</div>'
);

var customMarker7 = L.marker(pixelCoordinates7, { icon: customIcon }).addTo(map);
customMarker7.bindPopup(
    '<div>' +
    '<h3>Iona Abbey</h3>' +
    '<img src="2 Iona Abbey.jpg" alt="Iona Abbey" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Restored Benedictine Abbey on the site of St Columba\'s original monastery built in 563. The abbey is surrounded by ancient Celtic crosses and shimmering blue sea. As a boy St Oswald lived here in exile and learned the ways of Christ. </p>' +
    '</div>'
);

var customMarker8 = L.marker(pixelCoordinates8, { icon: customIcon }).addTo(map);
customMarker8.bindPopup(
    '<div>' +
    '<h3>Dunadd Fort</h3>' +
    '<img src="Dunadd Fort.jpg" alt="Dunadd Fort" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Site of a majestic hillfort and seat of power of the Kingdom of Dál Riata in the 6th century. Many pagan and eventually Christian kings were crowned here. See the footprint in the rock where monarchs placed their feet so long ago and you can almost picture St Columba and St Oswald stood beside you.</p>' +
    '</div>'
);

var customMarker9 = L.marker(pixelCoordinates9, { icon: customIcon }).addTo(map);
customMarker9.bindPopup(
    '<div>' +
    '<h3>St Columba\'s Well, Footprint and Chapel</h3>' +
    '<img src="St Columbas Well.jpg" alt="St Columbas Well" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Nestled at the southern tip of Kintyre lies a collection of wonders connected to St Columba. Just west of St Columba\'s Chapel, you\'ll find St Columba\'s Footprint and St Columba\'s Holy Well, while a short stroll away await Keil Caves.</p>' +
    '</div>'
);

var customMarker10 = L.marker(pixelCoordinates10, { icon: customIcon }).addTo(map);
customMarker10.bindPopup(
    '<div>' +
    '<h3>St Abb\'s Head</h3>' +
    '<img src="St Abbs Head.jpg" alt="St Abbs Head" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Beautiful coastal location where St. Abb, sister to St Oswald resided and established her monastery, it\'s also reputed to be where St. Cuthbert was spotted swimming with sea otters, adding to its enduring mystique.</p>' +
    '</div>'
);

var customMarker11 = L.marker(pixelCoordinates11, { icon: customIcon }).addTo(map);
customMarker11.bindPopup(
    '<div>' +
    '<h3>Melrose Abbey</h3>' +
    '<img src="Melrose Abbey.jpg" alt="Melrose Abbey" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Majestic ruins of a Cistercian Abbey and the final resting place of Robert the Bruce\'s heart. The medieval ruins stand half a mile away from where the Celtic monastery founded by St Aidan once stood. It was here that St Cuthbert received his early training.</p>' +
    '</div>'
);

var customMarker12 = L.marker(pixelCoordinates12, { icon: customIcon }).addTo(map);
customMarker12.bindPopup(
    '<div>' +
    '<h3>Yeavering (Ad Gefrin)</h3>' +
    '<img src="Gefrin.jpg" alt="Yeavering" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>In the 7th century the royal palace of King Edwin of Northumbria and his successors, including St Oswald, stood at Gefrin or Yeavering near Kirknewton. The palace witnessed the baptism of Christian converts by Bishop Paulinus in 627 AD. Excavations have revealed a vast complex of grand timber halls, kitchens, a weaving shed, and even a Great Enclosure for livestock.</p>' +
    '</div>'
);

var customMarker13 = L.marker(pixelCoordinates13, { icon: customIcon }).addTo(map);
customMarker13.bindPopup(
    '<div>' +
    '<h3>St Cuthbert\'s Cave</h3>' +
    '<img src="cuthberts cave.jpg" alt="Cuthberts Cave" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Nestled within the Kyloe Hills near Holburn, this larger cave is one of two Northumbrian caves associated with St Cuthbert. Steeped in legend, it is said to have sheltered Lindisfarne\'s monks fleeing the Vikings with Cuthbert\'s body or served as Cuthbert\'s dwelling place before his journey to the Farne Islands.</p>' +
    '</div>'
);

var customMarker14 = L.marker(pixelCoordinates14, { icon: customIcon }).addTo(map);
customMarker14.bindPopup(
    '<div>' +
    '<h3>St Aidan\'s Church</h3>' +
    '<img src="St Aidans church.jpg" alt="St Aidans Church" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Founded by St Aidan in AD 635, this church is steeped in history and legend. The present building, dating back to the late 12th century with elements from earlier eras, holds above its font an original preserved beam said to have supported St Aidan in his final moments of life. Its crypt houses remains of local people from the 7th and 8th centuries.</p>' +
    '</div>'
);

var customMarker15 = L.marker(pixelCoordinates15, { icon: customIcon }).addTo(map);
customMarker15.bindPopup(
    '<div>' +
    '<h3>Bamburgh Beach and Castle</h3>' +
    '<img src="Bamburgh Beach.jpg" alt="Bamburgh Beach" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Set against the iconic Bamburgh Castle, the former seat of power of King Oswald, the white sands of Bamburgh Beach are unlike anywhere else in Britain. With its wildlife, sand dunes and enchanting views, it invites visitors to explore its timeless allure.</p>' +
    '</div>'
);

var customMarker16 = L.marker(pixelCoordinates16, { icon: customIcon }).addTo(map);
customMarker16.bindPopup(
    '<div>' +
    '<h3>Heavenfield</h3>' +
    '<img src="Heavenfield.jpg" alt="Heavenfield" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Heavenfield, nestled in the Northumbrian countryside, holds a special place in history as the site where St Oswald prayed and raised his cross before the Battle of Heavenfield in 635 AD. Overlooking this tranquil landscape stands St Oswald\'s Church, a testament to the saint\'s legacy and the enduring spirit of faith.</p>' +
    '</div>'
);

var customMarker17 = L.marker(pixelCoordinates17, { icon: customIcon }).addTo(map);
customMarker17.bindPopup(
    '<div>' +
    '<h3>Hexham Abbey and Anglo-Saxon Crpyt</h3>' +
    '<img src="Hexham.jpg" alt="Hexham" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Hexham Abbey boasts an original 7th-century Anglo-Saxon crypt built by St Wilfrid, which was once painted with colourful scenes of saints. Immerse yourself in its ancient underground walls, resonating with the profound symbolism of the resurrection. The abbey\'s medieval legacy and remarkable panel paintings, preserved despite the iconoclasm of the Reformation, also give this place a feeling quite unlike any other in England.</p>' +
    '</div>'
);

var customMarker18 = L.marker(pixelCoordinates18, { icon: customIcon }).addTo(map);
customMarker18.bindPopup(
    '<div>' +
    '<h3>Ruthwell Cross and Church</h3>' +
    '<img src="Ruthwell.jpg" alt="Hexham" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>The 8th-century Ruthwell Cross, one of the finest examples of Anglo-Saxon art, beckons you to explore its rich ancient symbolism. Standing over five meters tall, this ancient monument offers a glimpse into the enduring spiritual heritage of early medieval Britain.</p>' +
    '</div>'
);

var customMarker19 = L.marker(pixelCoordinates19, { icon: customIcon }).addTo(map);
customMarker19.bindPopup(
    '<div>' +
    '<h3>St Paul\'s Church in Jarrow</h3>' +
    '<img src="St Pauls.jpg" alt="St Pauls" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St Paul\'s Church contains the original chancel once part of the 7th-century monastery. It was here that St Bede wrote "The Ecclesiastical History of the English People". Walk exactly where he walked and prayed 1,400 years ago. Ensure you visit Jarrow Hall Museum just across from here and step into reconstructed buildings from the period.</p>' +
    '</div>'
);

var customMarker20 = L.marker(pixelCoordinates20, { icon: customIcon }).addTo(map);
customMarker20.bindPopup(
    '<div>' +
    '<h3>The Jordanhill Cross</h3>' +
    '<img src="Jordanhill.jpg" alt="Jordanhill" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover this Celtic Cross, a piece of the 9th century nestled in Jordanhill, Glasgow. Once erected in this area, the original fragments stand at Govan Old Parish Church, while a faithful replica remains in Jordanhill. Be sure to visit Govan Old Parish Church to see the incredible Govan Stones.</p>' +
    '</div>'
);

var customMarker21 = L.marker(pixelCoordinates21, { icon: customIcon }).addTo(map);
customMarker21.bindPopup(
    '<div>' +
    '<h3>The Middleton Cross</h3>' +
    '<img src="Middleton.jpg" alt="Jordanhill" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover this remarkable Viking Cross, one of three standing in St Andrew\'s Church near Pickering, North Yorkshire.</p>' +
    '</div>'
);

var customMarker22 = L.marker(pixelCoordinates22, { icon: customIcon }).addTo(map);
customMarker22.bindPopup(
    '<div>' +
    '<h3>Ripon Cathedral and Crypt</h3>' +
    '<img src="Ripon.jpg" alt="Ripon" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Ripon Cathedral boasts an original 7th-century Anglo-Saxon crypt built by St Wilfrid, which was once painted with colourful scenes of saints. Immerse yourself in its ancient underground walls, resonating with the profound symbolism of the resurrection.</p>' +
    '</div>'
);

var customMarker23 = L.marker(pixelCoordinates23, { icon: customIcon }).addTo(map);
customMarker23.bindPopup(
    '<div>' +
    '<h3>York Minster</h3>' +
    '<img src="York.jpg" alt="York" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>From its humble beginnings as a simple wooden church to its grandeur as one of the largest Gothic cathedrals in Europe, York Minster bears witness to centuries of faith and architectural brilliance. Explore its hallowed halls and ancient foundations, where the echoes of Roman and Anglo-Saxon history intertwine.</p>' +
    '</div>'
);

var customMarker24 = L.marker(pixelCoordinates24, { icon: customIcon }).addTo(map);
customMarker24.bindPopup(
    '<div>' +
    '<h3>Anglo Saxon Crosses in Ilkey</h3>' +
    '<img src="Ilkley.jpg" alt="Ilkley" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Three wonderful Anglo-Saxon crosses of varying conditions can be seen in All Saint\'s Parish Church, Ilkley, West Yorkshire.</p>' +
    '</div>'
);

var customMarker25 = L.marker(pixelCoordinates25, { icon: customIcon }).addTo(map);
customMarker25.bindPopup(
    '<div>' +
    '<h3>Beverley Minster</h3>' +
    '<img src="Beverley.jpg" alt="Beverley" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Beverley Minster, a marvel of medieval architecture, stands as a testament to centuries of faith and craftsmanship. It was founded in the 8th century and associated with St. John of Beverley, a pupil of St. Hilda. With its stunning Gothic design and intricate stone carvings, Beverley Minster invites visitors to immerse themselves in the rich tapestry of its history and spirituality, offering a glimpse into the soul of medieval England. Remarkably St John\'s relics are still buried within the minster walls.</p>' +
    '</div>'
);

var customMarker26 = L.marker(pixelCoordinates26, { icon: customIcon }).addTo(map);
customMarker26.bindPopup(
    '<div>' +
    '<h3>The Walton Cross</h3>' +
    '<img src="Walton.jpg" alt="Walton" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Near Halifax, West Yorkshire, the Walton Cross is located on elevated terrain along a footpath on Windybank Lane, Hightown. It stands a carved stone block dating to the late 9th or early 10th century. Likely the base of a Celtic or Norse-style preaching cross, it stands about 5 meters tall and served as a prominent landmark visible for miles.</p>' +
    '</div>'
);

var customMarker27 = L.marker(pixelCoordinates27, { icon: customIcon }).addTo(map);
customMarker27.bindPopup(
    '<div>' +
    '<h3>St Hilda\'s Church, Hartlepool</h3>' +
    '<img src="Hartlepool.jpg" alt="Hartlepool" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St. Hilda\'s Church in Hartlepool has its roots in the seventh-century monastery where St Hilda served as abbess before her renowned tenure at Whitby.</p>' +
    '</div>'
);

var customMarker28 = L.marker(pixelCoordinates28, { icon: customIcon }).addTo(map);
customMarker28.bindPopup(
    '<div>' +
    '<h3>St Peter\'s Church, Barton-upon-Humber</h3>' +
    '<img src="Lincolnshire.jpg" alt="Lincolnshire" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St. Peter\'s Church is treasure trove of history nestled in North Lincolnshire. Contains an original Anglo-Saxon tower and bapistry.</p>' +
    '</div>'
);

var customMarker29 = L.marker(pixelCoordinates29, { icon: customIcon }).addTo(map);
customMarker29.bindPopup(
    '<div>' +
    '<h3>St Winefride\'s Chapel and Holy Well</h3>' +
    '<img src="St Winefrides.jpg" alt="St Winefrides" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St. Winefride\'s Holy Well and Chapel have been revered pilgrimage sites since at least 1115. It is said that the well sprang from the spot where 7th-century Welsh abbot St. Beuno miraculously revived his niece, Winefride. The Holy Well is a star-shaped basin fed by spring water which bubbles up beneath an intricately vaulted ceiling. This sacred place invites contemplation and renewal, echoing centuries of spiritual devotion.</p>' +
    '</div>'
);

var customMarker30 = L.marker(pixelCoordinates30, { icon: customIcon }).addTo(map);
customMarker30.bindPopup(
    '<div>' +
    '<h3>The Eyam Cross</h3>' +
    '<img src="Eyam.jpg" alt="Eyam" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>A remarkable 8th or 10th century Anglo-Saxon cross and historic Church of St Lawrence in Eyam, Derbyshire.</p>' +
    '</div>'
);

var customMarker31 = L.marker(pixelCoordinates31, { icon: customIcon }).addTo(map);
customMarker31.bindPopup(
    '<div>' +
    '<h3>St Melangell\'s Shrine</h3>' +
    '<img src="St Melangell.jpg" alt="St Melangell" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover St. Melangell\'s Shrine and Church, honoring the 7th-century Welsh abbess and virgin known for her compassion towards hares. According to her story, St. Melangell protected a hare from a hunting party and was granted land to found a sanctuary and convent. Imbued with tranquility and spiritual significance, this sacred site offers solace and inspiration.</p>' +
    '</div>'
);

var customMarker32 = L.marker(pixelCoordinates32, { icon: customIcon }).addTo(map);
customMarker32.bindPopup(
    '<div>' +
    '<h3>St Oswald\'s Well, Oswestry</h3>' +
    '<img src="St Oswald.jpg" alt="St Oswald" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>A site steeped in history and legend. Named after the revered King Oswald, this sacred well is said to possess healing properties and has been a place of pilgrimage for centuries. According to legend, it is here that a raven is said to have dropped St Oswald\'s arm after his martyrdom by King Penda. Oswestry literally means Oswald\'s Tree.</p>' +
    '</div>'
);

var customMarker33 = L.marker(pixelCoordinates33, { icon: customIcon }).addTo(map);
customMarker33.bindPopup(
    '<div>' +
    '<h3>St Cybi\'s Church, Holyhead</h3>' +
    '<img src="St Cybis.jpg" alt="St Cybis" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St Cybis was a 6th century Welsh saint, and cousin of St. David. His Church stands on the site of the original 6th century monastery.</p>' +
    '</div>'
);

var customMarker34 = L.marker(pixelCoordinates34, { icon: customIcon }).addTo(map);
customMarker34.bindPopup(
    '<div>' +
    '<h3>The Gosforth Cross</h3>' +
    '<img src="Gosforth.jpg" alt="Gosforth" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Incredible 10th century tall Viking Cross standing in the churchyard of St Mary\'s Church, in Gosforth, Cumbria.</p>' +
    '</div>'
);

var customMarker35 = L.marker(pixelCoordinates35, { icon: customIcon }).addTo(map);
customMarker35.bindPopup(
    '<div>' +
    '<h3>St Wystan\'s Church and Saxon Crypt</h3>' +
    '<img src="Wystan.jpg" alt="Wysan" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Explore the remarkable Anglo-Saxon heritage of St. Wystan\'s Church in Repton, where a perfectly preserved early eighth-century crypt lies beneath the chancel. With significant Anglo-Saxon fabric still intact in the present-day church, the monastery is thought to have been founded between 675 and 692.</p>' +
    '</div>'
);

var customMarker36 = L.marker(pixelCoordinates36, { icon: customIcon }).addTo(map);
customMarker36.bindPopup(
    '<div>' +
    '<h3>Crowland Abbey</h3>' +
    '<img src="Crowland.jpg" alt="Crowland" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover the captivating ruins of Crowland Abbey, once the site of St. Guthlac\'s Anglo-Saxon Abbey and later a Benedictine monastery. Nestled amidst the picturesque landscape, these historic ruins bear witness to centuries of spiritual devotion.</p>' +
    '</div>'
);

var customMarker37 = L.marker(pixelCoordinates37, { icon: customIcon }).addTo(map);
customMarker37.bindPopup(
    '<div>' +
    '<h3>Walsingham Abbey and Shrines of Our Lady of Walsingham</h3>' +
    '<img src="Walsingham.jpg" alt="Walsingham" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>See the ruins of the once grand 11th century abbey in the village of Walsingham, today home to both shrines of the Blessed Virgin Mary. Our Lady appeared to a devout noblewoman here in the year in 1061 and it has been a place of deep pilgrimage ever since.</p>' +
    '</div>'
);

var customMarker38 = L.marker(pixelCoordinates38, { icon: customIcon }).addTo(map);
customMarker38.bindPopup(
    '<div>' +
    '<h3>Lichfield Cathedral and the Shrine of St Chad</h3>' +
    '<img src="Lichfield.jpg" alt="Lichfield" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Founded originally by St. Chad, the revered Anglo-Saxon bishop in the 7th century who came here from Lindisfarne, this Gothic cathedral boasts a rich history intertwined with his legacy. St Chad\'s Shrine has been recently rebuilt inside. See also St Chad\'s Roman Catholic Cathedral in Birmingham.</p>' +
    '</div>'
);

var customMarker39 = L.marker(pixelCoordinates39, { icon: customIcon }).addTo(map);
customMarker39.bindPopup(
    '<div>' +
    '<h3>Bury St Edmunds Abbey</h3>' +
    '<img src="Bury.jpg" alt="Bury" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Founded in the 11th century, the abbey was dedicated to St. Edmund, the Anglo-Saxon king and martyr, who was executed by Viking invaders in 869 after refusing to renounce his Christian faith. The abbey housed relics of St. Edmund in a popular shrine, attracting pilgrims from far and wide seeking healing and spiritual solace. Today, its impressive ruins stand as a testament to its former grandeur.</p>' +
    '</div>'
);

var customMarker40 = L.marker(pixelCoordinates40, { icon: customIcon }).addTo(map);
customMarker40.bindPopup(
    '<div>' +
    '<h3>St Kenelm\'s Holy Well</h3>' +
    '<img src="Kenelms.jpg" alt="Kenelm" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover the enchanting St. Kenelm\'s Well near Winchcombe. This sacred well is named after a young Anglo-Saxon prince who was killed in the 9th century by his half-sister. According to the story his body was discovered at this spot where a well sprang forth, and its waters are said to possess healing properties. Surrounded by serene countryside, St. Kenelm\'s Well is housed in a small conduit house with a carving of the saint above the door.</p>' +
    '</div>'
);

var customMarker41 = L.marker(pixelCoordinates41, { icon: customIcon }).addTo(map);
customMarker41.bindPopup(
    '<div>' +
    '<h3>Dragon Hill, Uffington</h3>' +
    '<img src="Dragon Hill.jpg" alt="Dragon" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>This iconic hill, crowned with ancient earthworks, is steeped in folklore. It is believed by some to have once witnessed the battle between St George and a ferocious dragon.</p>' +
    '</div>'
);

var customMarker42 = L.marker(pixelCoordinates42, { icon: customIcon }).addTo(map);
customMarker42.bindPopup(
    '<div>' +
    '<h3>St David\'s Cathedral </h3>' +
    '<img src="St Davids.jpg" alt="St Davids" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Dedicated to St. David, the patron saint of Wales, this cathedral in Pembrokeshire is situated on the spot where he founded his monastery in the 6th century and still contains a shrine to the great evangelist.</p>' +
    '</div>'
);

var customMarker43 = L.marker(pixelCoordinates43, { icon: customIcon }).addTo(map);
customMarker43.bindPopup(
    '<div>' +
    '<h3>St Non\'s Chapel and Holy Well</h3>' +
    '<img src="St Non.jpg" alt="St Non" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St. Non\’s Chapel, with only a few crumbling walls remaining, is a significant site in a stunning location. Named after St. David\'s mother, who gave birth to David in the early 6th century. The ruins overlook St. Non’s Bay, offering stunning views, while the nearby holy well offers visitors its curative powers.</p>' +
    '</div>'
);

var customMarker44 = L.marker(pixelCoordinates44, { icon: customIcon }).addTo(map);
customMarker44.bindPopup(
    '<div>' +
    '<h3>St Margaret and St Frideswide\'s Holy Well</h3>' +
    '<img src="Margaret.jpg" alt="St Margaret" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St Margaret\'s Holy Well sits in the peaceful grounds of the church named in her honour. This was also the site of the Anglo-Saxon patroness of Oxford\'s 7th century monastery, St Frideswide. Despite being named in the honour of Margaret of Antioch, the holy well was said to have sprung forth by Frideswide\'s prayers after a Mercian prince was blinded by looking at her. Whence she promptly used these waters to heal him. The legend of St Margaret and the dragon is also worth exploring before you visit.</p>' +
    '</div>'
);

var customMarker45 = L.marker(pixelCoordinates45, { icon: customIcon }).addTo(map);
customMarker45.bindPopup(
    '<div>' +
    '<h3>St Alban\'s Cathedral and Shrine</h3>' +
    '<img src="Alban.jpg" alt="St Alban" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Perched upon the site of Britain\'s first Christian martyr, St. Alban\'s Cathedral stands as a poignant reminder of his sacrifice. Though his relics were lost during the Reformation, this magnificent Norman cathedral and his shrine continue to echo the tale of St. Alban. Having sheltered Christian priests in Roman Britain, Alban\'s own conversion led to his arrest and execution on this very hill where the cathedral now majestically resides.</p>' +
    '</div>'
);

var customMarker46 = L.marker(pixelCoordinates46, { icon: customIcon }).addTo(map);
customMarker46.bindPopup(
    '<div>' +
    '<h3>St Peter\'s Chapel, Original Church of St Cedd</h3>' +
    '<img src="Cedd.jpg" alt="Cedd" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>This church was built by St Cedd, the Northumbrian evangelist of Essex who was raised by St Aidan. Cedd sailed here from Lindisfarne in 553. As such, this is the most complete example of a stone Saxon church anywhere in Britain. With its ancient walls and spiritual significance, this chapel offers a profound link without our ancient past. The very stones you see in this peaceful place were placed here under the gaze of St Cedd himself.</p>' +
    '</div>'
);

var customMarker47 = L.marker(pixelCoordinates47, { icon: customIcon }).addTo(map);
customMarker47.bindPopup(
    '<div>' +
    '<h3>Westminster Abbey and the Shrine of Edward the Confessor</h3>' +
    '<img src="Westminster.jpg" alt="Westminster" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Westminster Abbey is a majestic symbol of British history and culture, renowned for its architecture and as the place of coronation of English kings. The abbey contains the shrine, still with the relics, of Edward the Confessor, the revered Anglo-Saxon king of England known for his piety and wisdom. This Norman cathedral is quite unlike any other in the country.</p>' +
    '</div>'
);

var customMarker48 = L.marker(pixelCoordinates48, { icon: customIcon }).addTo(map);
customMarker48.bindPopup(
    '<div>' +
    '<h3>Saxon Chapel of St Laurence</h3>' +
    '<img src="Saxon Chapel.jpg" alt="Saxon" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>The Saxon Church of St. Laurence in Bradford-upon-Avon is steeped in enchantment. This ancient church holds tales of kings, saints, and nuns. King Æthelred\'s grant to the nuns of Shaftesbury in 1001 hints at its early eleventh-century origins, while its tall, narrow structure and ornate decoration suggest a noble purpose, perhaps housing relics of Æthelred\'s brother, Edward the Martyr.</p>' +
    '</div>'
);

var customMarker49 = L.marker(pixelCoordinates49, { icon: customIcon }).addTo(map);
customMarker49.bindPopup(
    '<div>' +
    '<h3>Canterbury Cathedral</h3>' +
    '<img src="Canterbury.jpg" alt="Canterbury" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Established by St. Augustine in 597 AD, this cathedral holds the distinction of being England\'s first. Not only a place of worship but also a revered pilgrimage destination, renowned for its breathtaking art and architectural grandeur. With a legacy spanning over a millennium, Canterbury Cathedral remains a beacon of spiritual inspiration and a must-visit location.</p>' +
    '</div>'
);

var customMarker50 = L.marker(pixelCoordinates50, { icon: customIcon }).addTo(map);
customMarker50.bindPopup(
    '<div>' +
    '<h3>St Augustine\'s Abbey</h3>' +
    '<img src="Augustine.jpg" alt="Augustine" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover the ruins of St. Augustine\'s Abbey in Canterbury, founded by St. Augustine in 597 AD. As the "Apostle to the English," Augustine played a crucial role in establishing Christianity in England and shaping its destiny. These ancient ruins stand as a testament to his enduring legacy and the spread of Christianity throughout the Anglo-Saxon kingdoms.</p>' +
    '</div>'
);

var customMarker51 = L.marker(pixelCoordinates51, { icon: customIcon }).addTo(map);
customMarker51.bindPopup(
    '<div>' +
    '<h3>St Augustine\'s Cross</h3>' +
    '<img src="Augustine Cross.jpg" alt="Augustine Cross" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Stand in awe before St. Augustine\'s Cross in Thanet, a 19th century monument evoking ancient Saxon art commemorating the arrival of St. Augustine, the "Apostle to the English," in 597 AD. This historic cross marks the spot where Augustine and his companions landed, heralding the beginning of Christianity in Anglo-Saxon England.</p>' +
    '</div>'
);

var customMarker52 = L.marker(pixelCoordinates52, { icon: customIcon }).addTo(map);
customMarker52.bindPopup(
    '<div>' +
    '<h3>The Shrine of St Augustine, Ramsgate</h3>' +
    '<img src="Shrine Augustine.jpg" alt="Shrine Augustine" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Founded in the 19th century by the pioneering Victorian architect Augustus Pugin, this Roman Catholic shrine serves as an incomparable connection to our Anglo-Saxon past. Pilgrims may pay homage to St. Augustine, whose remaining relic is here, and whose mission brought Christianity to these shores in 597 AD.</p>' +
    '</div>'
);

var customMarker53 = L.marker(pixelCoordinates53, { icon: customIcon }).addTo(map);
customMarker53.bindPopup(
    '<div>' +
    '<h3>St Mary the Blessed Virgin Church</h3>' +
    '<img src="St Mary blessed.jpg" alt="St Mary Blessed" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>An Anglo-Saxon church with ancient carvings and famed for its remarkable Saxon tower. The church is in Lancing, near Worthing.</p>' +
    '</div>'
);

var customMarker54 = L.marker(pixelCoordinates54, { icon: customIcon }).addTo(map);
customMarker54.bindPopup(
    '<div>' +
    '<h3>St Mary\'s Church, Breamore</h3>' +
    '<img src="Breamore.jpg" alt="Breamore" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Breamore is one of the most famous and important Saxon churches in England, notable for its many Saxon details, but especially for the Saxon inscription carved into the arch of the south porticus. This sacred place is well worth a visit.</p>' +
    '</div>'
);

var customMarker55 = L.marker(pixelCoordinates55, { icon: customIcon }).addTo(map);
customMarker55.bindPopup(
    '<div>' +
    '<h3>Glastonbury Abbey</h3>' +
    '<img src="Glastonbury.jpg" alt="Glastonbury" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Immerse yourself in the mystical allure of Glastonbury Abbey, a place steeped in faith, legend, and history. Founded in the 7th century, this ancient abbey stands as a symbol of ancient pilgrimage, drawing visitors from around the world to its hallowed grounds. From the myths of King Arthur and the Holy Grail to the earthly remains of saints, Glastonbury Abbey has long been a focal point of spiritual exploration and contemplation. Explore its ruins, stroll through its tranquil gardens, and feel the whispers of centuries past echoing over its stones.</p>' +
    '</div>'
);

var customMarker56 = L.marker(pixelCoordinates56, { icon: customIcon }).addTo(map);
customMarker56.bindPopup(
    '<div>' +
    '<h3>Glastonbury Tor</h3>' +
    '<img src="Glastonbury Tor.jpg" alt="Glastonbury Tor" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Ascend Glastonbury Tor, a mystical hill rising majestically from the Somerset landscape. Steeped in myth and legend, this ancient site has been a place of pilgrimage and spiritual significance for centuries. From its summit, visitors can marvel at panoramic views of the surrounding countryside and contemplate the stories of Avalon and King Arthur.</p>' +
    '</div>'
);


var customMarker57 = L.marker(pixelCoordinates57, { icon: customIcon }).addTo(map);
customMarker57.bindPopup(
    '<div>' +
    '<h3>King Alfred\'s Monument</h3>' +
    '<img src="Alfred.jpg" alt="Alfred" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Alfred the Great\'s Monument in Bridgwater is a Victorian tribute to one of England\'s greatest kings. This monument commemorates his legendary achievements and enduring legacy. As a beacon of courage, wisdom, and resilience it serves as a reminder of his pivotal role in shaping the course of English history. At the nearby Battle of Eddington Alfred defeated the Vikings in 878.</p>' +
    '</div>'
);


var customMarker58 = L.marker(pixelCoordinates58, { icon: customIcon }).addTo(map);
customMarker58.bindPopup(
    '<div>' +
    '<h3>St Petroc\'s Well, Devon</h3>' +
    '<img src="Petrocs Well.jpg" alt="Petroc" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Discover the ancient waters of St. Petroc\'s Well in Petrocstowe, Devon. Named after St. Petroc, the revered Welsh saint known for his missionary work in Cornwall during the early Middle Ages, this sacred well would have drawn pilgrims seeking healing and blessings for centuries. There is now no structure left to see above the soil.</p>' +
    '</div>'
);

var customMarker59 = L.marker(pixelCoordinates59, { icon: customIcon }).addTo(map);
customMarker59.bindPopup(
    '<div>' +
    '<h3>Tintagel Castle</h3>' +
    '<img src="Tintagel.jpg" alt="Tintagel" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Perched dramatically on the rugged cliffs of Cornwall, Tintagel Castle ruins stands as a symbol of Arthurian legend and ancient history. This iconic site, steeped in myth and mystery, is believed by some to have connections to Arthur\'s birth. With its breathtaking coastal views and evocative ruins, Tintagel Castle invites visitors to step back in time and explore the remnants of a once-grand fortress.</p>' +
    '</div>'
);

var customMarker60 = L.marker(pixelCoordinates60, { icon: customIcon }).addTo(map);
customMarker60.bindPopup(
    '<div>' +
    '<h3>St Petroc\'s Church, Padstow</h3>' +
    '<img src="Padstow.jpg" alt="Padstow" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>St. Petroc\'s Church, points to the enduring legacy of the revered Welsh saint, Petroc. Situated in the picturesque town of Padstow, which translates to "Petroc\'s Stow" or "Petrock\'s place," this late medieval church stands as a symbol of faith and pilgrimage. It is on the site of an abbey founded by St. Petroc himself in 518, whose missionary work left an indelible mark on the region.</p>' +
    '</div>'
);

var customMarker61 = L.marker(pixelCoordinates61, { icon: customIcon }).addTo(map);
customMarker61.bindPopup(
    '<div>' +
    '<h3>St Cuthbert\'s Cave, Newquay</h3>' +
    '<img src="Cuthbert Cornwall.jpg" alt="Cuthbert Cornwall" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>Explore the mysterious charm of St. Cuthbert\'s Cave and Holy Well in Newquay. Legend has it that the great Northumbrian saint\'s body once came here, showing how far his medieval cult spread. Tucked away at the far end of the beach and accessible only at low tide, it is a gem awaiting discovery.</p>' +
    '</div>'
);

var customMarker62 = L.marker(pixelCoordinates62, { icon: customIcon }).addTo(map);
customMarker62.bindPopup(
    '<div>' +
    '<h3>Merlin\'s Cave, Tintagel</h3>' +
    '<img src="Merlin.jpg" alt="Merlin" style="width: 100%; max-width: 400px; height: auto;">' +
    '<p>According to legend, Merlin himself once resided within these enchanted walls, overseeing the ebb and flow of the tides. It is said that Merlin first beheld the infant King Arthur as he washed up in the waves below, subsequently guiding him to safety. Above the cave, the crumbled ruins of Tintagel Castle stand as a testament to the enduring power of Arthurian legend.</p>' +
    '</div>'
);



map.setView(pixelCoordinates1, -3); // Set the view to your existing marker's coordinates

// Dynamically adjust the marker size after the map loads
map.whenReady(function () {
    // Adjust the marker size to 20% of the initial size
    var newIconSize = customIcon.options.iconSize.map(function (dimension) {
        return dimension * 0.2;
    });

    // Set the new size to the marker icon
    customMarker1._icon.style.width = newIconSize[0] + 'px';
    customMarker1._icon.style.height = newIconSize[1] + 'px';
    customMarker2._icon.style.width = newIconSize[0] + 'px';
    customMarker2._icon.style.height = newIconSize[1] + 'px';
    customMarker3._icon.style.width = newIconSize[0] + 'px';
    customMarker3._icon.style.height = newIconSize[1] + 'px';
    customMarker4._icon.style.width = newIconSize[0] + 'px';
    customMarker4._icon.style.height = newIconSize[1] + 'px';
    customMarker5._icon.style.width = newIconSize[0] + 'px';
    customMarker5._icon.style.height = newIconSize[1] + 'px';
    customMarker6._icon.style.width = newIconSize[0] + 'px';
    customMarker6._icon.style.height = newIconSize[1] + 'px';
    customMarker7._icon.style.width = newIconSize[0] + 'px';
    customMarker7._icon.style.height = newIconSize[1] + 'px';
    customMarker8._icon.style.width = newIconSize[0] + 'px';
    customMarker8._icon.style.height = newIconSize[1] + 'px';
    customMarker9._icon.style.width = newIconSize[0] + 'px';
    customMarker9._icon.style.height = newIconSize[1] + 'px';
    customMarker10._icon.style.width = newIconSize[0] + 'px';
    customMarker10._icon.style.height = newIconSize[1] + 'px';
    customMarker11._icon.style.width = newIconSize[0] + 'px';
    customMarker11._icon.style.height = newIconSize[1] + 'px';
    customMarker12._icon.style.width = newIconSize[0] + 'px';
    customMarker12._icon.style.height = newIconSize[1] + 'px';
    customMarker13._icon.style.width = newIconSize[0] + 'px';
    customMarker13._icon.style.height = newIconSize[1] + 'px';
    customMarker14._icon.style.width = newIconSize[0] + 'px';
    customMarker14._icon.style.height = newIconSize[1] + 'px';
    customMarker15._icon.style.width = newIconSize[0] + 'px';
    customMarker15._icon.style.height = newIconSize[1] + 'px';
    customMarker16._icon.style.width = newIconSize[0] + 'px';
    customMarker16._icon.style.height = newIconSize[1] + 'px';
    customMarker17._icon.style.width = newIconSize[0] + 'px';
    customMarker17._icon.style.height = newIconSize[1] + 'px';
    customMarker18._icon.style.width = newIconSize[0] + 'px';
    customMarker18._icon.style.height = newIconSize[1] + 'px';
    customMarker19._icon.style.width = newIconSize[0] + 'px';
    customMarker19._icon.style.height = newIconSize[1] + 'px';
    customMarker20._icon.style.width = newIconSize[0] + 'px';
    customMarker20._icon.style.height = newIconSize[1] + 'px';
    customMarker21._icon.style.width = newIconSize[0] + 'px';
    customMarker21._icon.style.height = newIconSize[1] + 'px';
    customMarker22._icon.style.width = newIconSize[0] + 'px';
    customMarker22._icon.style.height = newIconSize[1] + 'px';
    customMarker23._icon.style.width = newIconSize[0] + 'px';
    customMarker23._icon.style.height = newIconSize[1] + 'px';
    customMarker24._icon.style.width = newIconSize[0] + 'px';
    customMarker24._icon.style.height = newIconSize[1] + 'px';
    customMarker25._icon.style.width = newIconSize[0] + 'px';
    customMarker25._icon.style.height = newIconSize[1] + 'px';
    customMarker26._icon.style.width = newIconSize[0] + 'px';
    customMarker26._icon.style.height = newIconSize[1] + 'px';
    customMarker27._icon.style.width = newIconSize[0] + 'px';
    customMarker27._icon.style.height = newIconSize[1] + 'px';
    customMarker28._icon.style.width = newIconSize[0] + 'px';
    customMarker28._icon.style.height = newIconSize[1] + 'px';
    customMarker29._icon.style.width = newIconSize[0] + 'px';
    customMarker29._icon.style.height = newIconSize[1] + 'px';
    customMarker30._icon.style.width = newIconSize[0] + 'px';
    customMarker30._icon.style.height = newIconSize[1] + 'px';
    customMarker31._icon.style.width = newIconSize[0] + 'px';
    customMarker31._icon.style.height = newIconSize[1] + 'px';
    customMarker32._icon.style.width = newIconSize[0] + 'px';
    customMarker32._icon.style.height = newIconSize[1] + 'px';
    customMarker33._icon.style.width = newIconSize[0] + 'px';
    customMarker33._icon.style.height = newIconSize[1] + 'px';
    customMarker34._icon.style.width = newIconSize[0] + 'px';
    customMarker34._icon.style.height = newIconSize[1] + 'px';
    customMarker35._icon.style.width = newIconSize[0] + 'px';
    customMarker35._icon.style.height = newIconSize[1] + 'px';
    customMarker36._icon.style.width = newIconSize[0] + 'px';
    customMarker36._icon.style.height = newIconSize[1] + 'px';
    customMarker37._icon.style.width = newIconSize[0] + 'px';
    customMarker37._icon.style.height = newIconSize[1] + 'px';
    customMarker38._icon.style.width = newIconSize[0] + 'px';
    customMarker38._icon.style.height = newIconSize[1] + 'px';
    customMarker39._icon.style.width = newIconSize[0] + 'px';
    customMarker39._icon.style.height = newIconSize[1] + 'px';
    customMarker40._icon.style.width = newIconSize[0] + 'px';
    customMarker40._icon.style.height = newIconSize[1] + 'px';
    customMarker41._icon.style.width = newIconSize[0] + 'px';
    customMarker41._icon.style.height = newIconSize[1] + 'px';
    customMarker42._icon.style.width = newIconSize[0] + 'px';
    customMarker42._icon.style.height = newIconSize[1] + 'px';
    customMarker43._icon.style.width = newIconSize[0] + 'px';
    customMarker43._icon.style.height = newIconSize[1] + 'px';
    customMarker44._icon.style.width = newIconSize[0] + 'px';
    customMarker44._icon.style.height = newIconSize[1] + 'px';
    customMarker45._icon.style.width = newIconSize[0] + 'px';
    customMarker45._icon.style.height = newIconSize[1] + 'px';
    customMarker46._icon.style.width = newIconSize[0] + 'px';
    customMarker46._icon.style.height = newIconSize[1] + 'px';
    customMarker47._icon.style.width = newIconSize[0] + 'px';
    customMarker47._icon.style.height = newIconSize[1] + 'px';
    customMarker48._icon.style.width = newIconSize[0] + 'px';
    customMarker48._icon.style.height = newIconSize[1] + 'px';
    customMarker49._icon.style.width = newIconSize[0] + 'px';
    customMarker49._icon.style.height = newIconSize[1] + 'px';
    customMarker50._icon.style.width = newIconSize[0] + 'px';
    customMarker50._icon.style.height = newIconSize[1] + 'px';
    customMarker51._icon.style.width = newIconSize[0] + 'px';
    customMarker51._icon.style.height = newIconSize[1] + 'px';
    customMarker52._icon.style.width = newIconSize[0] + 'px';
    customMarker52._icon.style.height = newIconSize[1] + 'px';
    customMarker53._icon.style.width = newIconSize[0] + 'px';
    customMarker53._icon.style.height = newIconSize[1] + 'px';
    customMarker54._icon.style.width = newIconSize[0] + 'px';
    customMarker54._icon.style.height = newIconSize[1] + 'px';
    customMarker55._icon.style.width = newIconSize[0] + 'px';
    customMarker55._icon.style.height = newIconSize[1] + 'px';
    customMarker56._icon.style.width = newIconSize[0] + 'px';
    customMarker56._icon.style.height = newIconSize[1] + 'px';
    customMarker57._icon.style.width = newIconSize[0] + 'px';
    customMarker57._icon.style.height = newIconSize[1] + 'px';
    customMarker58._icon.style.width = newIconSize[0] + 'px';
    customMarker58._icon.style.height = newIconSize[1] + 'px';
    customMarker59._icon.style.width = newIconSize[0] + 'px';
    customMarker59._icon.style.height = newIconSize[1] + 'px';
    customMarker60._icon.style.width = newIconSize[0] + 'px';
    customMarker60._icon.style.height = newIconSize[1] + 'px';
    customMarker61._icon.style.width = newIconSize[0] + 'px';
    customMarker61._icon.style.height = newIconSize[1] + 'px';
    customMarker62._icon.style.width = newIconSize[0] + 'px';
    customMarker62._icon.style.height = newIconSize[1] + 'px';




    // Update the icon size property for future reference
    customIcon.options.iconSize = newIconSize;
});