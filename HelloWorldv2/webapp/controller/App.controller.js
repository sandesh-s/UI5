sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
   return Controller.extend("sandesh.controller.App", {
		//Code to 
		onInit : function () {
			// set data model on view
			var oData = {
				recipient : {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		
		
		//Code to show toast message
		onShowHellow : function(){
			//alert("JS Alert - Hello World"); // eslint-disable-line no-alert
			MessageToast.show("Toast Message");
		}	
	});
});