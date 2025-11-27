
  Module['expectedDataFileDownloads'] ??= 0;
  Module['expectedDataFileDownloads']++;
  (() => {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    var isPthread = typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD;
    var isWasmWorker = typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER;
    if (isPthread || isWasmWorker) return;
    var isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
    function loadPackage(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'bin.data._.js';
      var REMOTE_PACKAGE_BASE = 'bin.data._.js';
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        if (isNode) {
          require('fs').readFile(packageName, (err, contents) => {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }
        Module['dataFileDownloads'] ??= {};
        fetch(packageName)
          .catch((cause) => Promise.reject(new Error(`Network Error: ${packageName}`, {cause}))) // If fetch fails, rewrite the error to include the failing URL & the cause.
          .then((response) => {
            if (!response.ok) {
              return Promise.reject(new Error(`${response.status}: ${response.url}`));
            }

            if (!response.body && response.arrayBuffer) { // If we're using the polyfill, readers won't be available...
              return response.arrayBuffer().then(callback);
            }

            const reader = response.body.getReader();
            const iterate = () => reader.read().then(handleChunk).catch((cause) => {
              return Promise.reject(new Error(`Unexpected error while handling : ${response.url} ${cause}`, {cause}));
            });

            const chunks = [];
            const headers = response.headers;
            const total = Number(headers.get('Content-Length') ?? packageSize);
            let loaded = 0;

            const handleChunk = ({done, value}) => {
              if (!done) {
                chunks.push(value);
                loaded += value.length;
                Module['dataFileDownloads'][packageName] = {loaded, total};

                let totalLoaded = 0;
                let totalSize = 0;

                for (const download of Object.values(Module['dataFileDownloads'])) {
                  totalLoaded += download.loaded;
                  totalSize += download.total;
                }

                Module['setStatus']?.(`Downloading data... (${totalLoaded}/${totalSize})`);
                return iterate();
              } else {
                const packageData = new Uint8Array(chunks.map((c) => c.length).reduce((a, b) => a + b, 0));
                let offset = 0;
                for (const chunk of chunks) {
                  packageData.set(chunk, offset);
                  offset += chunk.length;
                }
                callback(packageData.buffer);
              }
            };

            Module['setStatus']?.('Downloading data...');
            return iterate();
          });
      };

      function handleError(error) {
        console.error('package error:', error);
      };

      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, (data) => {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);

    function runWithFS(Module) {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "ai", true, true);
Module['FS_createPath']("/", "baseset", true, true);
Module['FS_createPath']("/baseset", "openmsx-0.3.1", true, true);
Module['FS_createPath']("/baseset", "opensfx-1.0.1", true, true);
Module['FS_createPath']("/", "content_download", true, true);
Module['FS_createPath']("/content_download", "ai", true, true);
Module['FS_createPath']("/content_download/ai", "library", true, true);
Module['FS_createPath']("/", "game", true, true);
Module['FS_createPath']("/", "lang", true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency'](`fp ${this.name}`);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
          // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true);
          Module['removeRunDependency'](`fp ${that.name}`);
          this.requests[this.name] = null;
        }
      };

      var files = metadata['files'];
      for (var i = 0; i < files.length; ++i) {
        new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio'] || 0).open('GET', files[i]['filename']);
      }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }          Module['removeRunDependency']('datafile_bin.data._.js');

      };
      Module['addRunDependency']('datafile_bin.data._.js');

      Module['preloadResults'] ??= {};

      Module['preloadResults'][PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }

    }
    if (Module['calledRun']) {
      runWithFS(Module);
    } else {
      (Module['preRun'] ??= []).push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/Ubuntu-Regular.ttf", "start": 0, "end": 298928}, {"filename": "/UbuntuMono-Regular.ttf", "start": 298928, "end": 487932}, {"filename": "/ai/CMakeLists.txt", "start": 487932, "end": 489496}, {"filename": "/ai/compat_0.7.nut", "start": 489496, "end": 502026}, {"filename": "/ai/compat_1.0.nut", "start": 502026, "end": 507809}, {"filename": "/ai/compat_1.1.nut", "start": 507809, "end": 511688}, {"filename": "/ai/compat_1.10.nut", "start": 511688, "end": 512633}, {"filename": "/ai/compat_1.11.nut", "start": 512633, "end": 513578}, {"filename": "/ai/compat_1.2.nut", "start": 513578, "end": 514922}, {"filename": "/ai/compat_1.3.nut", "start": 514922, "end": 516266}, {"filename": "/ai/compat_1.4.nut", "start": 516266, "end": 517610}, {"filename": "/ai/compat_1.5.nut", "start": 517610, "end": 518954}, {"filename": "/ai/compat_1.6.nut", "start": 518954, "end": 520298}, {"filename": "/ai/compat_1.7.nut", "start": 520298, "end": 521642}, {"filename": "/ai/compat_1.8.nut", "start": 521642, "end": 522986}, {"filename": "/ai/compat_1.9.nut", "start": 522986, "end": 523930}, {"filename": "/ai/compat_12.nut", "start": 523930, "end": 524873}, {"filename": "/ai/compat_13.nut", "start": 524873, "end": 525502}, {"filename": "/ai/compat_14.nut", "start": 525502, "end": 526083}, {"filename": "/baseset/opengfx-7.1.tar", "start": 526083, "end": 5861123}, {"filename": "/baseset/openmsx-0.3.1/changelog.txt", "start": 5861123, "end": 5864350}, {"filename": "/baseset/openmsx-0.3.1/openmsx.obm", "start": 5864350, "end": 5875970}, {"filename": "/baseset/openmsx-0.3.1/readme.txt", "start": 5875970, "end": 5884515}, {"filename": "/baseset/opensfx-1.0.1/changelog.txt", "start": 5884515, "end": 5886066}, {"filename": "/baseset/opensfx-1.0.1/license.txt", "start": 5886066, "end": 5941929}, {"filename": "/baseset/opensfx-1.0.1/opensfx.cat", "start": 5941929, "end": 19138369}, {"filename": "/baseset/opensfx-1.0.1/opensfx.obs", "start": 19138369, "end": 19144762}, {"filename": "/baseset/opensfx-1.0.1/readme.txt", "start": 19144762, "end": 19161165}, {"filename": "/baseset/opntitle.dat", "start": 19161165, "end": 19299875}, {"filename": "/content_download/ai/41444d4c-AdmiralAI-25.tar", "start": 19299875, "end": 19699235}, {"filename": "/content_download/ai/41494149-AIAI-kappa97.tar", "start": 19699235, "end": 20057635}, {"filename": "/content_download/ai/43484f4f-ChooChoo-429.tar", "start": 20057635, "end": 20282915}, {"filename": "/content_download/ai/44435452-DictatorAI-183.tar", "start": 20282915, "end": 20979235}, {"filename": "/content_download/ai/46505450-FastPTPAI-4.tar", "start": 20979235, "end": 21040675}, {"filename": "/content_download/ai/4d4f4755-MogulAI-5900.tar", "start": 21040675, "end": 21163555}, {"filename": "/content_download/ai/4e434142-NoCAB-2.1.4.tar", "start": 21163555, "end": 21624355}, {"filename": "/content_download/ai/524f4e44-Rondje_om_de_kerk-411.tar", "start": 21624355, "end": 21808675}, {"filename": "/content_download/ai/5252554e-RoadRunner-12.tar", "start": 21808675, "end": 22289955}, {"filename": "/content_download/ai/534d504c-SimpleAI-14.tar", "start": 22289955, "end": 22515235}, {"filename": "/content_download/ai/54524143-TracAI-1.0.tar", "start": 22515235, "end": 22842915}, {"filename": "/content_download/ai/54524149-trAIns-2.1.tar", "start": 22842915, "end": 23262755}, {"filename": "/content_download/ai/library/43454e47-cEngineLib-9.tar", "start": 23262755, "end": 23375395}, {"filename": "/content_download/ai/library/434c414c-AILibList-3.tar", "start": 23375395, "end": 23416355}, {"filename": "/content_download/ai/library/434c4346-AILibCommon-2.tar", "start": 23416355, "end": 23447075}, {"filename": "/content_download/ai/library/4752412a-Graph.AyStar-4.tar", "start": 23447075, "end": 23488035}, {"filename": "/content_download/ai/library/4752412a-Graph.AyStar-6.tar", "start": 23488035, "end": 23518755}, {"filename": "/content_download/ai/library/4c4d6d57-MinchinWeb_s_MetaLibrary-9.tar", "start": 23518755, "end": 23774755}, {"filename": "/content_download/ai/library/5046524c-Pathfinder.Rail-1.tar", "start": 23774755, "end": 23815715}, {"filename": "/content_download/ai/library/5046524f-Pathfinder.Road-3.tar", "start": 23815715, "end": 23856675}, {"filename": "/content_download/ai/library/5046524f-Pathfinder.Road-4.tar", "start": 23856675, "end": 23897635}, {"filename": "/content_download/ai/library/51554248-Queue.BinaryHeap-1.tar", "start": 23897635, "end": 23928355}, {"filename": "/content_download/ai/library/51554648-Queue.FibonacciHeap-2.tar", "start": 23928355, "end": 23959075}, {"filename": "/content_download/ai/library/51554648-Queue.FibonacciHeap-3.tar", "start": 23959075, "end": 23989795}, {"filename": "/content_download/ai/library/5343504c-Script_Communication_for_AI-45.tar", "start": 23989795, "end": 24122915}, {"filename": "/content_download/ai/library/5350524c-SuperLib-36.tar", "start": 24122915, "end": 24481315}, {"filename": "/content_download/ai/library/5350524c-SuperLib-38.tar", "start": 24481315, "end": 24849955}, {"filename": "/content_download/ai/library/5350524c-SuperLib-39.tar", "start": 24849955, "end": 25218595}, {"filename": "/content_download/ai/library/7363704e-SCPClient_NoCarGoal-1.tar", "start": 25218595, "end": 25259555}, {"filename": "/game/CMakeLists.txt", "start": 25259555, "end": 25260987}, {"filename": "/game/compat_1.10.nut", "start": 25260987, "end": 25262192}, {"filename": "/game/compat_1.11.nut", "start": 25262192, "end": 25263137}, {"filename": "/game/compat_1.2.nut", "start": 25263137, "end": 25265127}, {"filename": "/game/compat_1.3.nut", "start": 25265127, "end": 25267117}, {"filename": "/game/compat_1.4.nut", "start": 25267117, "end": 25268708}, {"filename": "/game/compat_1.5.nut", "start": 25268708, "end": 25270094}, {"filename": "/game/compat_1.6.nut", "start": 25270094, "end": 25271480}, {"filename": "/game/compat_1.7.nut", "start": 25271480, "end": 25272866}, {"filename": "/game/compat_1.8.nut", "start": 25272866, "end": 25274252}, {"filename": "/game/compat_1.9.nut", "start": 25274252, "end": 25275456}, {"filename": "/game/compat_12.nut", "start": 25275456, "end": 25276399}, {"filename": "/game/compat_13.nut", "start": 25276399, "end": 25277028}, {"filename": "/game/compat_14.nut", "start": 25277028, "end": 25277609}, {"filename": "/lang/english.lng", "start": 25277609, "end": 25429984}, {"filename": "/lang/french.lng", "start": 25429984, "end": 25618753}, {"filename": "/lang/german.lng", "start": 25618753, "end": 25798886}, {"filename": "/lang/portuguese.lng", "start": 25798886, "end": 25983152}, {"filename": "/lang/russian.lng", "start": 25983152, "end": 26276349}, {"filename": "/lang/spanish.lng", "start": 26276349, "end": 26462426}, {"filename": "/openttd.cfg", "start": 26462426, "end": 26462564}], "remote_package_size": 26462564});

  })();
