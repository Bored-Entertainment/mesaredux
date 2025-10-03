// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://the-duck.co/',
'https://dirt.cool/',
'https://mesagrey.ca/',
'https://swordslasher.com/',
'http://localhost:4000'  //change this to your own site when testing locally
];

// custom names for each site. real greymesa innovation
var names = [
'The Duck',
'Harper / Dirt',
'greymesa',
'n1swordslasher',
'MESλREDUX',
]

//the name of the ring
var ringName = 'BoredRing';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'boredring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://webring.mesagrey.ca';

//should the widget include a random button?
var useRandom = true;
