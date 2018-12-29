sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
   return Controller.extend("sandesh.controller.App", {
		onInit : function () {
			// set data model on view
			var oData = {
				recipient : {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			//set i18n model on the view more detail here: https://tinyurl.com/y9436r5b
			var i18nModel = new ResourceModel({
				bundleName: "sandesh.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		//Code to show toast message
		onShowHellow : function(){
			//Read msg from i18n model more detail here: https://tinyurl.com/y9436r5b
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			//alert("JS Alert - Hello World"); // eslint-disable-line no-alert
			//MessageToast.show("Toast Message"); //commenting this line since message will be displayed by i18n properties
			MessageToast.show(sMsg);
		}	
	});
});