sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
   return Controller.extend("sandesh.controller.App", {
		//Code to 
		onInit : function () {
			// set data model on view
			var oData = {
				recipient : {
					name: "Sample Text"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			//set il8n model on the view more detail here: https://tinyurl.com/y9436r5b
			var il8nModel = new ResourceModel({
				bundleName: "sandesh.il8n.il8n"
			});
			this.getView().setModel(il8nModel, "il8n");
			
		},
		
		
		//Code to show toast message
		onShowHellow : function(){
			//Read msg from il8n model more detail here: https://tinyurl.com/y9436r5b
			var oBundle = this.getView().getModel("il8n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			//alert("JS Alert - Hello World"); // eslint-disable-line no-alert
			//MessageToast.show("Toast Message"); //commenting this line since message will be displayed by il8n properties
			MessageToast.show(sMsg);
		}	
	});
});