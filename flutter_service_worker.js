'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "8307f9c9a2ce0c3ffecabb11ff584fb7",
"assets/NOTICES": "412d4066fbd450025b953a1297df067e",
"assets/assets/qrCodeBackground.png": "0b06c1d7a76ceabbc402ed6ce8d104a3",
"assets/assets/logo.png": "7b6302cb603d2e22655e7b88b394c5dc",
"assets/AssetManifest.json": "199983bdedc11eab975f2ee2046e70b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "bd513b963a851871b78a9209d50477eb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"version.json": "0e6c25a40fb01bee5d8959a0cda66ca5",
".git/objects/b0/5cb44621530e347a0fcc330a6d6ce88ce422cf": "3f881337f4d97a58cf99e6c231869ce4",
".git/objects/e2/3aaa20e885db97431ce793e1e64169bc55df4d": "8c41e5e9fba64a345973307cf0546065",
".git/objects/e6/5c1fcc452861e21e695424f6283180416d9b0c": "b8b94365e5ac327e685b2f6348fa5282",
".git/objects/75/a70c73f3b89e7bf8c404465643bac638759a02": "d5c5b5a82e393cc2ce28e6273831b425",
".git/objects/75/aeb83c4af2ee67c7a48363aef97299692ff497": "d71b453a9dc2a649a43305135fba099e",
".git/objects/e0/a4e6c1d7f2495a87451d6e18b9bb44f5b776da": "6d8ae65f3e4aa225862d227e121d6472",
".git/objects/0f/249ddf491f6b706db4f7e4426a0e4e3847ddf5": "0433c554bc6cc450dcd553173f2c0247",
".git/objects/0f/b606dc0497eeae75d9892751bfe15cd7c74f1b": "281cc3c9055a5a7cf8148539a53a24dc",
".git/objects/e4/a50e560082e8f120d1ff29ab3b54c4ed425b7e": "d219ce07303fcd90f7caf2a4349ecd7a",
".git/objects/a1/0b2ee4b18a44c86b5ebf99a52bdc3e34f0ab52": "ad5119c2b8d00d0f7386df33ca922106",
".git/objects/a1/4f147490543dc5daf1a3f95c68b8d7e0f307af": "7a132dfdca40a03bec92925e2224de60",
".git/objects/a4/fdaff61ea86d81dabda1aba4791ff9400f6dbf": "cbb8a1d2503b0af55dc4c9660d004f24",
".git/objects/a4/a11581d80d73d4e7084b32197145402f8105a2": "61363015503a3b5446597c2a3bc34db7",
".git/objects/c2/15f295980674feee3e969436355e992209a4b3": "4b671b7a989393c50fc964dc93450227",
".git/objects/c4/3b8f24f2ec900dd48cc6d2cb29269b3fffd6d9": "03e139b428addfffbdf7fbaeb718228a",
".git/objects/fe/d96eb18b4dadb573b9d985b7c50f806852d205": "95a6cec62cc82381001107154bbcc7b6",
".git/objects/57/aafa20fb48f66000493c22743002413598687c": "f63f81b68810b22c674f3b7d4cd23227",
".git/objects/11/8571310cc8163e2b50fdb1745cc4fb5fa79848": "21206672e4e79c300c6a71e8ccbd9f87",
".git/objects/49/6b131cdb6c46ebd8d93bc5da534a36fc6ea21e": "ae96449f280e822c04be808c555c97a5",
".git/objects/pack/pack-0ff872d2621cd43aac25a835b073ccfac5e15bee.pack": "f6424df1ff2db7be380f51f1a077b0ed",
".git/objects/pack/pack-0ff872d2621cd43aac25a835b073ccfac5e15bee.idx": "6ee355563e1a986f9895e977ed737810",
".git/objects/41/46b2c892c170aa5881d7b54431f6d368cdbbef": "f1ab1d20fd3b2e9b71e3c9580e878e0b",
".git/objects/41/50539d7f348b0937797129f5868fffd4b1ca76": "91a459ae380c323133ff23af4398d3b1",
".git/objects/92/fc4f2e5f4285433a19cd228d36db1568d06b1f": "fd83890e7363ddaa160069f136b99323",
".git/objects/92/a3a889ebe19c8f030b8e5f743f24f0dbce3efc": "3d7e4bcb4ae8a3a7bba953a2311397ee",
".git/objects/06/6838af927674d578c5617322a78ac6f20ff398": "2b7477bd22cc732520f55afe2a8146f9",
".git/objects/06/a86a7a12a172644e47059d2c00b26e87a89efe": "e26b0784b7e5807ca60b48513f109805",
".git/objects/43/11dcd57248db88639e8e61e00ecb3dac07f6f5": "edd3aa52dd416c074836595e67e45f22",
".git/objects/07/85a0798a01076d8315cb144105f5d8b2457363": "4a7cdc66b9f6f9ef8ae7a0b66a1f8ff8",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/83/b445153bd68d2044ca8519d1543a3cc87729f6": "4f6d92ebe7fbc76d9ac23378a8c4524e",
".git/objects/83/7b9c72980963610998d27d9fbf069ea29ac818": "bd4153c933e826370ad5e81cb3bd779b",
".git/objects/21/9dd0ac2c0d3efe908a6ac3f7067984eccd413f": "20a13614899dba20d96eae9f3a01a165",
".git/objects/16/dda1b7b1630de2837f41cb88c54f945f3ecd2d": "ab2ccc5fcffa78316c34ce2d62772e28",
".git/objects/1c/a1f3bd426f46c5b2896ecf6e9b218502cdd07b": "f0ef298dbfa02396fd63f76c3ed23876",
".git/objects/bb/ba933bf85b4396cc2b214e49a503ecf54f86bf": "82f7a7bbebaab954ccbf1d7befe98a7c",
".git/objects/ca/cc5c097b90df0c9377b60a1a3d9c1e442242e1": "63c087ea2c943dfbab6300baf98fd5c0",
".git/objects/ea/1099a9150f9987cecf59c405d331dde3f8475c": "30b427e48fc732d1d296106540820340",
".git/objects/6f/f1c3e196134cefdb3c008829a2542f9c049da5": "86967bc70a4e56b760490428b064e99e",
".git/objects/1d/a98114beead6757c78eb1c3a39fd1297970c8a": "c584d572ed0d33ced4be5bd740ab39ff",
".git/objects/9d/aa8cf44ca07335dff0d907323afc00bb258ca7": "1d6974018aec3b11f495f4292c1f143e",
".git/objects/d3/478f533046c11539adad5d247b587ac6f5e7ea": "92985499c54283cded525acfa0f6d0b7",
".git/objects/9b/83604b094f42b94063dcc825e99e78e8602d75": "d679ac3971f3edbde316a566b76301aa",
".git/objects/af/099a1f796ab1581941b106a212ebedc499629b": "335e0373be7f76c9c396d9623a10f973",
".git/objects/a3/cc925d80a2648d3f924bfa06cfcede3093c24a": "f3f0067f2471fc69c617fdbeb11d4d2f",
".git/objects/8e/ae399f3a2e3ef0bb10395f964854799ac426eb": "186bb761efafc3adc4d337f09b5a7901",
".git/objects/a8/c60b30a54314acbe7bba4afdd4657891222766": "4886f8d06edfcf61ad96b0bcfdd0cd68",
".git/objects/26/2cabdf52bd38859e533e6b0d318f0c13b8b8c4": "0a25102b1b65802426d6a8fbdbbc96d1",
".git/objects/6e/00568c53a78e744dcfa7c989ab9942d9b1c557": "a968138375af374b9d9e50b3c230cb7b",
".git/objects/27/bfc1d748e45ff3732c989c736a62879436fe26": "cb03c07a4fdf016bf9f1de25d6a8db8f",
".git/objects/2b/67bc34ce001bc031de76d79ed8922af4642ee8": "544f424bfe2b922d8afec11ab4effa44",
".git/objects/2b/17f7593a3ff35ed40c40f6af88ad86e21d94f2": "ac80d77c03e95e5d35f1075c6080821e",
".git/objects/de/50df3381ff1f5fa9dab21ba78e3076282f24d1": "294d1102673ca289ffd1a18ebe27416b",
".git/objects/d8/5bd8da5682959f35ae04de0b9a11d835dac5b7": "8efdea32ea7fba2266acc2c8f64cfabf",
".git/objects/36/74721a15c4ec15e144b8b7ead9ea1ca42165c1": "86ca2612d7328a880cfd7bf774c7a59f",
".git/objects/36/16fcadb57258394d98a11e015ccfeac6139822": "596a8526a399a06fd32b9085c6854344",
".git/objects/53/2cd84c84ec1b151e3b7d3a0e73ddc4623804f4": "b1e43ff1adffbca9e3084306866c3e6a",
".git/objects/02/025109a02ad3c3ede06be04fadd5931a3b9dd5": "87d1aee4f8fb4be3d3b3d3f9374df602",
".git/objects/8d/a20862aa7272eab74041a1d08f7d7dbfa3daec": "70cd2f95aca90fc3d4f5326182573ed3",
".git/objects/12/246abc19508fe50ed2edfa351fc118323a01c6": "41447114c2380774f7c8e68797af1c3c",
".git/objects/01/4549db27e4cf5dba8bc7e540c54f3d03c01b2a": "91d68da92bd835fef9c74d7baf172244",
".git/objects/91/a693ecf45cdb96ec5dcd1b5d398c1bb559fbe6": "b2b6b8844358a52b0b7aeeed3cd417ed",
".git/objects/3e/f0d8f5dabd3bfc5ee7533b0f3c376d62ce127b": "71150be9d9b6d2b8d02b72b2091fc236",
".git/objects/ce/c3ba46c2d911490e70a9f90d053d80e129be58": "71bbf6889bb1a1d52da8cf27f7af7cc4",
".git/objects/ce/96703bf1faf3a42d988689e376ad070bad0907": "9a62eb9c0d541d0c66e190e702ab97ce",
".git/objects/97/a51d689ab17c37b230ce8ec6fee2e08faf89bc": "c7c75c76a007ba0b6f1b1d94615c3e4b",
".git/objects/97/b99442e8b67d0a3fa0be4c579ba53f567cca5f": "1d0dd6339b2f265829f9189a4fa95326",
".git/objects/97/2f2f2b862c1148eb976922b0be264c425440e4": "9cd0343cc24c25ad992e52df3464e381",
".git/objects/05/366051da7ef77d8b7d7e139a73e326357e9ce8": "ee3afb8b5e7886a83ff5a85cff83bfe2",
".git/objects/05/ba10e37b073bb295ad6d0513e5bfc72f76c48a": "d15a9aaf019e61e4e13f75977353ed1d",
".git/objects/aa/57c6a957cd988c047f4e5ce1eca67916fd3767": "03a2aa22297a4a65b08cd331dd36dbe3",
".git/objects/3d/f77779856a3f7b4a9b36cac0302dbf71f91455": "3b4a5508ef5a1f0525b7f0e47d8f3d22",
".git/objects/bc/581b106f56d8fdc14f8621f77cb99878672653": "221494b40cd6d1a3f3e5143e44ca2e42",
".git/objects/ee/ff36879c97adc0682399b610783163eadd7ad9": "d8d7545e476302189c383d5ee7b748d4",
".git/objects/ee/c875f29abdf081e71711585431e05fb456dcae": "c445f18fd4278fc4a3a33f119da89116",
".git/objects/ee/41a42a8b3955d989aee75e78043ef50fd6ba65": "aa3ec5636a848830a56d78b40ceb860c",
".git/objects/85/86fab1ad6436480706f71815a9b37dea4fc560": "4d7c8c0c105c98cd2ca567b7f5bd0992",
".git/objects/13/996333f10f4343aa0f2b2f15e2689a5a8060ce": "a1b3d88079d1ed806394b6e987073313",
".git/objects/d9/5af98ac770ec604c14080b083982fcc50a6d82": "b33576540228c4fd27546ddafa9b7125",
".git/objects/d9/5bfebd4c7345111f8e14f126e6496f1bd75e14": "7925635462ab82c3967bc25a38dc9875",
".git/objects/d9/30f48838b962b55bc654d33e44c6c3e193bb82": "74e13c395aa1dbed21e24d4d35428f52",
".git/objects/66/508eff14b57c9dc2249439636a20e84a7e5493": "d1ed76e02d25a0447b35d67f4176111a",
".git/objects/51/d6514ee6d4d4a8cf00702649e1272a9b966495": "9b62976e7acfac66afdc0d3bd6916313",
".git/objects/5d/1ecb61dcfaef2b90d082b58d9c35ad494bd438": "e80ea0cbc7bbc5b464f6b49aaff2744a",
".git/objects/5a/8a9aa5bc30470f3a897f3359fe858d34914054": "89e900c0d20caaa8b290d6310b892493",
".git/objects/30/e506a3c12943565cc1014bed53d5a8505a40f5": "8fedfe6c3886b917273ccf33b61bfac7",
".git/objects/fc/db9c36a82eaaee71e7f55bea1d90746887cffa": "6edd5579ce94363060bb17ddf470df40",
".git/objects/50/77a8fe6ba6062f26879e80f1cb65262a75a18b": "f0a90473f3240d7370afe8ae3ac18bb2",
".git/objects/45/c212b753c68998f32ba2aeabe79dee3244ff1a": "b207c64aa2dc43e1bc1186fb87157aa6",
".git/objects/f9/9cd06fa402e1ab588dabf9708391d117127d93": "e1dcc55cc59b5d0e5a0a7b7c7c6aaf5b",
".git/objects/f9/a9ac9eff4752c208b3f540b378d6b6ec00a4d0": "a784fb334636ba3802d61d48cfb3488e",
".git/objects/5b/8b167dd3e96e74e5ee04d654026bd632973212": "18b83fdf4d8b79118d7ba633bea06d93",
".git/objects/86/2b4209d21a0829ae6d6b4f6d4a2bb1892d1c61": "d83de9a7f97c4fd7c72a64a9b4ce7daa",
".git/objects/28/145289d5363008af6128be9c6c0c09f1b146d7": "c10bca4e722bd97e7d86b58a1d0c6882",
".git/objects/39/b151fa50abe99b974963e927d1f6c0b85fa903": "7faedd91dd478b46830b58c4c418ad67",
".git/objects/dc/446dcd2ed6cd3c628f9298febbc90493604fb5": "30719ae8a4abe9e7fd9fd68c87247b2e",
".git/objects/9f/9615f31856e4bddd994e4843a00b5a09e60d0f": "d2846fe5d54a3a794fd194466adfa4cc",
".git/objects/14/a8cbc5482109f07f97bba344af79cd7124f684": "25b3eef53622ec6ca83fae0725809d38",
".git/objects/52/d680fc7047700cf3445dfe2beeda18b3785266": "05fb036f119b82e0a8b865777cb01b5b",
".git/objects/cb/f4b7692018c06429761b714ec7a5b7a85268f5": "324cead213a8576931a7bdfcb6b03da9",
".git/objects/47/4485f5464a86d0aa5130d3e74345ffc1c2815b": "57229e2584d2e4972e586b1bc10222a5",
".git/objects/79/a9169b976d5aa92ea0be5d04f62f947f72ca4e": "3227213b2103906e5303887decc360a1",
".git/objects/b8/4201b0c8cd1aa48af20d0ab09c5f225865ea38": "caf3de7dff7e30837baf9a10045a26cc",
".git/objects/0a/0a4b3d3ac3b730264798af8640e2a178714e9a": "7103dba65a3624f95aba1730ea581d03",
".git/objects/e5/2fc9854d8d1dc5f8034f9bebf809cf3e0ece5d": "cebe02277988160241c35e337f0cc4a5",
".git/objects/e5/87ce4c9a9b61c51317165a8c4bfe7f7aabc820": "2de0a88924a1e4baed9da7c81ad5c93d",
".git/objects/94/3503cd931f24a3d816f1eb1c7409db10c59679": "4b4a674939f9f847e2d347cff9a33caf",
".git/objects/94/be494445f59a4efe6c094396ca404b397b66e4": "069456293a711a4e3db89978e7184d41",
".git/objects/3c/a0b147946bfd02930ee20d14ab4ac4484f8574": "e14f930a7874c2987988b163bee0f1f7",
".git/objects/3c/6cad4b4dbbb097277ea47d7e5e736236292779": "ae4806d2a019a3f0814b90438e17b7bf",
".git/objects/3c/bb4902a13c11fd1423afdf17fa0d5ae4b5c73f": "c0c203da171cd83a57bfadb2287bbbb1",
".git/objects/df/dcbe79f98ecaa46e5b870d124ffcf4d5bdb461": "dd937a5aeb386fad5b3fa286c2afa0fb",
".git/objects/df/0fc41b2b321a94fb36217845f5701e55fd9efc": "521aa0d9d14797dee1fa4868106d05d2",
".git/objects/15/84bb286d02e91eeb9a7dc639d6547615122178": "e9df90ae535c827e9e47072bf01c6f90",
".git/objects/ac/a6542494c9d377af712032977289468070e0f2": "4cc0f938fe6a13f5f22fca2d059b6e55",
".git/objects/ac/ea62fc2c6262641e5e7bcdc85a27b0e7b0a926": "e71cadcee9f0e9faf93dece18d2af8b9",
".git/objects/c1/8a391878d07ff16113dec2d37018bc0a4beb4b": "a54b6c176c314fe09a51643552372c31",
".git/objects/3a/30851baadd3105c8a13266428ff47251969143": "0bade7da26851ecf9cab7c76155e999d",
".git/objects/a2/693972f3ffc81e5c8a1394b3a1baa4ca1d4600": "0f628ae27b7a46fa74588eb4b06e3023",
".git/objects/5c/e7f8f22a59fe7def6f14fc11bcca3885860a7c": "4a7521e74d4e372e18721367bc87d660",
".git/objects/62/ed576414c1e0b290e4d89d107768dbf235d0cf": "91b5a748f1ecbd7cb39203c2dcee9953",
".git/refs/heads/master": "6a92013c6d4a402927bbc461b6bbf4b2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "6a92013c6d4a402927bbc461b6bbf4b2",
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
".git/logs/refs/heads/master": "82a38925f9c44ae44319fe2a0b23daf9",
".git/logs/refs/remotes/origin/HEAD": "70f14df3e2102eb7f9d9b77be4493c93",
".git/logs/refs/remotes/origin/master": "a53249d3a46f11b5f091055b9074504b",
".git/logs/HEAD": "82a38925f9c44ae44319fe2a0b23daf9",
".git/index": "8b19c0f7622e14bb1524b23d769684c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "03d95ec28a41bfce0035427baa15598f",
"index.html": "4d3faaf566ca6d04c4e14d8a65606aef",
"/": "4d3faaf566ca6d04c4e14d8a65606aef",
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
