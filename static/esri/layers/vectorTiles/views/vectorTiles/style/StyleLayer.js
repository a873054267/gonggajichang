// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/style/StyleLayer","require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ./Filter ./StyleDefinition ./StyleProperty".split(" "),function(e,f,k,h,m,g,l){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function c(a,d,b){this.type=a;this.id=d.id;this.source=d.source;this.sourceLayer=d["source-layer"];this.minzoom=d.minzoom;this.maxzoom=d.maxzoom;this.filter=d.filter;this.layout=d.layout;this.paint=
d.paint;this.z=b;switch(a){case 0:this._layoutDefinition=g.StyleDefinition.backgroundLayoutDefinition;this._paintDefinition=g.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=g.StyleDefinition.fillLayoutDefinition;this._paintDefinition=g.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=g.StyleDefinition.lineLayoutDefinition;this._paintDefinition=g.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=g.StyleDefinition.symbolLayoutDefinition;
this._paintDefinition=g.StyleDefinition.symbolPaintDefinition;break;case 4:this._layoutDefinition=g.StyleDefinition.circleLayoutDefinition,this._paintDefinition=g.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout);this._paintProperties=this._parsePaint(this.paint)}c.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=m.createFilter(this.filter)};c.prototype.getLayoutProperty=function(a){var d=this._layoutProperties;
if(d)return d[a]};c.prototype.getPaintProperty=function(a){var d=this._paintProperties;if(d)return d[a]};c.prototype.getLayoutValue=function(a,d,b){var c,e=this._layoutProperties;e&&(e=e[a])&&(c=e.getValue(d,b));a=this._layoutDefinition[a];void 0===c&&(c=a["default"]);"enum"===a.type&&(c=a.values.indexOf(c));return c};c.prototype.getPaintValue=function(a,d,b){var c,e=this._paintProperties;e&&(e=e[a])&&(c=e.getValue(d,b));a=this._paintDefinition[a];void 0===c&&(c=a["default"]);"enum"===a.type&&(c=
a.values.indexOf(c));return c};c.prototype._parseLayout=function(a){var d={},b;for(b in a){var c=this._layoutDefinition[b];c&&(d[b]=new l(b,c,a[b]))}return d};c.prototype._parsePaint=function(a){var d={},b;for(b in a){var c=this._paintDefinition[b];c&&(d[b]=new l(b,c,a[b]))}return d};return c}();f.StyleLayer=e;h=function(c){function a(d,b,a){return c.call(this,d,b,a)||this}k(a,c);return a}(e);f.BackgroundStyleLayer=h;h=function(c){function a(d,b,a){d=c.call(this,d,b,a)||this;d.hasDataDrivenFill=!1;
(b=d.getPaintProperty("fill-color"))&&b.isDataDriven&&(d.hasDataDrivenFill=!0);(a=d.getPaintProperty("fill-opacity"))&&a.isDataDriven&&(d.hasDataDrivenFill=!0);d.hasDataDrivenOutline=!1;(a=d.getPaintProperty("fill-outline-color"))&&a.isDataDriven&&(d.hasDataDrivenOutline=!0);!a&&b&&b.isDataDriven&&(d.hasDataDrivenOutline=!0);return d}k(a,c);return a}(e);f.FillStyleLayer=h;h=function(c){function a(a,b,e){a=c.call(this,a,b,e)||this;a.hasDataDrivenLine=!1;(b=a.getPaintProperty("line-color"))&&b.isDataDriven&&
(a.hasDataDrivenLine=!0);(b=a.getPaintProperty("line-opacity"))&&b.isDataDriven&&(a.hasDataDrivenLine=!0);(b=a.getPaintProperty("line-width"))&&b.isDataDriven&&(a.hasDataDrivenLine=!0);return a}k(a,c);return a}(e);f.LineStyleLayer=h;h=function(c){function a(a,b,e){a=c.call(this,a,b,e)||this;a.hasDataDrivenIcon=!1;(b=a.getPaintProperty("icon-color"))&&b.isDataDriven&&(a.hasDataDrivenIcon=!0);(b=a.getPaintProperty("icon-opacity"))&&b.isDataDriven&&(a.hasDataDrivenIcon=!0);(b=a.getLayoutProperty("icon-size"))&&
b.isDataDriven&&(a.hasDataDrivenIcon=!0);a.hasDataDrivenText=!1;(b=a.getPaintProperty("text-color"))&&b.isDataDriven&&(a.hasDataDrivenText=!0);(b=a.getPaintProperty("text-opacity"))&&b.isDataDriven&&(a.hasDataDrivenText=!0);(b=a.getLayoutProperty("text-size"))&&b.isDataDriven&&(a.hasDataDrivenText=!0);return a}k(a,c);return a}(e);f.SymbolStyleLayer=h;e=function(c){function a(a,b,e){return c.call(this,a,b,e)||this}k(a,c);return a}(e);f.CircleStyleLayer=e;e=function(){return function(c,a,d){this.cap=
c.getLayoutValue("line-cap",a,d);this.join=c.getLayoutValue("line-join",a,d);this.miterLimit=c.getLayoutValue("line-miter-limit",a,d);this.roundLimit=c.getLayoutValue("line-round-limit",a,d)}}();f.LineLayout=e;e=function(){return function(c,a,d,b){this.allowOverlap=c.getLayoutValue("icon-allow-overlap",a,b);this.ignorePlacement=c.getLayoutValue("icon-ignore-placement",a,b);this.optional=c.getLayoutValue("icon-optional",a,b);this.rotationAlignment=c.getLayoutValue("icon-rotation-alignment",a,b);this.size=
c.getLayoutValue("icon-size",a,b);this.rotate=c.getLayoutValue("icon-rotate",a,b);this.padding=c.getLayoutValue("icon-padding",a,b);this.keepUpright=c.getLayoutValue("icon-keep-upright",a,b);this.offset=c.getLayoutValue("icon-offset",a,b);2===this.rotationAlignment&&(this.rotationAlignment=d?0:1)}}();f.IconLayout=e;e=function(){return function(c,a,d,b){this.allowOverlap=c.getLayoutValue("text-allow-overlap",a,b);this.ignorePlacement=c.getLayoutValue("text-ignore-placement",a,b);this.optional=c.getLayoutValue("text-optional",
a,b);this.rotationAlignment=c.getLayoutValue("text-rotation-alignment",a,b);this.fontArray=c.getLayoutValue("text-font",a,b);this.maxWidth=c.getLayoutValue("text-max-width",a,b);this.lineHeight=c.getLayoutValue("text-line-height",a,b);this.letterSpacing=c.getLayoutValue("text-letter-spacing",a,b);this.justify=c.getLayoutValue("text-justify",a,b);this.anchor=c.getLayoutValue("text-anchor",a,b);this.maxAngle=c.getLayoutValue("text-max-angle",a,b);this.size=c.getLayoutValue("text-size",a,b);this.rotate=
c.getLayoutValue("text-rotate",a,b);this.padding=c.getLayoutValue("text-padding",a,b);this.keepUpright=c.getLayoutValue("text-keep-upright",a,b);this.transform=c.getLayoutValue("text-transform",a,b);this.offset=c.getLayoutValue("text-offset",a,b);2===this.rotationAlignment&&(this.rotationAlignment=d?0:1)}}();f.TextLayout=e});