// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/FGDC_Temporal","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,h,f,g,k,l,m,n,p){d=d(n,{key:"FGDC_Temporal",postCreate:function(){this.inherited(arguments);var b=this;this.own(g.subscribe("gxe/optional-content-toggled",function(a){try{if(b.parentXNode&&a&&a.src&&a.src.target){var c=
a.src.target;"dataExt"!==c&&"tempEle"!==c||b.emitInteractionOccurred()}}catch(e){console.error(e)}}));this.own(g.subscribe("gxe/after-xnode-destroyed",function(a){try{if(b.parentXNode&&a&&a.xnode){var c=a.xnode.gxePath;"/metadata/dataIdInfo/dataExt"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/tempEle"===c&&b.emitInteractionOccurred()}}catch(e){console.error(e)}}))},ensureFocus:function(){p.ensureVisibility(this.parentXNode);f.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return f.some(b.getChildren(),
function(a){if(a.isExtentSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:m.conditionals[this.key]}),c=!1;this.forActiveXNodes("/metadata/dataIdInfo/dataExt/tempEle",this.parentXNode.domNode,function(a){c=!0});a.isValid=c;this.track(a,b);return a}});k("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Temporal",d,l);return d});