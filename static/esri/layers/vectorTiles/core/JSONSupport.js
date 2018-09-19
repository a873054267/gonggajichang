// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/JSONSupport","require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./Accessor ./declare ./accessorSupport/decorators ./accessorSupport/read ./accessorSupport/write".split(" "),function(p,q,h,k,l,d,e,m,n){function f(a,b){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");var g=new this;g.read(a,b);return g}var c=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}h(b,a);b.prototype.read=
function(a,b){m.default(this,a,b);return this};b.prototype.write=function(a,b){return n.default(this,a||{},b)};b.prototype.toJSON=function(a){return this.write(null,a)};b.fromJSON=function(a,b){return f.call(this,a,b)};return b=k([e.subclass("esri.core.JSONSupport")],b)}(e.declared(l));c.prototype.toJSON.isDefaultToJSON=!0;d.after(function(a){d.hasMixin(a,c)&&(a.fromJSON=f.bind(a))});return c});