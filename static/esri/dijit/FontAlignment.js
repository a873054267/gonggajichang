// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/FontAlignment.html":'\x3cdiv class\x3d"esriFontAlignment"\x3e\r\n  \x3cdiv class\x3d"top"\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"baseline,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-right"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"baseline,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-mid"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"baseline,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"bot-left"\x3e\x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"mid"\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"middle,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-right"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"middle,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-mid"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"middle,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"mid-left"\x3e\x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"bot"\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"top,right" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-right"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"top,center" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-mid"\x3e\x3c/button\x3e\r\n    \x3cbutton class\x3d"icon" value\x3d"top,left" data-dojo-attach-event\x3d"onClick:changeValue"\x3e\x3cdiv class\x3d"top-left"\x3e\x3c/div\x3e\x3c/button\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/FontAlignment","require dojo/_base/declare dojo/_base/lang dojo/has ../kernel dojo/_base/array dojo/query dojo/dom-class dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FontAlignment.html".split(" "),function(a,f,g,h,k,d,e,b,l,m,n,p){a=f([l,m,n],{declaredClass:"esri.dijit.FontAlignment",templateString:p,widgetsInTemplate:!0,value:null,_imageUrl:a.toUrl("./images/positionSprite.png"),destroy:function(){this.inherited(arguments)},setValue:function(c){this.value=
c;var a=e("button",this.domNode);d.forEach(a,function(a){a.value===c?b.add(a,"selectedFontAlignment"):b.remove(a,"selectedFontAlignment")})},getValue:function(){return this.value},changeValue:function(a){var c=e("button",this.domNode);d.forEach(c,function(a){b.remove(a,"selectedFontAlignment")});b.add(a.currentTarget,"selectedFontAlignment");this.value=a.currentTarget.value;this.emit("change",{value:this.value})}});h("extend-esri")&&g.setObject("dijit.FontAlignment",a,k);return a});