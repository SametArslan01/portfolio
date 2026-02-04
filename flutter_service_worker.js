'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "078e8f45714bc66473759dc6e0d3d957",
".git/config": "81c1bd1f2278f02ed22cd1cd37ac9aa4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0101cce047f1bcfde1f528e505b750d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e2fb0788b29303a37d3b0cfd3b04898",
".git/logs/refs/heads/master": "6e2fb0788b29303a37d3b0cfd3b04898",
".git/logs/refs/remotes/origin/master": "96ab2d65346df4c32aa914e5482f58b5",
".git/objects/00/f5d787df56f3ccd62434452a351223c6e10bc6": "8e4d05d49d76533988799621a5675be0",
".git/objects/02/91560f61002cfb45f1484410843fe9c4ae92d0": "ee8b263021e82102b9d83bb949ea1474",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0b/97a25d736812a40e8e865fe4dd7e6195e45bcd": "28a02d5acf7a2a8cd78b5abb959e29ad",
".git/objects/0d/2aaeca6fd8877b8244b2d2a25d52821260621b": "20dcc386203f674202a81da10261396c",
".git/objects/14/f8c5570613e8292246b00d1483153cb6623aea": "8025b698895286d125ffa1ddd20d4a6e",
".git/objects/15/0c35d13901ca0e3e5574e83a1b0e932dede93d": "04439aa525ca440d1950a92dad0b0a34",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/22/22cf1d526fd1c3a79f395dc226fa942e8e1d0f": "e4934464e28f5c811ab3009561ff5de2",
".git/objects/22/725d762821e0a5337630d649bb1ee93653bc29": "582a755d69a6dfb2178a4787b8eb9ce5",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/9511b2ecc90cde802f497256078131f5bf346b": "21c8fa750875678175e48934b8972edb",
".git/objects/2a/bc4bcb7d24c3bda7bae7cc7a89487e0330437f": "cb9f697ef8795cc7f05d0d945d7dadf3",
".git/objects/2b/39f4b083ca84e9a1c132b383bb98dac16444a9": "21d97a2a3a514c33263bd8a8c4a1bd3b",
".git/objects/31/be78f8abf9f193bb7deed00c67fb6c9d816554": "ccecd8f6f4b7234f981452b9d9a38960",
".git/objects/36/6f2547c19ce4f30eaf9ec8c7b85fd99ad033d7": "667dc00722d0f862c5f02b8910723133",
".git/objects/36/e4d0590c333c109260ee8257def99b23abc797": "7c59425a6bb2671586b86eeb6727427b",
".git/objects/37/047f6b61a05f9e73ceed61a8679e328f53bc2d": "8f0f9630baf72cb7b1a54f361b1f5d47",
".git/objects/38/0a7322f508c3cccc49e2f4d69134cdd4c6fca4": "428eb1a3722b1c1bf85964bd027cb689",
".git/objects/3b/f47ecf4cf8522502b47585cf83ba15bce27256": "a5078d528ceb0c0433a3327839751b48",
".git/objects/3c/d7d88c1ab141f9fed85caa8b05af1cdf86554e": "6fc4bd944ff1c8a283b755babf2b8d0f",
".git/objects/3f/eb0b971265bfba404f2b9181898ddbbee3db10": "c3a5a3e4aa9f1a56d7bfd0a11237b398",
".git/objects/43/fa416a041ac97d01e0cd0f1db3d0b84e3b4be3": "d42ef8780e14bc61e338277c15d9726f",
".git/objects/47/1584ab9addda809f48c0914ba780b653ca2c4d": "9ab62f7a44fe97f23ba7873bf29cef73",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/2bad26f1f53f0a4cd22578d7143d070a50658a": "1d411241784ed35ef39f2528f17ce81b",
".git/objects/52/5a60634154457823658daf4d4b6f018aacf11c": "76e9114f3863f5b38bb15ee0fc4917a5",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/e4bb1992ff85b6411864466168153007c94d53": "12c68ec1c48d40d10cf02cef682ae3eb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/02b38dbc748aa531d5042482df1dd639ac4141": "d38e48f755d645c8c8fe6443455ad39d",
".git/objects/5c/b8c1f273aab4d1783b9f1db26dbac6a66a0eb8": "d8df64e82b46a9970bd82e1e645d254b",
".git/objects/61/5088abc900486fba38af4a7717149fd9e220b9": "ab0485163709010e591a9f4a78a80604",
".git/objects/61/83cbd00756a662d624d51da3bfea91a5f7076e": "784c241864417ee874e859eb66950f7a",
".git/objects/68/7b04741db2457941b3beef357ab958a49172a4": "7dccd5d9248751f1c121b1e8a2d15fe9",
".git/objects/68/8461446a74e79724a7c3e83db9c5c4f818b608": "3b3dee6db4acf6d23ad43c1cff3772ff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/de75a7661491aa55a7b6657df6680d55ac854b": "82a6363e8ddda80b456c02c571a84b0a",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/dcc56405d4c1fd35caa1661aff88ec707053e5": "202ef6d62ff8dd1c8b247e8cfb7db68a",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/055daf18fd57a83a95d162a95e4177d711e9d2": "e6ff3765ffdaf9d4c2e14c2b09537f9d",
".git/objects/74/d6a0927f29e09de346fff23bdeb59b1d625f33": "702f6018bb6726cb8e718c7f509d2858",
".git/objects/77/5a02684ffccde61436e077b32afaa183ba34e9": "71e054378491a202cf07fa3eb9877d36",
".git/objects/7b/cee03fe582f8ace946f6043295069a5fba7ab4": "99b9a5558c2c180c65cbcc62711c3c23",
".git/objects/83/8c9d5af082e3eb7d719cc31622f6936c125664": "8a1f15bf5743537e75c27a1e359514a4",
".git/objects/88/306146ef29ba01a368b23362f803eb1e1abc53": "359ecf92c18bf2775d26da65ca919a14",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/21005cd2d75c3d8c7c46dc57876e1464552a80": "3ad9de5922ccbea642f88794508db64c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/418a527cfafed88d61fd4d4f8854c7f78886f5": "8867bc903f9809a3743f82e2c577d7b5",
".git/objects/93/d569f8ec7fd224387da8c4e76527853e351922": "fc70cebd276b5c90832e1c6f14b3d8fd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/d5d724c1442843993b75ae4fa708b1d962863b": "9c4e6f9a5d9b495a16ff0eb986127925",
".git/objects/9e/1af9fa789524ece53d8e938ca843cecf49ece7": "b328ec60803f9d38039979b1df6fe168",
".git/objects/9e/497003aac6668ac9569f9221b69afef777fe96": "655c51f187fe1fea5ea4903345c38354",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a4/5990444b8672c34d9508a070f3515053f6fd9d": "a8554f6867a34a2bdaebb3d7005fb6b0",
".git/objects/a6/42bccd0a0711f0b6f897754c732d345751f770": "8694fd9c050ad024b4a8966670a5badb",
".git/objects/a6/dc6f0cbe176b50da17ab405bf19abe17a0b9db": "b1f6d45e6fcbaaf4819beeb31d1801e1",
".git/objects/ac/ae41812e9719ba0bdbfad09f684b59dc0382e6": "49103595518dc446fc448cad1c3226ae",
".git/objects/af/a72c295faf41549c03e7f0502de4c769d82392": "2238fa4fb23100185161149badea9a76",
".git/objects/b1/1473a6380022761e6d9360627e0c6dca955290": "bb1f4a8f50853bc5a602d94873a99892",
".git/objects/b6/7084ba6b2f059ce09b1dfdcf9474c787618a86": "505ebcd67ed1a27ac87ab326bb3bf211",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/047159202cb84372ef5c92bba89ce70e634c9a": "2e5997bc25ebc71e103dfc164ded7238",
".git/objects/bf/d8ca3ef69111dafbcec25f39de253117475e93": "ebdc757368c245c38a6f9b610af37a78",
".git/objects/c4/28cb658ffdc19b07018090f2910f990fe092b1": "b6aa571742ed7aa454fe63333ffc30f0",
".git/objects/c5/02f29d2068fe66a938b2f69da4cd835a96e112": "4450a04da15068badeeb5d7470a26cc0",
".git/objects/c7/f391a21362add656de97581d9580058bedae61": "583735b352bdc83c0e0bc536a42df2fd",
".git/objects/c8/0833899cab73c2a99b19fd9bce4e6c18f75747": "9a8a57cd011d1547964fc3908cb9bd64",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/11655ca3ed3ed5feaa802dbdd520d8343bd457": "05710bb90bd3408c360b10e2b992d522",
".git/objects/c9/d060f990029977b9ebb6d8c78626e181d793ed": "49931a7d9c83ba7d4d974e9005104a15",
".git/objects/ce/cf54571db77525dc4bb3c13f45d688b19f8386": "ed6104a647548707d19541d41ae0820e",
".git/objects/d0/6edbce5bd7d097d304d84b560f08ffcc7d10de": "cc55e70586c18238f915b769a5f34f95",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d38fbff4df3207daa21530dc984b3e68a0ac81": "426b48a4d8beb00dfb62a88606b74031",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/2048063d4bffd6165a624f50127362c0d017d0": "77723bf21be4a07e2d126f01d1e67cb9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f42afc5602f36df8357e58bcfaca307ef24815": "875a717dd7abb7eb27ab995f88fb5afc",
".git/objects/f0/afa699b96a621c9f7c5ffa4d054334f381a57e": "ba15176a73be1a41383d553679bca9b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f741b3681165075267910c7ade892e88ea3cd3": "379f551e6e44720bb5d4c8691b35faea",
".git/objects/f3/8ffea56be4254e4417fd487951df3df4773d48": "c80033d4b6ee8ba15cf3a8a619c8d86e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/cc75cc7e57835406330f8b31ca0ee5d553539f": "42ef70bf4c61898c0fa49cf17b792c6e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "aa81057a645eb52a74d8b391eda162af",
".git/refs/remotes/origin/master": "aa81057a645eb52a74d8b391eda162af",
"assets/AssetManifest.bin": "c8a45df8c0acad16a82dbef6694bcefc",
"assets/AssetManifest.bin.json": "ace294a461c19594225a908a73ef6194",
"assets/AssetManifest.json": "cf2d56629cad4a8a0d7f543a6cf077c5",
"assets/assets/AssetManifest.bin": "c8a45df8c0acad16a82dbef6694bcefc",
"assets/assets/AssetManifest.bin.json": "ace294a461c19594225a908a73ef6194",
"assets/assets/AssetManifest.json": "cf2d56629cad4a8a0d7f543a6cf077c5",
"assets/assets/cv.pdf": "da69c95d5aabe8a3d0d45b692ef15f27",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
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
"assets/assets/NOTICES": "cda5ac04c85272a95f66af97da1041ad",
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
"flutter_bootstrap.js": "b4de728240c1766358906b5acb10d07a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a50c63499e1051e50e643e1607c87dc",
"/": "6a50c63499e1051e50e643e1607c87dc",
"main.dart.js": "ea3500496deb43bd65f7515e5e4838a6",
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
