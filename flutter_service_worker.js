'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3519b477dcf7db71968cf0edcd8d867a",
"assets/AssetManifest.bin.json": "79b811927361bbf15f3ced1e09471727",
"assets/AssetManifest.json": "4a87a81f3a4fe921c85387b3ed669676",
"assets/assets/cv.pdf": "da69c95d5aabe8a3d0d45b692ef15f27",
"assets/assets/images/ilac_saatim/ilac_saatim_1.jpeg": "a731c131668a803de81a333106632294",
"assets/assets/images/ilac_saatim/ilac_saatim_2.jpeg": "d8dd3dfdddcc6cd1dd75e06a3c54248a",
"assets/assets/images/ilac_saatim/ilac_saatim_3.jpeg": "6510a2d94966e47c94dc6580be3789bc",
"assets/assets/images/ilac_saatim/ilac_saatim_4.jpeg": "639775e871400109a89980bcc4c87ca9",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_1.jpeg": "75a5e5ebcd93f5d34243e7a8eb0e360f",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_2.jpeg": "2d2ac4c58ded0b7d93d6fd771b67eb25",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_3.jpeg": "fe6538c2c84cf09660da469c26b38367",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_4.jpeg": "97763917e06c7cf01bf26193c6eade25",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_5.jpeg": "7320abcb89568758f726d931bc729378",
"assets/assets/images/pratik_muhasebe/pratik_muhasebe_6.jpeg": "cad00040ffd6681272c884458471024a",
"assets/assets/images/pratik_pos/pratik_pos_1.jpeg": "24622ca21982629427d49357fd2aaffd",
"assets/assets/images/pratik_pos/pratik_pos_2.jpeg": "4a90b8147471175ee5d142ba947ac0f5",
"assets/assets/images/pratik_pos/pratik_pos_3.jpeg": "05075c9f0154d6b9f3c8c37913b336b2",
"assets/assets/images/pratik_pos/pratik_pos_4.jpeg": "fb7d5a30ee68f571db977e651074b782",
"assets/assets/images/pratik_pos/pratik_pos_5.jpeg": "71984e3fa78435e5c358beff3a5df036",
"assets/assets/images/pratik_randevu/pratik_randevu_1.jpeg": "0b24e67f05d6144a38116611e964879d",
"assets/assets/images/pratik_randevu/pratik_randevu_2.jpeg": "574266c45f8a1ad30fdd2721390c0deb",
"assets/assets/images/pratik_randevu/pratik_randevu_3.jpeg": "e17fc08379c318a128eda8a31b7e8648",
"assets/assets/images/pratik_randevu/pratik_randevu_4.jpeg": "f7dffec563c293046eff767fafbc6177",
"assets/assets/images/pratik_randevu/pratik_randevu_5.jpeg": "dbf16655c0a1197c6a6149de4e811056",
"assets/assets/images/pratik_randevu/pratik_randevu_6.jpeg": "602f04f318a2a9121d1ff96110eee88a",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_1.jpeg": "1a50f4df0d9726cb745bd87aba7407fa",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_2.jpeg": "c314ee567dc4cfb857909bae70e6982c",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_3.jpeg": "8b69bd1c282e68a176f7ff157f048e54",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_4.jpeg": "a488d56a8aeabd1e0af19d95a966e5af",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_5.jpeg": "69f1311fed8e20f69e7d714fe8a0f543",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_6.jpeg": "232208d1920b864752ff5baeae5e9a77",
"assets/assets/images/pratik_stok_takip/pratik_stok_takip_7.jpeg": "adbfc078dc0e404a3e6e03b93d9877a2",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_1.jpeg": "30d178b458dd346986a2186fe296f201",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_2.jpeg": "fe16da29670cc35d07842849e730ac01",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_3.jpeg": "82b0c6bef34e54f04c5024a6c34ece04",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_4.jpeg": "4d3d60f66213b44201e41731c3926172",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_5.jpeg": "0f6b96325bdd83193de207857180de64",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_6.jpeg": "8c2c8f3dae03bdc3cbe09e693e57b298",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_7.jpeg": "f2bfc43530df2fb51b66edbd0f0ae73d",
"assets/assets/images/pratik_teknik_servis/pratik_teknik_servis_8.jpeg": "b71a22867e8cf35d6228a17692cbf120",
"assets/assets/images/taskly/taskly_1.jpeg": "02eca4a47ffd1820e8a1ecfa7fb70cef",
"assets/assets/images/taskly/taskly_2.jpeg": "ce5e03807ecd78b50d9338032a9fb4bc",
"assets/assets/images/taskly/taskly_3.jpeg": "7c65ea6dcfef9d45808d7b95454d882a",
"assets/assets/images/taskly/taskly_4.jpeg": "636b2fe09cb11ed4673a9d9e0ba8b772",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "bcf67f3bb233aaeb2fddf834d0e69c8a",
"assets/NOTICES": "cda5ac04c85272a95f66af97da1041ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cca924f158a2d310a318142d1b230190",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"cv.pdf": "da69c95d5aabe8a3d0d45b692ef15f27",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8e934a1e6c4e18980139e21892bb3894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a50c63499e1051e50e643e1607c87dc",
"/": "6a50c63499e1051e50e643e1607c87dc",
"main.dart.js": "ba1801240156e28ceca4a2d36f028f02",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
