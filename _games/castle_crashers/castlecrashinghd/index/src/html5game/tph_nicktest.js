var gameWidth = 1920;
var gameHeight = 1080;
var gameAspect = gameWidth / gameHeight;
var coordScale = 1.0;
var coordTx = 0.0;
var coordTy = 0.0;
var coordFlip = false;

var curLocs = [];
var ngio;
var medals;
var hostString = "" + window.location.hostname + "";

var medalLookup = ["","Close Shave","The Fast and the Furriest","Sorbet","Razor's Edge","Hairless","Amaranth","Shear Dedication","Whiskered Away","Hairbrained"];

function greet() {
	alert("hello world manzzz! Is mobile?: " + mobileCheck());
}

function mobileCheck() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check.toString();
}

function doLink(nam) {
	if (!!nam) {
		switch (nam) {
			case "nick":
			if (!!ngio) {
				ngio.callComponent('Loader.loadReferral', {host: hostString, referral_name: 'pestoLink', redirect: true});
			} else {
				window.open("http://pestoforce.com");
			}

			break;
			case "luis":
			if (!!ngio) {
				ngio.callComponent('Loader.loadReferral', {host: hostString, referral_name: 'luisLink', redirect: true});
			} else {
				window.open("https://luis.newgrounds.com/games");
			}
			break;
			case "asha":
			if (!!ngio) {
				ngio.callComponent('Loader.loadReferral', {host: hostString, referral_name: 'ashaLink', redirect: true});
			} else {
				window.open("https://twitter.com/pyragmus");
			}
			break;
			case "tom":
			if (!!ngio) {
				ngio.callComponent('Loader.loadNewgrounds', {host: hostString, redirect: true});
			} else {
				window.open("https://www.newgrounds.com");
			}
			break;
			case "behemoth":
			if (!!ngio) {
				ngio.callComponent('Loader.loadReferral', {host: hostString, referral_name: 'behemothLink', redirect: true});
			} else {
				window.open("https://www.thebehemoth.com/");
			}
			break;
			case "monica":
			if (!!ngio) {
				ngio.callComponent('Loader.loadReferral', {host: hostString, referral_name: 'monicaLink', redirect: true});
			} else {
				window.open("https://twitter.com/L0Litsmonica");
			}
			break;
		}
	}
}

function clearStorage() {
	if (confirm("Are you sure you want to clear all local data? All achievements will be lost!")) {
		localStorage.clear();
		return 1;
	}

	return 0;
}

function jsUnlockMedal(num) {
	if (!!num) {
		// console.log("setting localStorage for medal: ", num);
		localStorage["medal" + num] = 1;

		unlockMedal(medalLookup[num]);
	}
}

function resendMedalsToNG() {
	if (!medalLookup || !medalLookup.length || !ngio || !ngio.callComponent) {
		console.log("no ngio so returning!");
		return;
	}

	try {
		for (let i=1; i<medalLookup.length;i++) {
			if (isMedalUnlocked(i)) {
				console.log("forcing earned medal unlock on NG: " + medalLookup[i]);
				unlockMedal(medalLookup[i]);
			}
		}
	} catch(e) {
		console.log("error:", e);
	}

}

function isMedalUnlocked(num) {
	if (!!num) {
		// console.log("value of local storage medal is: ", localStorage["medal" + num]);
		if (localStorage["medal" + num] == 1) {
			// console.log("it's unlocked!");
			return true;
		}

		// console.log("it's NOT unlocked...");
	}

	return false;
}

function toggleFull() {
	var options = { navigationUI: "hide" };
	var el = document.getElementById("canvas");

	if(el) {
		if (el.requestFullscreen) {
			el.requestFullscreen(options);
		} else if (el.webkitRequestFullscreen) {
			el.webkitRequestFullscreen(options);
		} else if (el.webkitRequestFullScreen) {
			el.webkitRequestFullScreen(options);
		} else if(el.mozRequestFullScreen) {
			el.mozRequestFullScreen(options);
		}
	}
}

function init() {
	initViewportOverride();

	var el = document.getElementById("canvas");
	el.addEventListener("touchstart", updateCoords, false);
	el.addEventListener("touchmove", updateCoords, false);
	el.addEventListener("touchend", updateCoords, false);
	el.addEventListener("touchcancel", updateCoords, false);
	el.addEventListener("click", updateMCoords, false);

	var val = mobileCheck();
	el.addEventListener("click", toggleFull);
	el.addEventListener("touchend", toggleFull);

	// console.log("begin ngio attempt...");
	var app_id = "51565:6SeuOyqg";
	var encrypt_key = "22Wat/qHSulH7mtb6k8dYA==";

	// create our ngio instance and put it in debug mode
	ngio = new Newgrounds.io.core(app_id, encrypt_key);

	ngio.queueComponent("Medal.getList", {}, onMedalsLoaded);
	ngio.executeQueue();
	// console.log("ngio is:", ngio);
}

function unlockMedal(medal_name) {
	if (!ngio) {
		return;
	}
	// console.log("in newgrounds unlockMedal for medal: " + medal_name);
	// console.log("ngio user is: " + ngio.user);
	// console.log("NG medals length is: " + medals.length);
    /* If there is no user attached to our ngio object, it means the user isn't logged in and we can't unlock anything */
    // if (!ngio.user) return;

    var medal;

    for (var i = 0; i < medals.length; i++) {
        medal = medals[i];
		// console.log("in newgrounds unlockMedal checking ng medal: " + medal.name + " against provided name of: " + medal_name);

        /* look for a matching medal name */
        if (medal.name == medal_name) {

            /* we can skip unlocking a medal that's already been earned */
            if (!medal.unlocked) {

                /* unlock the medal from the server */
                ngio.callComponent('Medal.unlock', {id:medal.id}, function(result) {

                    if (result.success) onMedalUnlocked(result.medal);

                });
            }

            return;
        }
    }
}

function onMedalUnlocked(medal) {
	console.log("Newgrounds unlocked medal:", medal);
}

function onMedalsLoaded(result) {
    if (result.success) medals = result.medals;
	// console.log("ON MEDALS LOADED!", result.medals);
}

function updateCoords(evt) {
	curLocs = [];
	for(var i=0; i< evt.touches.length; i++) {
		curLocs.push([evt.touches.item(i).pageX, evt.touches.item(i).pageY].join(":"));
	}
}

function updateMCoords(evt) {
	curLocs = [];
	curLocs.push([evt.clientX, evt.clientY]).join(":");
}

function getRawX() {
	if (curLocs.length == 0) {
		curLocs = ["0:0"];
	}

	return curLocs.toString();
}

function initViewportOverride() {
	var canvas = document.getElementById('canvas');
	canvas.classList.add("pixelated");

	canvas.width = gameWidth;
	canvas.height = gameHeight;
	
	var gmCanvasWidth = 0;
	var gmCanvasHeight = 0;
	var sheet = document.styleSheets[0];
	var rules = sheet.cssRules;

	function updateCanvasDims() {
		canvas.style.width = `${gmCanvasWidth}px`;
		canvas.style.height = `${gmCanvasHeight}px`;
	}
	Object.defineProperty(canvas, "width", {
		get: function() { return gmCanvasWidth; },
		set: function(_n) { gmCanvasWidth = _n;  }
	});
	Object.defineProperty(canvas, "height", {
		get: function() { return gmCanvasHeight; },
		set: function(_n) { gmCanvasHeight = _n; updateCanvasDims(); }
	});
	updateCanvasDims();

	if( window.WebGLRenderingContext )
	{
		var wgl1viewport = window.WebGLRenderingContext.prototype.viewport;
		window.WebGLRenderingContext.prototype.viewport = function(x, y, width, height) {
			return wgl1viewport.call(this, 0, 0, this.drawingBufferWidth, this.drawingBufferHeight);
		}
	}

	if( window.WebGL2RenderingContext )
	{
		var wgl2viewport = window.WebGL2RenderingContext.prototype.viewport;
		window.WebGL2RenderingContext.prototype.viewport = function(x, y, width, height) {
			return wgl2viewport.call(this, 0, 0, this.drawingBufferWidth, this.drawingBufferHeight);
		}
	}
	console.log("Initialized");
}

