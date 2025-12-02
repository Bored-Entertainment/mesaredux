	// Background Color Changer Function
	function changecolor(el) {
		document.body.style.backgroundColor = el.value;
	}
	
      const CHANGE_ASPECT_RATIO = true;
		// Main Page Elements
      var bodyElement = document.getElementsByTagName("body")[0];
      var statusElement = document.getElementById("status");
      var progressElement = document.getElementById("progress");
      var spinnerElement = document.getElementById("spinner");
      var canvasElement = document.getElementById("canvas");
      var outputElement = document.getElementById("output");
      var outputContainerElement = document.getElementById("output-container");
      var qrElement = document.getElementById("QRCode");
      var qr2Element = document.getElementById("QR2Code");
      var qrButton = document.getElementById("QRButton");
      var qr2Button = document.getElementById("QR2Button");
      var pauseMenu = document.getElementById("pauseMenuContainer");
      var resumeButton = document.getElementById("resumeButton");
      var quitButton = document.getElementById("quitButton");

      const messageContainerElement = document.getElementById("message-container");
      const messagesElement = document.getElementById("messages");
      let rollbackMessages = [];
	  
	  // BAD STUFF IN CONSOLE | DO NOT DISPLAY!!!
	  const CONSOLE_layer_set_visible = "layer_set_visible() - could not find specified layer in current room";
	  const CONSOLE_layer_tilemap_get_id = "layer_tilemap_get_id() - specified tilemap not found";
	  const CONSOLE_layer_depth = "layer_depth() - can't find specified layer";
	  const CONSOLE_draw_tilemap = "draw_tilemap() - couldn't find specified tilemap";
	  const CONSOLE_layer_get_all_elements = "layer_get_all_elements() - can't find specified layer"; // biggest pain in the ass
	  // crack
	  console.log("*************************");
	  console.log("BetterRunner v1.2");
	  console.log("_____by burnedpopcorn180");
	  console.log("*************************");

      let clearRollbackMessagesTimeoutId = -1;
      const showRollbackMessage = function (message) {
        let messages = "";
        rollbackMessages.push(message);
        rollbackMessages.forEach(m => messages += "<p>" + m + "</p>");

        messagesElement.innerHTML = messages;
        messageContainerElement.style.display = 'block';

        if (clearRollbackMessagesTimeoutId === -1) {
          clearTimeout(clearRollbackMessagesTimeoutId);
        }
        clearRollbackMessagesTimeoutId = setTimeout(clearRollbackMessages, 5000);
      };

      const clearRollbackMessages = function () {
        clearRollbackMessagesTimeoutId = -1;
        rollbackMessages = [];
        messageContainerElement.style.display = 'none';
      };
		
	  // for displaying contents of console to display as a single line of text
	  // stopload is set to 0, as to initialize it
	  var loadprogress = 0;
		
      var startingHeight, startingWidth;
      var startingAspect;
      var Module = {
        preRun: [],
        postRun: [],
        print: (function () {
          var element = document.getElementById("output");
          if (element) element.value = ""; // clear browser cache
          return function (text) {
		  
		  // for displaying contents of console to display as a single line of text
		  // if loading has started
			if (text === "Starting WAD") {
			// tells if statement below to display ALL loading strings
				loadprogress += 1;
			}
	  
			// if loading has started
			if (loadprogress === 1) {
			// allow console to be displayed as text on-screen
				Module.setStatus(text);
			}
			// if game has started
			// greater than or equal to just in case
			else if (loadprogress >= 2) {
			// then set load text to nothing
				Module.setStatus("");
			}
		    // back to normal shit
			
            if (arguments.length > 1)
              text = Array.prototype.slice.call(arguments).join(" ");
			// for normal console
			if (text != CONSOLE_layer_set_visible && text != CONSOLE_layer_tilemap_get_id && text != CONSOLE_layer_depth && text != CONSOLE_draw_tilemap && text != CONSOLE_layer_get_all_elements)
				{console.log(text);}
            if (text === "Entering main loop.") {
              // It seems that this text ensures game is loaded.
              ensureAspectRatio();
			  // below are custom
			  // stops loading text on game run
			  loadprogress += 1;

			  // TRUE END of custom shit
            }
            if (element) {
				// check if bad strings are there, and if not, display text to console box
				if (text != CONSOLE_layer_set_visible && text != CONSOLE_layer_tilemap_get_id && text != CONSOLE_layer_depth && text != CONSOLE_draw_tilemap && text != CONSOLE_layer_get_all_elements)
					{element.value += text + "\n";}
				element.scrollTop = element.scrollHeight; // focus on bottom
            }
          };
        })(),
        printErr: function (text) {
          if (arguments.length > 1)
            text = Array.prototype.slice.call(arguments).join(" ");
          console.error(text);
        },
        canvas: (function () {
          var canvas = document.getElementById("canvas");

          return canvas;
        })(),
        setStatus: function (text) {
          if (!Module.setStatus.last)
            Module.setStatus.last = { time: Date.now(), text: "" };
          if (text === Module.setStatus.last.text) return;
          var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
          var now = Date.now();
          if (m && now - Module.setStatus.last.time < 30) return; // if this is a progress update, skip it if too soon
          Module.setStatus.last.time = now;
          Module.setStatus.last.text = text;
          if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2]) * 100;
            progressElement.max = parseInt(m[4]) * 100;
            progressElement.hidden = false;
            spinnerElement.hidden = false;
          } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;

            // If there are no status text, we are finished and can display
            // the canvas and hide the spinner
            if (!text) {
              spinnerElement.style.display = "none";
              canvasElement.style.display = "block";
            }
          }
          statusElement.innerHTML = text;
        },
        totalDependencies: 0,
        monitorRunDependencies: function (left) {
          this.totalDependencies = Math.max(this.totalDependencies, left);
          Module.setStatus(
            left
              ? "Preparing... (" +
                  (this.totalDependencies - left) +
                  "/" +
                  this.totalDependencies +
                  ")"
              : "All downloads complete."
          );
        },
      };
      Module.setStatus("Downloading...");
      window.onerror = function (event) {
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        Module.setStatus("Exception thrown, see JavaScript console");
        spinnerElement.style.display = "none";
        Module.setStatus = function (text) {
          if (text) Module.printErr("[post-exception status] " + text);
        };
      };

      // Route URL GET parameters to argc+argv
      if (typeof window === "object") {
        Module['arguments'] = window.location.search.substr(1).trim().split('&');
        // If no args were passed arguments = [''], in which case kill the single empty string.
        if (!Module['arguments'][0]) {
          Module['arguments'] = [];
        }
      }
	  
	  // All Button Functions
	  
		// Stock Toggle Console Function
      function toggleConsole() {
        var isShown = outputElement.style.display === "flex";
        if (isShown) {
          outputElement.style.display = "none";
          outputElement.scrollIntoView(false);
        } else {
          outputElement.style.display = "flex";
          outputElement.scrollIntoView(true);
        }
      }
		// Go To Github Function
      function togglegithub() {
	    window.open("https://github.com/burnedpopcorn/Pizza-Tower-1.1.0-Web-Port", '_blank').focus();
      }
		// Clear Site Cache Function
      function toggleclear_site_cache() {
	  // Trigger Choice Popup
		if (confirm("This Will Clear Site Cache\nThis will ALSO Clear ALL SAVES\nONLY do this if the Site has recently been Updated\nand if you are experiencing crashes relating to texture loading\nContinue?")) {
		// User clicked OK
		
		// Clear All IndexedDB Databases
		(async () => {
			const dbs = await window.indexedDB.databases();
			dbs.forEach(db => { window.indexedDB.deleteDatabase(db.name) });
			})();
			
		// 
		alert("All Site Cache Has been Cleared!\nPlease reload the Page");
		} else {
		// User clicked Cancel
		// Do nothing
		}
	  }

		// Enable FPS Counter Button
	  var stopfps = 0;
      function toggleFPS() {
	  // to stop it from making multiple instances after 1 has already been made
	  stopfps += 1
	  // if pressed ONLY once
	  if (stopfps === 1) {
	    window.location.href = "javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()"
        }
		// so it can't go crazy high, but can't be activated again
		if (stopfps >= 5) {
		stopfps = 2;
		}
	  }
	    // Go To Website of Web Ports Function
	  function togglewebports() {
		window.open("https://burnedwebsite.vercel.app/projects/", '_blank').focus();
	  }
	    // Join Discord Function
	  function togglejoin_discord() {
	    window.open("https://discord.gg/3dPTpruHhc", '_blank').focus();
	  }
		// End of Button Functions

      var g_pWadLoadCallback = undefined;
      function setWadLoadCallback( _wadLoadCallback ) 
      {
        g_pWadLoadCallback = _wadLoadCallback;
      }

      var g_pAddAsyncMethod = -1;

      function setAddAsyncMethod( asyncMethod )
      {
        g_pAddAsyncMethod = asyncMethod;
      }

      var g_pJSExceptionHandler = undefined;

      function setJSExceptionHandler( exceptionHandler )
      {
        if (typeof exceptionHandler == "function") {
            g_pJSExceptionHandler = exceptionHandler;
        } // end if
      } // end setJSExceptionHandler

      function hasJSExceptionHandler()
      {
        return (g_pJSExceptionHandler != undefined) && (typeof g_pJSExceptionHandler == "function");
      } // end hasJSExceptionHandler

      function doJSExceptionHandler( exceptionJSON )
      {
        if (typeof g_pJSExceptionHandler == "function") {
          var exception = JSON.parse( exceptionJSON );
          g_pJSExceptionHandler( exception );
        } // end if
      } // end doJSExceptionHandler

		// Get Files
    function manifestFiles()
    {
      return [ "runner.data",
"runner.js",
"runner.wasm",
"audio-worklet.js",
"game.unx" ].join( ";");
    }

  // Verify Files
    function manifestFilesMD5()
    {
      return [ "18eac5a3371bd7267fdeaa69e5751844",
"7692d9a00a76685f9f4d65e0f0f66664",
"07871e9afd7eb36b3cee2526cdf3d8bb",
"e8f1e8db8cf996f8715a6f2164c2e44e",
"6b4be8f9a571121f7554acbb58b9410a" ];
    }

      function onFirstFrameRendered()
      {
          //console.log("First frame rendered!");
      }

      function onGameSetWindowSize(width,height)
      {
          if (startingHeight === undefined && startingWidth === undefined) {
              console.log("Initial window size set to width: " + width + ", height: " + height);

              startingHeight = height;
              startingWidth = width;
              startingAspect = startingWidth / startingHeight;
          }
      }

	// Trigger Ads
    function triggerAd(adId, _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone) {
       // need to take a copy of the RValues represented
       var pRValueCopy = triggerAdPrefix( _callback_beforeAd, _callback_afterAd, _callback_adDismissed, _callback_adViewed, _callback_adbreakDone );
       var pCallbackBeforeAd = pRValueCopy + (0*16);
       var pCallbackAfterAd = pRValueCopy + (1*16);
       var pCallbackAdDismissed = pRValueCopy + (2*16);
       var pCallbackAdViewed = pRValueCopy + (3*16);
       var pCallbackAdBreakDone = pRValueCopy + (4*16);

       adBreak({
         "type": "reward",                    // The type of this placement
         "name": adId,                        // A descriptive name for this placement

         "beforeAd": () => {                  // Prepare for the ad. Mute and pause the game flow
           console.log("beforeAd");
           // trigger _callback_beforeAd to game
           doGMLCallback( pCallbackBeforeAd, { id:adId } );
         },
         "afterAd" : () => {                   // Resume the game and re-enable sound
           console.log("afterAd");
           // trigger _callback_afterAd to game
           doGMLCallback( pCallbackAfterAd, { id:adId } );
         },
         "beforeReward": (showAdFn) => {      // Show reward prompt (call showAdFn() if clicked)
           console.log("beforeReward");
           showAdFn();
           // Setup native prompt to indicate ad will load
           // Will not be setup by dev so this UX controlled by GXC
         },
         "adDismissed": () => {               // Player dismissed the ad before it finished
           console.log("adDismissed");
           // trigger _callback_adDismissed to game
           doGMLCallback( pCallbackAdDismissed, { id:adId } );
         },
         "adViewed": () => {                  // Player watched the ad–give them the reward.
           console.log("adViewed");
           // trigger _callback_adViewed to game
           doGMLCallback( pCallbackAdViewed, { id:adId } );
         },
         "adBreakDone": (placementInfo) => {  // Always called (if provided) even if an ad didn't show
           console.log("adBreakDone");
           // trigger _callback_adBreakDone to game
           doGMLCallback( pCallbackAdBreakDone, { id:adId } );
           triggerAdPostfix( pRValueCopy );
         }, 
       });
      }

      function ensureAspectRatio() {
        if (canvasElement === undefined) {
          return;
        }

        if (!CHANGE_ASPECT_RATIO) {
          return;
        }
        
        if (startingHeight === undefined && startingWidth === undefined) {
          return;
        }

        canvasElement.classList.add("active");

        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        var newHeight, newWidth;

        // Find the limiting dimension.
        var heightQuotient = startingHeight / maxHeight;
        var widthQuotient = startingWidth / maxWidth;

        if (heightQuotient > widthQuotient) {
          // Max out on height.
          newHeight = maxHeight;
          newWidth = newHeight * startingAspect;
        } else {
          // Max out on width.
          newWidth = maxWidth;
          newHeight = newWidth / startingAspect;
        }

        canvasElement.style.height = newHeight + "px";
        canvasElement.style.width = newWidth + "px";
      }
		// To Pause when it detects the Tab is inactive
      function pause() { // Don't change the name - GX Mobile calls it when the app becomes inactive.
        if (!canvasElement.classList.contains("active")) { // Wait for the canvas to load.
          return
        }
        
        GM_pause();
        pauseMenu.hidden = false;
        canvasElement.classList.add("paused");
      }
		// To Resume when it detects the Tab is Active
      function resume() {
        GM_unpause();
        pauseMenu.hidden = true;
        canvasElement.classList.remove("paused");
        canvasElement.classList.add("unpaused");
        enterFullscreenIfSupported();
        lockOrientationIfSupported();
      }

      function quitIfSupported() {
        if (window.oprt && window.oprt.closeTab) { /* GX Mobile API */
          window.oprt.closeTab();
        } else if (window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage) {
          window.chrome.runtime.sendMessage('mpojjmidmnpcpopbebmecmjdkdbgdeke', { command: 'closeTab' })
        }
      }

      function enterFullscreenIfSupported() {
        if (!window.oprt || !window.oprt.enterFullscreen) { /* GX Mobile API */
          return;
        }

        window.oprt.enterFullscreen();
        let viewStatus = GM_get_view_status();
        viewStatus.fullscreen = true;
        GM_set_view_status(viewStatus);
      }

      function lockOrientationIfSupported() {
        if (!window.oprt || !window.oprt.lockPortraitOrientation || !window.oprt.lockLandscapeOrientation) { /* GX Mobile API */
          return;
        }

        let viewStatus = GM_get_view_status();
        if (viewStatus.landscape === true && viewStatus.portrait === false) {
          window.oprt.lockPortraitOrientation();
        } else if (viewStatus.landscape === false && viewStatus.portrait === true) {
          window.oprt.lockPortraitOrientation();
        }
      }
		// uh, shit that no one cares about
      const resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(ensureAspectRatio);
        setTimeout(() => window.requestAnimationFrame(ensureAspectRatio), 100);
      });
      resizeObserver.observe(document.body);
		
		// Disable Scrolling on Mobile
      if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        bodyElement.className = "scrollingDisabled";
        canvasElement.classList.add("animatedSizeTransitions");
        outputContainerElement.hidden = true;
      }

      document.addEventListener("visibilitychange", (event) => {
        if (document.visibilityState != "visible") {
          pause();
        }
      });

      window.addEventListener("load", (event) => {
        if ((!window.oprt || !window.oprt.enterFullscreen) && (!window.chrome || !window.chrome.runtime || !window.chrome.runtime.sendMessage)) {
          quitButton.hidden = true;
        }
      });

      setWadLoadCallback(() => {
        enterFullscreenIfSupported();
        lockOrientationIfSupported();
      });