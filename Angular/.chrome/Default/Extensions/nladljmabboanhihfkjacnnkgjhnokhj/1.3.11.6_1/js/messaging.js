"use strict";!function(){uBlock;vAPI.messaging.setup(function(a,e,t){a.what;var n;e&&e.tab&&e.tab.id;switch(a.what){case"getAppData":n={name:vAPI.app.name,version:vAPI.app.version};break;default:return vAPI.messaging.UNHANDLED}t(n)})}(),function(){uBlock;vAPI.messaging.listen("adaware-telemetry",function(a,e,t){a.what,adawareTelemetry.sendEventTrackingInfo(a.what,a.data),t(void 0)})}(),function(){var a=uBlock;vAPI.messaging.listen("new-tab",function(e,t,n){var r,s,i;switch(e.what,e.what){case"searchBarEntry":r=a.SEARCH_ENGINE_URL+"/?q="+e.data;break;case"setSearch":a.webCompanionData.searchEngine=a.SEARCH_TO_NUM_MAP[e.search],vAPI.storage.set({webCompanionData:a.webCompanionData});var o={SE_provider:e.search,install_date:a.webCompanionData.iDate,partner_id:adawareTelemetry.getExternalData().PartnerID,browser_name:vAPI.browserShortName},c=(Date.now()+15768e8)/1e3;a.SEARCH_ENGINE_URL;var v=(i=c,{host:"defaultsearch.co",path:"/",name:"search_companion",value:"object"==typeof(s=o)?JSON.stringify(s):s,isSecure:!1,isHttpOnly:!1,isSession:!1,expiry:i});vAPI.setCookie(v);break;case"getSearch":r=a.NUM_TO_SEARCH_MAP[a.webCompanionData.searchEngine];break;default:return vAPI.messaging.UNHANDLED}n(r)})}();