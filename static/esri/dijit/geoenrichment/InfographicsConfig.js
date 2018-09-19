// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/InfographicsConfig","../../declare dojo/_base/lang dojo/string ./_Wizard ./InfographicsOptions ./InfographicsMainPage ./DataBrowser ./lang dojo/i18n!../../nls/jsapi".split(" "),function(n,b,u,p,k,q,r,t,v){return n("esri.dijit.geoenrichment.InfographicsConfig",[p],{options:null,constructor:function(){this.pages.m=new q({onAddVariables:b.hitch(this,this._addVariables),onOK:b.hitch(this,this._onOK),onCancel:b.hitch(this,this._onCancel)})},startup:function(){this._started||
(this.inherited(arguments),this.options||this.set("options",new k),this.loadPage("m"))},_setOptionsAttr:function(d){this._set("options",d);this.pages.m.set("options",d)},_getCountryIDAttr:function(){return this.pages.m.get("countryID")},_setCountryIDAttr:function(d){this.pages.m.set("countryID",d)},_addVariables:function(){var d=this,e=this.get("countryID"),a=this.pages.db;a?a.set("countryID",e):(a=new r({countryID:e,countryBox:!1,title:this.pages.m.nls.mainTitle}),a.on("back",b.hitch(this,this.loadPage,
"m")),a.on("cancel",b.hitch(this,this._onCancel)),a.on("ok",b.hitch(this,this._applyVariables)),this.pages.db=a);var l=[];this.options.getItems(e).then(function(g){for(var e=0;e<g.length;e++){var f=g[e];"OneVar"==f.type&&1==f.variables.length&&l.push(f.variables[0])}a.set("selection",l);d.loadPage("db");a.launch()})},_applyVariables:function(){function d(a){for(var e=0;e<b.length;e++);return null[a]}for(var e=this,a=this.pages.m.get("countryID"),b=this.pages.db.dataCollections[a],g={},m=this.pages.db.get("selection"),
f=0;f<m.length;f++){var c=m[f];if(t.endsWith(c,".*"))for(var c=c.split(".")[0],h=d(c).variables,c=0;c<h.length;c++)g[h[c].fullName]=!0;else g[c]=!0}this.options.getItems(a).then(function(a){var c,b;for(c=a.length-1;0<=c;c--)if(b=a[c],"OneVar"==b.type&&1==b.variables.length){var d=h.get(b.variables[0]);d&&g[d.fullName]?delete g[d.fullName]:a.splice(c,1)}for(var f in g)d=h.get(f),b=new k.Item("OneVar",[f]),b.title=d.alias,a.push(b);e.loadPage("m");e.pages.m.set("options",e.options)})},_onOK:function(){this.emit("ok")},
_onCancel:function(){this.emit("cancel")}})});