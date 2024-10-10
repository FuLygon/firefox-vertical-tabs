user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.urlbar.trimHttps", true);

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 130                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("dom.enable_web_task_scheduling", true);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: Cookie Banner handling
// [NOTE] Feature still enforces Total Cookie Protection to limit 3rd-party cookie tracking [1]
// [1] https://github.com/mozilla/cookie-banner-rules-list/issues/33#issuecomment-1318460084
// [2] https://phabricator.services.mozilla.com/D153642
// [3] https://winaero.com/make-firefox-automatically-click-on-reject-all-in-cookie-banner-consent/
// [4] https://docs.google.com/spreadsheets/d/1Nb4gVlGadyxix4i4FBDnOeT_eJp2Zcv69o-KfHtK-aA/edit#gid=0
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);


/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************************
 * OPTION: SHARPEN SCROLLING                                                           *
****************************************************************************************/
// credit: https://github.com/black7375/Firefox-UI-Fix
// only sharpen scrolling
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("mousewheel.min_line_scroll_amount", 10); // 10-40; adjust this number to your liking; default=5
// user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
// user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
// Firefox Nightly only:
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
// user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]

/****************************************************************************************
 * OPTION: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                                       *
****************************************************************************************/
// recommended for 60hz+ displays
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking
// Firefox Nightly only:
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
// user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]

/****************************************************************************************
 * OPTION: SMOOTH SCROLLING                                                            *
****************************************************************************************/
// recommended for 90hz+ displays
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("general.smoothScroll.msdPhysics.enabled", true);
// user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking