// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/storageUtils","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/promise/all dojo/has dojo/json ../../request ../../kernel".split(" "),function(l,m,f,g,n,p,e,k,q){m={MAX_RESOURCES:10,checkResourceLimit:!0,_getItemUrl:function(b){var a=b.folderId||b.ownerFolder;return this._portalUrl+"/sharing/rest/content/users/"+b.owner+"/"+(a?a+"/":"")+"/items/"+b.id},addToItemResource:function(b,a){var c,d;this._portalUrl=a.portalUrl;delete a.portalUrl;c=this._getItemUrl(b);
c+="/addResources";d={filename:a.jobInfo.jobId+".json",text:e.stringify(a),resourcesPrefix:"jobs",f:"json"};return k({url:c,content:d},{usePost:!0})},getItemResource:function(b,a){var c;a&&a.portalUrl&&(this._portalUrl=a.portalUrl);c=this._getItemUrl(b);c+="/resources/"+a.resource;return k({url:c,content:{f:"json"}})},removeItemResource:function(b,a){var c;a&&a.portalUrl&&(this._portalUrl=a.portalUrl);c=this._getItemUrl(b);return k({url:c+"/removeResources",content:{resource:a.resource,deleteAll:a.deleteAll,
f:"json"}},{usePost:!0})},addToStorage:function(b){if(window.sessionStorage){var a=window.sessionStorage.getItem("esri_analysis_jobhistory"),a=a?e.parse(a):[];a.push(b);window.sessionStorage.setItem("esri_analysis_jobhistory",e.stringify(a))}},addAllToStorage:function(b){window.sessionStorage&&window.sessionStorage.setItem("esri_analysis_jobhistory",e.stringify(b))},removeFromStorage:function(b){if(window.sessionStorage){var a=window.sessionStorage.getItem("esri_analysis_jobhistory");a&&(a=e.parse(a));
a=l.filter(a,function(a){return a.jobInfo&&a.jobInfo.jobId!==b.jobInfo.jobId});window.sessionStorage.setItem("esri_analysis_jobhistory",e.stringify(a))}},removeAllFromStorage:function(){window.sessionStorage&&window.sessionStorage.removeItem("esri_analysis_jobhistory")},getJobsInfoList:function(){var b;window.sessionStorage&&(b=window.sessionStorage.getItem("esri_analysis_jobhistory"))&&(b=e.parse(b));return b},addItemResources:function(b,a){var c=this.getJobsInfoList(),d=[];l.forEach(c,function(c){c.portalUrl=
a.portalUrl;var h=new g;d.push(h);this.addToItemResource(b,c).then(f.hitch(this,function(a){a&&!0===a.success&&(this.removeFromStorage(c),h.resolve(a))}))},this);return n(d)},saveJobsQueue:function(b,a){var c=this.getJobsInfoList(),d=new g;c&&0<c.length&&this.removeResourceQueue(b,a).then(f.hitch(this,function(){if(c.length>this.MAX_RESOURCES){for(this.sortJobsInfoList(c,{asc:!1});c.length>this.MAX_RESOURCES;)c.pop();this.addAllToStorage(c)}this.addItemResources(b,a).then(f.hitch(this,function(a){d.resolve(a)}),
f.hitch(this,function(a){d.reject(a)}))}),f.hitch(this,function(a){d.reject(a)}));return d.promise},saveJobsInfoList:function(b,a){return this.checkResourceLimit?this.saveJobsQueue(b,a):this.addItemResources(b,a)},getResources:function(b,a){var c;a&&a.portalUrl&&(this._portalUrl=a.portalUrl);c=this._getItemUrl(b);return k({url:c+"/resources",content:{f:"json"}})},getResourcesInfo:function(b,a){var c=[],d=new g;this.sortResources(b,a).then(f.hitch(this,function(r){l.forEach(r.resources,function(d){a.resource=
d.resource;c.push(this.getItemResource(b,a))},this);n(c).then(f.hitch(this,function(a){d.resolve(a)}),f.hitch(this,function(a){d.reject(a)}))}),f.hitch(this,function(a){d.reject(a)}));return d.promise},sortJobsInfoList:function(b,a){b.sort(f.hitch(this,function(b,d){return a.asc?b.timestamp-d.timestamp:d.timestamp-b.timestamp}))},sortResources:function(b,a){var c=new g;this.getResources(b,a).then(f.hitch(this,function(b){b.resources&&0<b.resources.length&&b.resources.sort(f.hitch(this,function(b,
c){return a.asc?b.created-c.created:c.created-b.created}));c.resolve(b)}),f.hitch(this,function(a){c.reject(a)}));return c.promise},removeResourceQueue:function(b,a){var c=new g,d=[],e,h;e=this.getJobsInfoList().length;h=this.MAX_RESOURCES-e;h=0<h?h:0;a.asc=!0;this.sortResources(b,a).then(f.hitch(this,function(e){var g;if(e&&e.resources&&0<e.resources.length)if(0===h)g=e.resources.shift(),a.resource=g.resource,a.deleteAll=!0,d.push(this.removeItemResource(b,a)),e.resources=[];else for(;e.resources.length>
h;)g=e.resources.shift(),a.resource=g.resource,d.push(this.removeItemResource(b,a));n(d).always(f.hitch(this,function(){c.resolve(e)}))}),f.hitch(this,function(a){c.reject(a)}));return c.promise}};p("extend-esri")&&f.setObject("dijit.analysis.storageUtils",m,q);return m});