sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
   return Controller.extend("sandesh.controller.App", {
		onShowHellow : function(){
			//alert("Hello World"); // eslint-disable-line no-alert
			MessageToast.show("Toast Message");
		}	
	});
});