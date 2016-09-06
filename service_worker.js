/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("js/lib/push_worker.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["badbrowser.html","cfb725c2ffb8df1fdf3efad6c69f7aa4"],["css/app.css","d0fbebc2b93735509d753d3235143cb4"],["css/badbrowser.css","f97ed1f11f047c22dc44fb63a85acc90"],["css/desktop.css","70e7843c14770937b1c841d144c59b20"],["css/mobile.css","bfed3544d56129614e348b78b2e0eba0"],["favicon.ico","fb606fe0a27a1c62bdfc48561d908f39"],["favicon_unread.ico","b3a7e3414d29305250f377be7ab1e3e2"],["img/Manytabs.png","c8afc8d7fc5ed214d84e3170a3c1afab"],["img/Manytabs_2x.png","24b890a9f3a4ea05b1fbe9e418fd8fd3"],["img/Telegram.png","065d7b4c7427d7b9f645fcb741b73e66"],["img/Telegram.svg","4964c9bbfba510f495319c52562d70d4"],["img/Telegram72.png","eaeb12976cb35eec0d0103fece96b663"],["img/Telegram72_2x.png","fc33e1fa0c8c505f870cc44154fca16f"],["img/Telegram_2x.png","2378561c9e060c53d93deb410e80d701"],["img/blank.gif","56398e76be6355ad5999b262208a17c9"],["img/changelog/card_wecandoit.png","a124610051bc304ad2b9a504f13b3f40"],["img/emojisprite_0.png","cce267d042a31fa24dc933603de5a735"],["img/emojisprite_1.png","6cbaf42abb5720ecf531a62ab303743a"],["img/emojisprite_2.png","06aca5a634d281b50cecff0f69feacfc"],["img/emojisprite_3.png","d76a9fcc24b7b68961edd44bfcf21973"],["img/emojisprite_4.png","9759ad2bdcde9327c495fc0f9be2dd05"],["img/icons/AboutLogos.png","35d8405d003067c9d707bc5d65152d67"],["img/icons/AboutLogos_2x.png","f35773d28734d196dc027a490f7bea52"],["img/icons/General.png","0e7697190679ee0bede24a9385ae488a"],["img/icons/General_2x.png","3135366edd170235fc7cfd349f5fc6cc"],["img/icons/IconsetSmiles.png","7128c3550cbf7acbed594dedba9afd0a"],["img/icons/IconsetSmiles_2x.png","81b509b018a146cc962a4186a425fe75"],["img/icons/IconsetW.png","7b1ef418b993a93c48bd566a5d32a69f"],["img/icons/IconsetW_2x.png","93f289139b43587ab55b89c77efe0351"],["img/icons/Major.png","e6a64ae0dc82a2b60e4c64e1bce109af"],["img/icons/Major_2x.png","4608b3b9ccedc641eef1d1553a50bdd0"],["img/icons/MobileIcons.png","ecbe5ab1b0b8ba366b1f736a676b2f75"],["img/icons/MobileIcons_2x.png","d893a6d184c4f97b5bb0b1e9aa7e9ed0"],["img/icons/PhotoIcons.png","b97bb4e41b99e7f0f89d67f7ce12b9ac"],["img/icons/PhotoIcons_2x.png","bd84d97a8f5f710fdf1b74694abc9915"],["img/icons/ProfileIcons.png","0431f1b1deb98e24b0f59f783539eca7"],["img/icons/ProfileIcons_2x.png","a47fbc09938201cb48a496619292d305"],["img/icons/icon120.png","86c2b2161adc8d5c786a19525d0e943f"],["img/icons/icon128.png","bab51b9ae53b5dccd90b7b7ff57368b8"],["img/icons/icon16.png","a1e2c33a693f1c2d35434d656dcb7a30"],["img/icons/icon32.png","fb606fe0a27a1c62bdfc48561d908f39"],["img/icons/icon60.png","14474a0adb63ab2560ae1242419eafc7"],["img/icons/icon64.png","7719127d610aeb962d36a8f98e64488f"],["img/icons/icon90.png","f02a5a014931712949fcb0cf98eddec6"],["img/iphone_home120.png","1452c50f974d6f4151761c0f634f333d"],["img/iphone_startup.png","7d08ad07ab0da9faeeeb441ff89cacd1"],["img/logo_share.png","1330ba39ac54aa1c67c7f6f12db4af20"],["img/placeholders/DialogListAvatarSystem@2x.png","91d6282fcdd4e4abb5bf14997298237c"],["img/placeholders/GroupAvatar1@2x.png","eb2771da62a07fb99ba18f0ffd6abca3"],["img/placeholders/GroupAvatar2@2x.png","05e3af4dbce48c922a65833fb4392acb"],["img/placeholders/GroupAvatar3@2x.png","9136c5b42424783b8f6eae288aa7cbd8"],["img/placeholders/GroupAvatar4@2x.png","043a2931e6311577d4d38b23754fda00"],["img/placeholders/PhotoThumbConversation.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/PhotoThumbModal.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/UserAvatar1@2x.png","e431003637fef8b4382d646610b7de57"],["img/placeholders/UserAvatar2@2x.png","1c26ec20a207086c7bb6b1028ce182d3"],["img/placeholders/UserAvatar3@2x.png","3afab39323d298e3adc6f47b9017529b"],["img/placeholders/UserAvatar4@2x.png","ded42767ac8e40ee84fc0378eb720000"],["img/placeholders/UserAvatar5@2x.png","794d8e32e24ebf4f1f657514107e6d13"],["img/placeholders/UserAvatar6@2x.png","33aa92b553d3388a48cdd22b7d2cbc0b"],["img/placeholders/UserAvatar7@2x.png","b8cf3417dec9e3791b422a7ec03e669a"],["img/placeholders/UserAvatar8@2x.png","f0da3ba20f47566af03a897be54d5a63"],["img/placeholders/VideoThumbConversation.gif","56398e76be6355ad5999b262208a17c9"],["img/placeholders/VideoThumbModal.gif","56398e76be6355ad5999b262208a17c9"],["img/sound_a.mp3","eba09b6a457792c52fc610b5f9f974b3"],["index.html","234e5c9123ce0342ca8647a6f76943e8"],["js/app.js","477a5cfaac53f9b8f80a1a016092af60"],["js/background.js","ecc711b3128e261d0c892b4a099028f9"],["js/lib/bin_utils.js","aee935ca30e671b1b0ffad7191fcfe6e"],["js/lib/crypto_worker.js","82d9508f8b48ed6346d4d38fdcc8ef55"],["js/lib/polyfill.js","7bd10967fb286ea7eb4c30c8e587949c"],["js/lib/push_worker.js","16d3565ee62b79b0007858bed73d6210"],["js/locales/de-de.json","d25a615f737d1188d2aea38069f0d40e"],["js/locales/en-us.json","8e9b9e7a859621439d8b94fd3207a7f9"],["js/locales/es-es.json","a57a3adeb86e2c6a5afcaf75da77cb51"],["js/locales/it-it.json","c3fe9face5179db719a1b969bc76488f"],["js/locales/nl-nl.json","9271fce442715ffbb8ba3d8c7b8cd591"],["js/locales/pt-br.json","7dcb965b4da4ed40c212d092fcc6f9cc"],["js/locales/ru-ru.json","e504ac530761aa3bc899e2731a4cb398"],["manifest.json","95e65c209594b19eaabe34e3a4d2e356"],["manifest.webapp","bd2bac3f887d340c582bde5c70a69d7c"],["nacl/mtproto_crypto.nmf","6e103ee28ab3866e84d30b633d694c61"],["nacl/mtproto_crypto.pexe","9b0030189b74b07a96908bc00ca2df54"],["vendor/angular/i18n/angular-locale_de-de.js","01cd2a7eb133697038e0fc34476115eb"],["vendor/angular/i18n/angular-locale_en-us.js","b55e03e13600a500be2a3c766b483f6f"],["vendor/angular/i18n/angular-locale_es-es.js","f3ca5cf6acd3ef8a01ac4537586ac89d"],["vendor/angular/i18n/angular-locale_it-it.js","f472dc649f3871b249cee6abed731ce6"],["vendor/angular/i18n/angular-locale_nl-nl.js","b3a86365cc5aa277cec1cb2bba2c171e"],["vendor/angular/i18n/angular-locale_pt-br.js","b3a1f93281bc7cfd7674ef4d55cc815c"],["vendor/angular/i18n/angular-locale_ru-ru.js","9aad04321e01ee3a423168c2f334213f"],["vendor/closure/long.js","7bcf798c67a1ae678a5b14c9e28bf775"],["vendor/cryptoJS/crypto.js","35d44ffed0c530166d72a387c9269a88"],["vendor/jsbn/jsbn_combined.js","a00c793b7b0de8906bef763f312877ee"],["vendor/leemon_bigint/bigint.js","ceddb6b4b1c822311c4b1b855c2672fd"],["vendor/rusha/rusha.js","47e5ebc967d21d86ab4db0a48bb62495"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-Telegram-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




