'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22a12deede0e653636601b9bf5f8162c",
"assets/AssetManifest.bin.json": "1245ef487d2fef4c3f9be7a982e86878",
"assets/AssetManifest.json": "cfc035fb0d1640f83613fdbd8ecc3905",
"assets/assets/images/7me.png": "58d565ce431c26b5ca13b66ceed9bd5f",
"assets/assets/images/acampamento.jpg": "516c55a1443cc14d165240b4d990327a",
"assets/assets/images/app.png": "e71589560b0f1d55b47b73f9e32a75e4",
"assets/assets/images/avatar.png": "a9ecc8f7d91e3ff94f2d91c9bf862311",
"assets/assets/images/cursoBiblico.png": "7c45ab8ccab449ff1bf8d61d4e03f342",
"assets/assets/images/estudoBiblico.png": "ce33aad77297770fbc6756883443d247",
"assets/assets/images/facebook.png": "b48b81006c96b2f09f4898231a965bdf",
"assets/assets/images/favicon.png": "5ab6f4bff974f6e555b7154071b09990",
"assets/assets/images/icon.png": "5ab6f4bff974f6e555b7154071b09990",
"assets/assets/images/instagram.png": "2526a08045dc9689b335262339335067",
"assets/assets/images/logoApostolos.png": "a2ba18a24eccb2e61b4c2e6c6e58b7b8",
"assets/assets/images/logoAvt.png": "92b4614e031f5acdbf25db1efd4e0db6",
"assets/assets/images/logoCherch.png": "4068f44ec7612e520648e214fccea815",
"assets/assets/images/logoDbv.png": "eca7c050be06b44e3cde527257929916",
"assets/assets/images/LogoIgreja.png": "dbc4d61f7d32dc91596ba42977e397a7",
"assets/assets/images/Logo_stac.png": "d14c450aa00c73a30c7a1682da886346",
"assets/assets/images/map.png": "d13e9f802c077f8d574c7e086b61084a",
"assets/assets/images/siteLogoAdv.jpg": "399acbca4bd75065818bb0142492089f",
"assets/assets/images/splash.png": "59d0310e56d81ee26f4ce0487761b455",
"assets/assets/images/tvNovoTempo.jpeg": "c683e6c9ee0943ef3a4f765e8d5b39bb",
"assets/assets/images/youtube.jpg": "8d656f9281153d0c4ba4b7e247dbe1b3",
"assets/credentials.env": "961a502c97a9a038310c675bd2bd6c05",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "da24f7fa5cf5820f4e935559b7eb6113",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.js.symbols": "2e71061f28aa3cd450a432abf06f17be",
"canvaskit/canvaskit.wasm": "bd975ea49436bbf9586428d23c459973",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.js.symbols": "381340d71615084eb4db5261fa16dbb7",
"canvaskit/chromium/canvaskit.wasm": "da574c7c67b6c38035b905690412a8a4",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "3a68e6227874dc620b3d35fdccf1aa77",
"canvaskit/skwasm.wasm": "4b92197bab99c18b9edc6bf64a6dc0e6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "0433a19df15722775200727248c3295e",
"canvaskit/skwasm_st.wasm": "b2953209b604653bd60218023cba4fbf",
"favicon.png": "5ab6f4bff974f6e555b7154071b09990",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "440109955719be776e90d18b995953c3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "198fb2b3883eed2145a498b73c20d413",
"/": "198fb2b3883eed2145a498b73c20d413",
"main.dart.js": "a594e5bfdb59889b8dd1188306baac60",
"manifest.json": "7bddfb55052aee1a8bb2ac78f22237bb",
"splash/img/dark-1x.png": "b1df0af142d27f544bc7706b0877d38d",
"splash/img/dark-2x.png": "1f0f44cd1bd8d7adc079acb693cf8f4b",
"splash/img/dark-3x.png": "969f82be2cd40f5760aa460facf57fe5",
"splash/img/dark-4x.png": "c06074d51801ef7fdd73464c24a4dfef",
"splash/img/light-1x.png": "b1df0af142d27f544bc7706b0877d38d",
"splash/img/light-2x.png": "1f0f44cd1bd8d7adc079acb693cf8f4b",
"splash/img/light-3x.png": "969f82be2cd40f5760aa460facf57fe5",
"splash/img/light-4x.png": "c06074d51801ef7fdd73464c24a4dfef",
"version.json": "f95292eb4e5285150a30c2b9e4f9efae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
