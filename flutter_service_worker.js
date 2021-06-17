'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "b7d0a6d6e6f2bf98d40eb783d558e44e",
"assets/NOTICES": "d681329660b0bff02c465a4d4283fa64",
"assets/assets/logo.png": "7b6302cb603d2e22655e7b88b394c5dc",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"version.json": "0e6c25a40fb01bee5d8959a0cda66ca5",
".git/objects/75/a70c73f3b89e7bf8c404465643bac638759a02": "d5c5b5a82e393cc2ce28e6273831b425",
".git/objects/75/aeb83c4af2ee67c7a48363aef97299692ff497": "d71b453a9dc2a649a43305135fba099e",
".git/objects/0f/249ddf491f6b706db4f7e4426a0e4e3847ddf5": "0433c554bc6cc450dcd553173f2c0247",
".git/objects/0f/b606dc0497eeae75d9892751bfe15cd7c74f1b": "281cc3c9055a5a7cf8148539a53a24dc",
".git/objects/57/aafa20fb48f66000493c22743002413598687c": "f63f81b68810b22c674f3b7d4cd23227",
".git/objects/pack/pack-0ff872d2621cd43aac25a835b073ccfac5e15bee.pack": "f6424df1ff2db7be380f51f1a077b0ed",
".git/objects/pack/pack-0ff872d2621cd43aac25a835b073ccfac5e15bee.idx": "6ee355563e1a986f9895e977ed737810",
".git/objects/41/50539d7f348b0937797129f5868fffd4b1ca76": "91a459ae380c323133ff23af4398d3b1",
".git/objects/83/7b9c72980963610998d27d9fbf069ea29ac818": "bd4153c933e826370ad5e81cb3bd779b",
".git/objects/16/dda1b7b1630de2837f41cb88c54f945f3ecd2d": "ab2ccc5fcffa78316c34ce2d62772e28",
".git/objects/1d/a98114beead6757c78eb1c3a39fd1297970c8a": "c584d572ed0d33ced4be5bd740ab39ff",
".git/objects/6e/00568c53a78e744dcfa7c989ab9942d9b1c557": "a968138375af374b9d9e50b3c230cb7b",
".git/objects/2b/67bc34ce001bc031de76d79ed8922af4642ee8": "544f424bfe2b922d8afec11ab4effa44",
".git/objects/2b/17f7593a3ff35ed40c40f6af88ad86e21d94f2": "ac80d77c03e95e5d35f1075c6080821e",
".git/objects/de/50df3381ff1f5fa9dab21ba78e3076282f24d1": "294d1102673ca289ffd1a18ebe27416b",
".git/objects/8d/a20862aa7272eab74041a1d08f7d7dbfa3daec": "70cd2f95aca90fc3d4f5326182573ed3",
".git/objects/12/246abc19508fe50ed2edfa351fc118323a01c6": "41447114c2380774f7c8e68797af1c3c",
".git/objects/ce/96703bf1faf3a42d988689e376ad070bad0907": "9a62eb9c0d541d0c66e190e702ab97ce",
".git/objects/ee/c875f29abdf081e71711585431e05fb456dcae": "c445f18fd4278fc4a3a33f119da89116",
".git/objects/d9/5bfebd4c7345111f8e14f126e6496f1bd75e14": "7925635462ab82c3967bc25a38dc9875",
".git/objects/5d/1ecb61dcfaef2b90d082b58d9c35ad494bd438": "e80ea0cbc7bbc5b464f6b49aaff2744a",
".git/objects/fc/db9c36a82eaaee71e7f55bea1d90746887cffa": "6edd5579ce94363060bb17ddf470df40",
".git/objects/50/77a8fe6ba6062f26879e80f1cb65262a75a18b": "f0a90473f3240d7370afe8ae3ac18bb2",
".git/objects/45/c212b753c68998f32ba2aeabe79dee3244ff1a": "b207c64aa2dc43e1bc1186fb87157aa6",
".git/objects/f9/a9ac9eff4752c208b3f540b378d6b6ec00a4d0": "a784fb334636ba3802d61d48cfb3488e",
".git/objects/79/a9169b976d5aa92ea0be5d04f62f947f72ca4e": "3227213b2103906e5303887decc360a1",
".git/objects/94/3503cd931f24a3d816f1eb1c7409db10c59679": "4b4a674939f9f847e2d347cff9a33caf",
".git/refs/heads/master": "4d6d3a6f53db5e1bc5e02eb725066113",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4d6d3a6f53db5e1bc5e02eb725066113",
".git/packed-refs": "a71d2a2a2a28348b68bce4ecc69ffa8d",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/config": "61383080df6ab69c30ce5507e215acd4",
".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/heads/master": "ac3f478f8e6f8e196550f82d8647572b",
".git/logs/refs/remotes/origin/HEAD": "70f14df3e2102eb7f9d9b77be4493c93",
".git/logs/refs/remotes/origin/master": "645b2b5d38b3689be01abb85b44417ae",
".git/logs/HEAD": "ac3f478f8e6f8e196550f82d8647572b",
".git/index": "585beae62dcb2aaf2948d2692c7a8b77",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "774d0f0a2b581bac6f80fd0113395589",
"index.html": "f18d1fe6731701a34beddb7d5d8d2681",
"/": "f18d1fe6731701a34beddb7d5d8d2681",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
