sap.ui.define(
	["ironman/controller/BaseController"],
	function(oController){
		return oController.extend("ironman.controller.View2",{
		onInit: function (){
			
			//Creating new Model
			var oModel = new sap.ui.model.json.JSONModel();   
			
			//Loading the data from remote location
			oModel.loadData("models/mockData/sample.json");
			
			//Loading the data directly in the model.
			/*oModel.setData(
				{
	"Employees": [{
			"userId": "rirani",
			"jobTitleName": "Developer",
			"firstName": "Romin",
			"lastName": "Irani",
			"preferredFullName": "Romin Irani",
			"employeeCode": "E1",
			"region": "CA",
			"phoneNumber": "408-1234567",
			"emailAddress": "romin.k.irani@gmail.com"
		},
		{
			"userId": "nirani",
			"jobTitleName": "Developer",
			"firstName": "Neil",
			"lastName": "Irani",
			"preferredFullName": "Neil Irani",
			"employeeCode": "E2",
			"region": "CA",
			"phoneNumber": "408-1111111",
			"emailAddress": "neilrirani@gmail.com"
		},
		{
			"userId": "thanks",
			"jobTitleName": "Program Directory",
			"firstName": "Tom",
			"lastName": "Hanks",
			"preferredFullName": "Tom Hanks",
			"employeeCode": "E3",
			"region": "CA",
			"phoneNumber": "408-2222222",
			"emailAddress": "tomhanks@gmail.com"
		}
	]
}
				);*/
			//Making the model available to the application
			sap.ui.getCore().setModel(oModel);
		}	
			
			
		});
		
	}
	);