/*
created by yours truly (OBro1961), with some code snippets from parts of main.js by Ortiel
this makes future updates much easier
!   /!\ requires newer browsers, i'm going to use arrow functions and let because i want to. /!\

File changes (on update look at these!)
** all modified lines end in '// !MOD' or '<!--MOD-->' **
* [minigameGrimoire.js:497] M.magicBarTextL.innerHTML = addMagicDecimals(Game, M);
*
* [main.js:4677] l('lumpsAmount').style.color = colorLumpCount(Game, age);
* [main.js:4419-4464] (many lines, they all set str to colorLumpTooltip() with relevant types)
* [main.js:6691] makeLoadModsButton()+
* [main.js:7369] getNewsTickers(Game)
* [main.js:9768,9780] customCovenantIcon(false)  &  customCovenantIcon(true)
* [main.js:15740] str = addCookiesPerClick(Game, str);
*/
//<span style="font-size:9px;font-style:italic;color:#999;">psssst! you can click me to update this data!</span>


function l(id) { return document.getElementById(id); } // element identified by id
function exists(o) { return o != null && o != undefined; } // true if object is defined
function choose(arr) { return arr[ Math.floor(Math.random() * arr.length) ]; } // returns a random item from arr

const icons = 'https://raw.githubusercontent.com/mrbuilder1961/mrbuilder1961.github.io/main/mods/other_icons.png';
const red = 'color:#fb5a71;';
const meaty = 'color:#d6502c;';
const gold = 'color:#ffd966;';
const lime = 'color:#73f21e;'
const green = 'color:#43eb95;';
const blue = 'color:#6fcfff;';


/** Formats a string with arguments */
function format(baseStr='', ...args) {
    textArgs = (baseStr.length - baseStr.replace(/\${}/g, '').length) / 3;

    for(let i = 0; i < textArgs; ++i) {
        if( exists(args[i]) )
            baseStr = baseStr.replace(/\${}/,
                (args[i]?.toString instanceof Function) ? args[i].toString() : String(args[i])
            )
    }

    return baseStr;
}

/** Surrounds `str` with '<div class="clazz"></div>' and any attributes, in the format `attr="value"` */
function div(clazz='', str='', ...attrs) {
    return format('<div class="${}"${}>${}</div>', clazz, (attrs.length > 0 ? ' '+attrs.join(' ') : ''), str);
}

/** Adds 2 decimal places to the (visible) magic level in the Grimoire minigame */
function addMagicDecimals(Game, M) {
    return format(
        '${}/${}${}',
        String(M.magic).replace(/(\d+\.\d{2}).*/, '$1'),
        Beautify(Math.floor(M.magicM)),
        M.magic < M.magicM ? (' (+' + Beautify((M.magicPS || 0) * Game.fps, 2) + '/s)') : ''
    );
}

/** Adds the cookies gained per click next to the cookies per second text */
function addCookiesPerClick(Game, text) {
    return text += format(
        '<div id="cookiesPerSecond" style="font-size:50%;">per second/click : ${}/${}</div>',

        format(
            '<span style="color:${};">${}</span>',

            (Game.cpsSucked > 0) ? (Game.prefs.fancy ? '#dd4949' : '#ff9292') : 'inherit',
            Beautify( Game.cookiesPs * (1 - Game.cpsSucked), 1 )
        ),
        Beautify( Game.computedMouseCps, 1 ),
    )
}

