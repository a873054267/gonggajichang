// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/srv/templates/ServiceType.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'srv:serviceType\',\r\n      label:\'${i18nIso.SV_ServiceIdentification.serviceType}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n      data-dojo-props\x3d"target:\'gco:LocalName\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.mapService}\',value:\'Map Service\'"\x3e\x3c/div\x3e    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.featureService}\',value:\'Feature Service\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.imageService}\',value:\'Image Service\'"\x3e\x3c/div\x3e  \r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.wms}\',value:\'WMS\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.wfs}\',value:\'WFS\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.serviceTypes.wcs}\',value:\'WCS\'"\x3e\x3c/div\x3e  \r\n                        \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nBase.general.other}\',value:\'_other_\',isOther:true"\x3e\x3c/div\x3e  \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/srv/ServiceType","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputSelectOne ../../../form/Options ../../../form/Option ../../../form/iso/GcoElement dojo/text!./templates/ServiceType.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.srv.ServiceType",a,f);return a});