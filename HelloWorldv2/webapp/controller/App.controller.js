sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Conrtoller) {
	"use strict";
   return Controller.extend("sandesh.controller.App", {
		onShowHellow : function(){
			alert("Hellow World");
		}	
	});
});