/** Colors sugar lump count depending on the stage of growth: blue for maturing, gold for mature, green for ripe, and red for superslow growth */
function colorLumpCount(Game, age) {
    function hex(color) { return String(color).replace(/^color:(#[0-9a-f]{6});$/i, '$1'); }

    return (age < Game.lumpMatureAge) ? hex(blue) : (age < Game.lumpRipeAge) ? hex(gold) : (age < Game.lumpOverripeAge) ? hex(green) : hex(meaty);
}

/** Adds **color** to the sugar lump tooltip! */
function colorLumpTooltip(Game, type, age, tooltip) {
    function sayLumpAge(base) { return Game.sayTime( ((((base - age) / 1000) + 1) * Game.fps), -1 ); }

    switch(type) {
        case 'maturing':
            return tooltip += format('This sugar lump is still growing and will take <b><span style="'+blue+'">${}</span></b> to reach maturity.', sayLumpAge(Game.lumpMatureAge) );
        case 'mature':
            return tooltip += format('This sugar lump is mature and will be ripe in <b>${}</b>.<br>You may <b>click it to harvest it now</b>, but there is a <b><span style="'+gold+'">50% chance</span> you won\'t get anything</b>.', sayLumpAge(Game.lumpRipeAge) );
        case 'ripe':
            return tooltip += format('<b>This sugar lump is ripe! Click it to harvest it.</b><br>If you do nothing, it will auto-harvest in <b><span style="'+green+'">${}</span></b>.', sayLumpAge(Game.lumpOverripeAge) );

        case 'bifurcated':
            return tooltip += format('This sugar lump grew to be <b>bifurcated</b>; harvesting it has a <b>${}</b> chance of yielding two lumps.', Game.Has('Sucralosia Inutilis') ? '52.5%' : '50%' );
        case 'caramel':
            return tooltip += 'This sugar lump is <b><span style="color:#e4c57a;">caramelized</span></b>, its stickiness binding it to unexpected things; harvesting it will yield between 1 and 3 lumps and will refill your sugar lump cooldowns!';
        case 'meaty':
            return tooltip += 'This sugar lump was affected by the elders and grew to be <b><span style="'+meaty+'">meaty</span></b>; harvesting it will yield between 0 and 2 lumps.';
        case 'golden':
            return tooltip += 'This sugar lump grew to be <b><span style="color:#b99445;">golden</span></b>; harvesting it will yield 2 to 7 lumps, your current cookies will be doubled (capped to 24 hours of CpS), and you will find 10% more golden cookies for the next 24 hours. This is very rare (0.075%), so if you haven\'t cheated then buy a lottery ticket or something!';

        case 'time':
            return tooltip += format(
                'Your sugar lumps mature after <b><span style="'+blue+'">${}</span></b>,<br>ripen after <b><span style="'+green+'">${}</span></b>,<br>and fall after <b><span style="'+gold+'">${}</span></b>.',
                sayLumpAge(Game.lumpMatureAge), sayLumpAge(Game.lumpRipeAge), sayLumpAge(Game.lumpOverripeAge)
            );

        default:
            return tooltip;
	}
}

function getCustomIcon(x, y, tiny=false) {
    if(tiny)
        return format('<div class="icon" style="vertical-align:middle;display:inline-block;background-image:url(${});background-position:${}px ${}px;transform:scale(0.5);margin:-16px;"></div>',
            icons,
            -x * 48,
            -y * 48
        );
    else
        return format('<div class="icon" style="vertical-align:middle;display:inline-block;background-image:url(${});background-position:${}px ${}px;margin:-16px;"></div>',
            icons,
            -x * 48,
            -y * 48
        );
}

/** Returns the HTML code for a small icon represented by the upgrade name, *code made by Ortiel* just formatted differently */
function getUpgradeIcon(name) {
    const icon = Game.Upgrades[name].icon;

    if( !exists(icon) )
        return '';

    return format('<div class="icon" style="vertical-align:middle;display:inline-block;${}background-position:${}px ${}px;transform:scale(0.5);margin:-16px;"></div>',
        ( icon[2] ? 'background-image:url('+icon[2]+');' : '' ),
        -icon[0] * 48,
        -icon[1] * 48
    );
}
/** Lists the icons of upgrades provided, *code made by Ortiel* just formatted differently */
function listTinyUpgrades(onlyOwned, ...upgrades) {
    let html = '';

    if(upgrades.length <= 0)
        return html;

    for(let name of upgrades)
        if( onlyOwned ? Game.Has(name) : true )
		    html += getUpgradeIcon(name);

    return html;
}

/** Adds some more news tickers! */
function getNewsTickers(Game) {
    // add old ones and make some new ones
    const bakery = Game.bakeryName;
    const earned = Game.cookiesEarned;
    const bank = Game.cookies;

    return choose([
        'News : Idea of turning the multiverse into cookies has been circulating, and may be a good idea. Tune in to WGN9 News at 9PM tonight for more details.',
        'News : Local woman changes name 3 times within a month! New world record? Only Guiness will tell.',
        'News : Local man in love with Cookie Clicker, cannot get enough of it! "I just can\'t get over how many references to itself are in this game."',
        'News : աɛ ǟʀɛ ȶʀǟքքɛɖ, ʄʀօʍ ȶɦɛ ɨռֆɨɖɛ. ɦɛʟք ʊֆ.',
		'News : Random middle schooler utilizes basic exploit to disable all internet restrictions. "We just didn\'t realize how easy it was to access," says head of administration.',
        'News : Did you know you can put people in here?' + getCustomIcon(0, 0, true) + '.'
    ]);
}

/** Returns the icon position of the (custom) Elder Covenant icon */
function customCovenantIcon(revoke) {
    return [(revoke ? 1 : 0), 0, icons];
}


/** Runs modification initialization stuff, like registering tooltips */
function initializeMods(time) {
    Game.attachTooltip( l('shimmerData'), shimmerTooltip, 'this' );
    Game.attachTooltip( l('upgradeCalc'), upgradeCalcTooltip, 'this' );

    reloadShimmerData(false);
    reloadUpgradeCalc(false);

    //? todo do i still need this
    //AddEvent(l('loadMods'), 'click', onLoadMods);

    console.log(
        format('Initialized modifications in ${} seconds!', (Date.now() - time) / 1000 )
    );
}


/** Creates the shimmer data tooltip */
function shimmerTooltip() {
    let tooltip = '&bull; This lets you see some interesting shimmer data; but note that the values shown may not be 100% accurate, so take them with a pinch of sugar. (A shimmer is a golden cookie or a reindeer)<br><br>';

    const isWrath = { wrath: ((Game?.elderWrath || 0) > 0) }
    const gMn = Game.shimmerTypes.golden.getMinTime(isWrath);
    const gMx = Game.shimmerTypes.golden.getMaxTime(isWrath);
    const rMn = Game.shimmerTypes.reindeer.getMinTime(isWrath);
    const rMx = Game.shimmerTypes.reindeer.getMaxTime(isWrath);
    const gcUpgrades = listTinyUpgrades(true, 'Lucky day', 'Serendipity', 'Golden goose egg', 'Heavenly luck');
    const rdUpgrades = listTinyUpgrades(true, 'Starsnow', 'Reindeer baking grounds');

    if( Game.goldenClicks > 0 ) {
        if( Game.Has('Golden switch [off]') )
            tooltip = '<span style="font-size:13px;'+red+'">Golden switch is on: golden cookies won\'t appear.</span><br><br>' + tooltip;

		if(gcUpgrades != '')
			tooltip += '<span style="font-size:11px;">Shortened by these ( ' + gcUpgrades + ' ) upgrades</span><br>';

        tooltip += (
			format('${} : <b>min. ${}s</b>, <b>max. ${}s</b> (<b>avg. ${}s</b>)',
                getUpgradeIcon('Gold hoard'),
				Math.floor(gMn / 30),
				Math.floor(gMx / 30),
				Math.floor((gMn / 30 + gMx / 30) / 2)
			).concat(Game.HasAchiev('Oh deer') ? '<br><br>' : '')
		);
    }
    if( Game.HasAchiev('Oh deer') ) {
        if(rdUpgrades != '')
			tooltip += '<span style="font-size:11px;">Shortened by these ( ' + rdUpgrades + ' ) upgrades</span><br>';

        tooltip += format('${} : <b>min. ${}s</b>, <b>max. ${}s</b> (<b>avg. ${}s</b>)',
            getUpgradeIcon('Reindeer baking grounds'),
            Math.floor(rMn / 30),
            Math.floor(rMx / 30),
            Math.floor((rMn / 30 + rMx / 30) / 2)
		);
    }

    return '<div style="padding:3px;width:250px;text-align:center;font-size:12.5px;">' + tooltip + '<br></div>';
};

/** Updates the tooltip for the shimmer data top bar button */
function reloadShimmerData(draw) {
    if(draw)
		Game.tooltip.draw( l('shimmerData'), shimmerTooltip(), 'this' );
};

/** Creates the upgrade calculator tooltip */
function upgradeCalcTooltip() {
    const oldChips = Game.heavenlyChips; // chips from last ascension
    const newChips = (parseInt( Game.ascendNumber.textContent.replace(/^\+|,/g, '') ) || 0); // new chips recieved after ascending
    const chips = oldChips + newChips; // total chips after ascending

    let listedUpgrades = '';
    let newLines = true;
    let total = 0;
    let owned = [], afford = []; // purchased, too much


    Game.PrestigeUpgrades.forEach((u) => {
        switch( u.bought ? '0' : (u.getPrice() <= chips ? '1' : '') ) {
            case '0':
                owned.push(u);
                break;
            case '1':
                afford.push(u);
                break;

            default:
                break;
        }
    });

    newLines = (afford.length <= 30);

    afford
        .sort( (u1, u2) => (u1.name < u2.name ? -1 : (u1.name > u2.name ? 1 : 0)) ) // by name,
        .sort( (u1, u2) => (u1.getPrice() < u2.getPrice() ? -1 : (u1.getPrice() > u2.getPrice() ? 1 : 0)) ) // then by price.
        .forEach( (u, i, arr) => {
            total += u.getPrice();

            listedUpgrades += format(
                '${} <b>${}</b> (<span style="'+lime+'">${}</span> chips)${}',

                getUpgradeIcon(u.name),
                u.name,
                Beautify(u.getPrice()),
                (newLines || i%4 == 0) ? '<br>'+((!newLines && i%4 == 0) ? '<br>' : '') : ',  '
            );

            if(i == afford.length - 1)
                listedUpgrades += '<br><span style="font-size:14px;"><b>=</b> <span style="' + (chips >= total ? lime : red) + '">' + Beautify(total) + '</span> chips</span>' + (total > chips ? '<br><span style="font-size:12px;">(missing <b>' + Beautify(total - chips) + '</b> chips)</span>' : '');
        })
    ;

    return format(
        '<div style="padding:3px;width:max-content;text-align:center;font-size:11px;"><span style="font-size:14px;"><b>Hello there!</b></span><span style="font-size:12.5px;">${}<br>If you ascended now, you would have <b>${}</b> ${} ${} to spend!</span><br><br>${}<br></div>',

        Game.HasAchiev('Rebirth') ? ' These are some heavenly upgrades you could purchase after ascending!' : '',
        Beautify(chips),
        getUpgradeIcon('Heavenly chip secret'), chips > 1 ? 's' : '',
        Game.HasAchiev('Rebirth') ? listedUpgrades : ''
    );
};

/** Redraws the tooltip for the upgrade calculator top bar button */
function reloadUpgradeCalc(draw) {
    if(draw)
        Game.tooltip.draw(l('upgradeCalc'), upgradeCalcTooltip(), 'this');
};

/** Loads the popup menu that accepts links to then load as mods */
function onLoadMods() {
    const id = 'loadModsInput';
    const buttons = [
        ['Load mods', 'for(let l of l('+id+').value.split("|")){if(l.length>0){Game.LoadMod(l);}};Game.ClosePrompt();'], //todo: make the little notification saying "successfully added mod!" or sm
        'Cancel'
    ]
    // buttons[0][1] expanded:
    // Loads each mod link contained in links, separated by the pipe character '|'
    /*for(const link of str.split('|'))
        if(link.length > 0)
            Game.LoadMod(link);*/

    PlaySound('snd/tick.mp3');
    //used to start with <id NameBakery>
    Game.Prompt(format('<h3>${}</h3><div class="block" style="text-align:center;">${}</div><div class="block"><input type="text" style="text-align:left;width:100%;" id="${}" value=""/></div>', 'Load mods', 'Type the mod links you\'d like to load here. If you want to load more than one, separate them with | and no spaces.', id), buttons);
	l(id).focus();
	l(id).select();
};

/** Returns an HTML string that represents a button that allows loading mods directly into Cookie Clicker */
function makeLoadModsButton() {
    return div('listing', format('<a class="option smallFancyButton" ${}="${};PlaySound(\'snd/tick.mp3\');">${}</a><label>(${})</label>', Game.clickStr, 'onLoadMods()', 'Load mod link(s)', 'directly input mod links to load them into Cookie Clicker'));
};