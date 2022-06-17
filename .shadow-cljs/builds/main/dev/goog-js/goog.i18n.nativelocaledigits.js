["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/i18n/nativelocaledigits.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.i18n.NativeLocaleDigits\");\n  let LocaleScriptMap;\n  exports.LocaleScriptMap;\n  exports.FormatWithLocaleDigits = {\"ar\":\"latn\", \"ar-EG\":\"arab\", \"bn\":\"beng\", \"fa\":\"arabext\", \"mr\":\"deva\", \"my\":\"mymr\", \"ne\":\"deva\"};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n// clang-format off\n\ngoog.module('goog.i18n.NativeLocaleDigits');\n\n/**\n * @fileoverview Provides map of locales to script identifiers\n * where locales require specific digits other than ASCII.\n */\n\n/**\n * Type of map from locale string to script codes\n * @typedef {!Object<string,string>}\n */\nlet LocaleScriptMap;\n\n/** @typedef {{LocaleScriptMap}} */\nexports.LocaleScriptMap;\n\n/**\n * Native digit codes in ECMAScript Intl objects for locales\n * where native digits are prescribed and Intl data is generally available.\n * This is designed for classes that create locale-specific\n * numbers. Examples include number and date/time formatting.\n * @const {!LocaleScriptMap}\n */\nexports.FormatWithLocaleDigits = {\n  'ar': 'latn',\n  'ar-EG': 'arab',\n  'bn': 'beng',\n  'fa': 'arabext',\n  'mr': 'deva',\n  'my': 'mymr',\n  'ne': 'deva'\n};\n","~:compiled-at",1655145794750,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.i18n.nativelocaledigits.js\",\n\"lineCount\":9,\n\"mappings\":\"AAQA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,8BAAZ,CAAA;AAWA,MAAIC,eAAJ;AAGAC,SAAQD,CAAAA,eAAR;AASAC,SAAQC,CAAAA,sBAAR,GAAiC,CAC/B,KAAM,MADyB,EAE/B,QAAS,MAFsB,EAG/B,KAAM,MAHyB,EAI/B,KAAM,SAJyB,EAK/B,KAAM,MALyB,EAM/B,KAAM,MANyB,EAO/B,KAAM,MAPyB,CAAjC;AAvBA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/i18n/nativelocaledigits.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n// clang-format off\\n\\ngoog.module('goog.i18n.NativeLocaleDigits');\\n\\n/**\\n * @fileoverview Provides map of locales to script identifiers\\n * where locales require specific digits other than ASCII.\\n */\\n\\n/**\\n * Type of map from locale string to script codes\\n * @typedef {!Object<string,string>}\\n */\\nlet LocaleScriptMap;\\n\\n/** @typedef {{LocaleScriptMap}} */\\nexports.LocaleScriptMap;\\n\\n/**\\n * Native digit codes in ECMAScript Intl objects for locales\\n * where native digits are prescribed and Intl data is generally available.\\n * This is designed for classes that create locale-specific\\n * numbers. Examples include number and date/time formatting.\\n * @const {!LocaleScriptMap}\\n */\\nexports.FormatWithLocaleDigits = {\\n  'ar': 'latn',\\n  'ar-EG': 'arab',\\n  'bn': 'beng',\\n  'fa': 'arabext',\\n  'mr': 'deva',\\n  'my': 'mymr',\\n  'ne': 'deva'\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"LocaleScriptMap\",\"exports\",\"FormatWithLocaleDigits\"]\n}\n"]