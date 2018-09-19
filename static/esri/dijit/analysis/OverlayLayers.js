// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/OverlayLayers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_overlaylayersToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"overlayLayersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.overlayLayers}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.overlayLayers}\x3c/a\x3e\r\n                \x3c/nav\x3e                 \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_overlaylayersTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader one-width" data-dojo-attach-point\x3d"_overlaylayersToolDescription"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;" class\x3d"twobythree-width"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput strict-onebythree-width" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseOverlayLayer}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" width\x3d"1%"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"OverlayLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1  longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_overlayFeaturesSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd width\x3d"99%" colspan\x3d"2" style\x3d"white-space:nowrap;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseOverlayMethod}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OverlayType"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e          \r\n        \x3c/tr\x3e  \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"overlayTypeCell" align\x3d\'center\' data-dojo-attach-point\x3d"_intersectBtnCell"\x3e\r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\',checked:true" data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" data-dojo-attach-point\x3d"_intersectBtnCtr" style\x3d"width:100%" data-dojo-attach-event\x3d"onClick:_handleIntersectBtnCtrClick" \x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleIntersectBtnClick" data-dojo-attach-point\x3d"_intersectBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'intersectLayersIcon\',checked:true, style:\'width:36px;height:36px;\',label:\'intersect\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.intersect}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"overlayTypeCell" align\x3d\'center\' data-dojo-attach-point\x3d"_unionBtnCell"\x3e  \r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\'"  data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" data-dojo-attach-point\x3d"_unionBtnCtr" style\x3d"width:100%" data-dojo-attach-event\x3d"onClick:_handleUnionBtnCtrClick"\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleUnionBtnClick" data-dojo-attach-point\x3d"_unionBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'unionLayersIcon\' ,   style:\'width:36px;height:36px;\',label:\'union\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.union}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"overlayTypeCell" align\x3d\'center\' data-dojo-attach-point\x3d"_eraseBtnCell"\x3e\r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\'"  data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" style\x3d"width:100%" data-dojo-attach-point\x3d"_eraseBtnCtr" data-dojo-attach-event\x3d"onClick:_handleEraseBtnCtrClick"\x3e\r\n              \x3cdiv  data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleEraseBtnClick" data-dojo-attach-point\x3d"_eraseBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'eraseLayersIcon\',   style:\'width:36px;height:36px;\',label:\'erase\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.erase}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3ctable data-dojo-attach-point\x3d"_outputTypeTable"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctd\x3e\r\n                  \x3clabel class\x3d"esriLeadingMargin2" data-dojo-attach-point\x3d"_outputTypeLabel"\x3e${i18n.outputLabel}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n                  \x3cselect class\x3d"esriLeadingMargin1 mediumInput esriAnalysisSelect"  style\x3d"table-layout:fixed;width:150px;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_outputTypeSelect"\x3e\r\n                    \x3coption value\x3d"Point"\x3e ${i18n.points}\x3c/option\x3e\r\n                    \x3coption value\x3d"Line"\x3e${i18n.lines}\x3c/option\x3e\r\n                    \x3coption value\x3d"Input"\x3e${i18n.areas}\x3c/option\x3e\r\n                  \x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputLayer" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_overlaylayersToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e     \r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/OverlayLayers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./AnalysisToggleButton ./GroupToggleButton ./utils ./AnalysisRegistry dojo/i18n!../../nls/jsapi dojo/text!./templates/OverlayLayers.html".split(" "),
function(q,w,c,m,t,n,u,x,I,r,e,p,J,h,k,v,y,z,A,B,C,K,L,M,N,O,P,Q,R,S,D,E,F,T,U,V,g,f,G,H){q=w([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.OverlayLayers",templateString:H,widgetsInTemplate:!0,inputLayer:null,overlayLayer:null,overlayType:"intersect",tolerance:0,snapToInput:!1,outputLayerName:null,outputType:"Input",i18n:null,toolName:"OverlayLayers",helpFileName:"OverlayLayers",resultParameter:"Outputlayer",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},
destroy:function(){this.inherited(arguments);m.forEach(this._pbConnects,t.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,G.overlayLayersTool)},postCreate:function(){this.inherited(arguments);k.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",
{save:a})},_buildJobParams:function(){var a={},b;a.inputLayer=n.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams));"0"!==this._overlayFeaturesSelect.get("value")&&(b=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1],a.overlayLayer=n.toJson(this.constructAnalysisInputLyrObj(b,this.showGeoAnalyticsParams)));a.overlayType=this.get("overlayType");this.returnFeatureCollection||(a.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));
this.showGeoAnalyticsParams||("intersect"===this.overlayType&&(a.outputType=this._outputTypeSelect.get("value")),a.tolerance=this.tolerance,a.snapToInput=this.snapToInput);this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=n.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0)),a.context=n.toJson(b));return a},_handleSaveBtnClick:function(a){this._form.validate()&&
(a={},this._saveBtn.set("disabled",!0),a.jobParams=this._buildJobParams(),a.itemParams={description:this.i18n.itemDescription,tags:r.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(a.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output",a.isSpatioTemporalDataStore=!0),this.execute(a))},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,
this._buildJobParams()).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_save:function(){},_sortbyGeometryType:function(a,b){if(this.isPolygon(a.geometryType))return-1;if(this.isPolygon(b.geometryType))return 1;if(this.isLine(a.geometryType))return-1;if(this.isLine(b.geometryType))return 1;if(this.isPoint(a.geometryType))return-1;if(this.isPoint(b.geometryType))return 1},filterOverlayLayers:function(a,b){var l=[];m.forEach(a,function(a){a.geometryType===
b&&l.push(a)});return l},_buildUI:function(){var a=!0;this.signInPromise.then(c.hitch(this,g.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.showGeoAnalyticsParams&&(p.set(this._analysisFieldHelpLink,"esriHelpTopic","overlayLayer"),p.set(this._outputLayerHelpNode,"esriHelpTopic","outputLayer"));this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!g.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),
this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.overlayLayer&&this.oLayer&&!g.isLayerInLayers(this.oLayer,this.overlayLayer)&&this.overlayLayer.push(this.oLayer);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);if(this.oLayer||this.rerun)a=!1;this.inputLayer&&this._updateAnalysisLayerUI(a);g.addReadyToUseLayerOption(this,[this._analysisSelect,
this._overlayFeaturesSelect]);e.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(c.hitch(this,function(a){this.folderStore=a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));this.updateUIForGeoAnalytics();e.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":
"none");e.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections()},_updateAnalysisLayerUI:function(a){this.inputLayer&&p.set(this._overlaylayersToolDescription,"innerHTML",r.substitute(this.i18n.overlayDefine,{layername:this.inputLayer.name}));if(this.overlayLayer){this.overlayLayer.sort(c.hitch(this,this._sortbyGeometryType));var b=m.some(this._overlayFeaturesSelect.getOptions(),function(a){return"browse"===a.value},this),l=m.some(this._overlayFeaturesSelect.getOptions(),
function(a){return"browselayers"===a.value},this),d=[],f=this._overlayFeaturesSelect.get("value");this._overlayFeaturesSelect.removeOption(this._overlayFeaturesSelect.getOptions());this.rerun&&!this.overlayLayer&&g.addBlankOption(this._overlayFeaturesSelect,d);var e=this.overlayLayer.concat([]);this.showGeoAnalyticsParams&&(e=this.filterOverlayLayers(this.overlayLayer,this._getGeometryType()));m.forEach(e,function(b,l){var c=!0;b.url&&this.inputLayer.url&&b.url!==this.inputLayer.url?c=!1:this.inputLayer===
b||b.analysisReady&&this.inputLayer.analysisReady||(c=!1);!c&&(this.isPolygon(b.geometryType)||this.isPoint(b.geometryType)||this.isLine(b.geometryType))&&d.push({value:l+1,label:b.name,selected:this.oLayer&&!a&&(this.oLayer.url&&b.url&&b.url===this.oLayer.url||this.oLayer.name===b.name)})},this);(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||b||l)&&d.push({type:"separator",value:""});this.get("showReadyToUseLayers")&&b&&d.push({value:"browse",label:this.i18n.browseAnalysisTitle});
this.get("showBrowseLayers")&&l&&d.push({value:"browselayers",label:this.i18n.browseLayers});this._overlayFeaturesSelect.addOption(d);a&&this._overlayFeaturesSelect.set("value",f);this._handleLayerChange(this._overlayFeaturesSelect.get("value"))}this.overlayType&&("intersect"===this.overlayType?(this._intersectBtn.set("checked",!0),this._handleIntersectBtnClick()):"union"===this.overlayType?(this._unionBtn.set("checked",!0),this._handleUnionBtnClick()):"erase"===this.overlayType&&(this._eraseBtn.set("checked",
!0),this._handleEraseBtnClick()));this.outputType&&this._outputTypeSelect.set("value",this.outputType);!a&&this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);this.updateUIForGeoAnalytics()},_handleAnalysisLayerChange:function(a){this._checkBrowseLayer(a,!0)||(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},updateUIForGeoAnalytics:function(){this.showGeoAnalyticsParams&&(e.set(this._unionBtnCell,"display","none"),e.set(this._outputTypeTable,"display",
"none"),k.add(this._intersectBtnCell,"gaxOverlayTypeCell"),k.add(this._eraseBtnCell,"gaxOverlayTypeCell"))},_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.overlayLayer,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._overlayFeaturesSelect,browseDialog:a.dialog||this._browsedlg,posIncrement:this._isAnalysisSelect?0:1,widget:this}).always(c.hitch(this,function(a){this._isAnalysisSelect&&
(this.inputLayer=this.inputLayers[this._analysisSelect.get("value")])&&(m.some(this.overlayLayer,function(a){return a&&a.analysisReady&&this.inputLayer.analysisReady&&a.itemId===this.inputLayer.itemId},this)||this.overlayLayer.push(this.inputLayer));this._isAnalysisSelect&&this._handleAnalysisLayerChange(this._analysisSelect.get("value"))}))},_checkBrowseLayer:function(a,b){return"browse"===a?(b||(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",
this._analysisquery)),this._isAnalysisSelect=b,this._filterLayersForGeometryType(b,!0),this._browsedlg.show(),!0):"browselayers"===a?(this.showGeoAnalyticsParams&&(h=this._browseLyrsdlg.browseItems.get("query"),g.isBigDataTypeTobeAdded(h.types)&&(h.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",h))),this._isAnalysisSelect=b,this._filterLayersForGeometryType(b,!1),this._browseLyrsdlg.show(),!0):!1},_filterLayersForGeometryType:function(a,b){this.showGeoAnalyticsParams&&
(b?(h=this._browsedlg.browseItems.get("query"),h.custom=this._getLivingAtlasfilterTypes(a),this._browsedlg.browseItems.set("query",h)):this._browseLyrsdlg.browseItems.plugIn.geometryTypes=this._getBrowseLayerFilterTypes(a))},_getLivingAtlasfilterTypes:function(a){return a?['tags:["point","polygon","line"]']:['tags:"'+this._getInputLivingAtlasType()+'"']},_getBrowseLayerFilterTypes:function(a){return a?[f.GeometryTypes.Point,f.GeometryTypes.Polygon,f.GeometryTypes.Line]:[this._getGeometryType()]},
_getInputLivingAtlasType:function(){if(this.inputLayer){if(this.isPoint(this._getGeometryType()))return"point";if(this.isPolygon(this._getGeometryType()))return"polygon";if(this.isLine(this._getGeometryType()))return"line"}return'"point","polygon","line"'},_getGeometryType:function(){return this.inputLayer?this.inputLayer.geometryType:[f.GeometryTypes.Point,f.GeometryTypes.Polygon,f.GeometryTypes.Line]},isPolygon:function(a){return f.GeometryTypes.Polygon===a},isPoint:function(a){return f.GeometryTypes.Point===
a},isLine:function(a){return f.GeometryTypes.Line===a},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_handleLayerChange:function(a){var b,c,d;this._checkBrowseLayer(a,!1)||(a=this.overlayLayer[a-1],b=!1,d=this.get("overlayType"),a&&this.inputLayer&&(c=!this.isPolygon(this.inputLayer.geometryType)||!this.isPolygon(a.geometryType),this._unionBtn.set("disabled",c),this._unionBtn.set("iconClass",c?"unionLayersDisabledIcon":
"unionLayersIcon"),this.isPolygon(this.inputLayer.geometryType)?b=this.isPolygon(this.inputLayer.geometryType)&&!this.isPolygon(a.geometryType):this.isLine(this.inputLayer.geometryType)?b=this.isLine(this.inputLayer.geometryType)&&this.isPoint(a.geometryType):this.isLine(this.inputLayer.geometryType)&&(b=!0),this._eraseBtn.set("disabled",b),this._eraseBtn.set("iconClass",b?"eraseLayersDisabledIcon":"eraseLayersIcon"),"union"!==d||this.isPolygon(this.inputLayer.geometryType)&&!this.isPolygon(a.geometryType)?
"erase"===d&&this.isLine(this.inputLayer.geometryType)&&this.isPoint(a.geometryType)?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"erase"===d&&this.isPolygon(this.inputLayer.geometryType)&&!this.isPolygon(a.geometryType)?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"intersect"===d?this._handleIntersectBtnCtrClick():"union"===
d?this._handleUnionBtnCtrClick():"erase"===d&&this._handleEraseBtnCtrClick():(this._showMessages(this.i18n.overlayLayerPolyMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick())));this.updateUIForGeoAnalytics()},_showMessages:function(a){p.set(this._bodyNode,"innerHTML",a);u.fadeIn({node:this._errorMessagePane,easing:v.quadIn,onEnd:c.hitch(this,function(){e.set(this._errorMessagePane,{display:""})})}).play();window.setTimeout(c.hitch(this,this._handleCloseMsg),3E3)},_handleCloseMsg:function(a){a&&
a.preventDefault();u.fadeOut({node:this._errorMessagePane,easing:v.quadOut,onEnd:c.hitch(this,function(){e.set(this._errorMessagePane,{display:"none"})})}).play()},_updateOutputType:function(){var a,b;"0"!==this._overlayFeaturesSelect.get("value")&&(a=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1]);b=this.isPoint(this.inputLayer.geometryType)||this.inputLayer.geometryType===f.GeometryTypes.MultiPoint||this.isPoint(a.geometryType)||a.geometryType===f.GeometryTypes.MultiPoint;e.set(this._outputTypeTable,
"display","table");this._outputTypeSelect.removeOption(this._outputTypeSelect.getOptions());this._outputTypeSelect.set("disabled",b);b?k.add(this._outputTypeLabel,"esriAnalysisTextDisabled"):k.remove(this._outputTypeLabel,"esriAnalysisTextDisabled");b?this._outputTypeSelect.addOption({value:"Input",label:this.i18n.points}):this.isLine(this.inputLayer.geometryType)&&this.isLine(a.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}]):
this.isPolygon(this.inputLayer.geometryType)&&this.isPolygon(a.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points},{value:"Line",label:this.i18n.lines},{value:"Input",label:this.i18n.areas,selected:!0}]):this.isLine(this.inputLayer.geometryType)&&this.isPolygon(a.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}]):this.isPolygon(this.inputLayer.geometryType)&&this.isLine(a.geometryType)&&
this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}])},_handleUnionBtnCtrClick:function(){this._unionBtnCtr.set("checked",!0);this._unionBtn.set("checked",!0);e.set(this._outputTypeTable,"display","none");this._outputTypeSelect.set("disabled",!0);k.add(this._outputTypeLabel,"esriAnalysisTextDisabled");this._handleUnionBtnClick()},_handleIntersectBtnCtrClick:function(){this._intersectBtnCtr.set("checked",!0);this._intersectBtn.set("checked",
!0);this._overlayFeaturesSelect.get("value");this._handleIntersectBtnClick();this.showGeoAnalyticsParams||this._updateOutputType();this.updateUIForGeoAnalytics()},_handleEraseBtnCtrClick:function(){this._eraseBtnCtr.set("checked",!0);this._eraseBtn.set("checked",!0);e.set(this._outputTypeTable,"display","none");this._outputTypeSelect.set("disabled",!0);k.add(this._outputTypeLabel,"esriAnalysisTextDisabled");this._handleEraseBtnClick()},_handleUnionBtnClick:function(a){this._canSelectOverlayType()||
(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.unionOutputLyrName)),this._unionBtn.focus(),this.set("OverlayType","union"))},_handleEraseBtnClick:function(a){this._canSelectOverlayType()||(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.eraseOutputLyrName)),this._eraseBtn.focus(),this.set("OverlayType","erase"))},_handleIntersectBtnClick:function(a){this._canSelectOverlayType()||(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.intersectOutputLyrName)),
this._intersectBtn.focus(),this.set("OverlayType","intersect"))},_getOutputLayerName:function(a){var b=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1].name;return r.substitute(a,{layername:this.inputLayer.name,overlayname:b})},_canSelectOverlayType:function(){return"browse"===this._overlayFeaturesSelect.get("value")||"browselayers"===this._overlayFeaturesSelect.get("value")||""===this._overlayFeaturesSelect.get("value")||!this.inputLayer},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=
a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setInputLayersAttr:function(a){this.inputLayers=a||[]},_setOverlayLayerAttr:function(a){this.overlayLayer=a},_setOverlayTypeAttr:function(a){this.overlayType=a},_getOverlayTypeAttr:function(){return this.overlayType},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setOutputTypeAttr:function(a){this.outputType=a},_getOutputTypeAttr:function(){return this.outputType},
validateServiceName:function(a){return g.validateServiceName(a,{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(t.connect(a,b,c))}});x("extend-esri")&&c.setObject("dijit.analysis.OverlayLayers",q,D);return q});