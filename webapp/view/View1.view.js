sap.ui.jsview("ironman.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ironman.view.View1
	 */
	getControllerName: function() {
		console.log("getControllerName was called");
		return "ironman.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ironman.view.View1
	 */
	createContent: function(oController) {
		
		var oBtn1 = new sap.m.Button("idBtn1",{
			icon: "sap-icon://accept",
			text: "MVCBtn"	
			//press: oController.onCopyText
		});
		
		var oInput = new sap.m.Input("idAnubhav",{
			width: "200px"
		});
		
		var oBtn2 = new sap.m.Button("idBtn2",{
			text:"do Some Magic" ,
			// Uncomment below line in case you want to trigger onPressMagic function
			//which copies the text from the input field and displays in the alert
			//press: [oController.onPressMagic, oController]   
			press: [oController.onPressMagic, oController]
			
		});
		
		var oBtn4 = new sap.m.Button("idBtn4", {
			text:"Hide",
			press:[oController.onMakeBtnInvisible, oController]
		});
		var oBtn5 = new sap.m.Button("idBtn5",{
			text:"Unhide",
			press:[oController.onMakeBtnVisible, oController]
		});
		
		return [oInput, oBtn1, oBtn2, oBtn4, oBtn5];
	}

});