// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/themes/ThemeUpdateUtil",["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ThemeLibrary","./ThemeUtil"],function(c,g,h,d){return{populateMissingStyles:function(a){if(a){a.table.overrideStyles||(a.table={overrideStyles:c.mixin({},a.table)});var b=d.getThemeColors(a),e=h.getDefaultTheme({defaultFontFamilty:a.document.fontFamily,defaultFontSize:a.document.fontSize}),f=a.chart.colors.slice();d.applyThemeColorsToTheme(e,b,f);g.populateObject(a,
e,!1);b=a.chart;b.colors=f;b.icon=b.icon||c.clone(a.infographic.staticInfographic.icon);b.xAxis.lineColor=b.xAxis.lineColor||b.xAxis.axisStyle.color;b.yAxis.lineColor=b.yAxis.lineColor||b.yAxis.axisStyle.color}}}});