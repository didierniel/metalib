sap.ui.controller("personslist-web.personslist", {

	onInit : function() {
		var sOrigin = window.location.protocol + "//" + window.location.hostname
				+ (window.location.port ? ":" + window.location.port : "");
		var personsListOdataServiceUrl = sOrigin + "/metalib-web/personslist.svc";

		var odataModel = new sap.ui.model.odata.ODataModel(
				personsListOdataServiceUrl);
		this.getView().setModel(odataModel);
	},

	addNewPerson : function(sFirstName, sLastName, oTable) {
		var persons = {};

		persons.FirstName = sFirstName;
		persons.LastName = sLastName;

		this.getView().getModel().create("/Persons", persons, null, this.successMsg, this.errorMsg);
	},

	successMsg : function() {
		sap.ui.commons.MessageBox.alert("Person entity has been successfully created");
	},

	errorMsg : function() {
		sap.ui.commons.MessageBox.alert("Error occured when creating person entity");
	},

	addNewLibrary : function(sCode, sTitle, oTableLibrary) {
		var libraries = {};

		libraries.Code = sCode;
		libraries.Title = sTitle;

		this.getView().getModel().create("/Librarys", libraries, null, this.successMsgLibrary, this.errorMsgLibrary);
	},

	successMsgLibrary : function() {
		sap.ui.commons.MessageBox.alert("Library entity has been successfully created");
	},

	errorMsgLibrary : function() {
		sap.ui.commons.MessageBox.alert("Error occured when creating library entity");
	},
	
	addNewBook : function(sCode, sTitle, oTableBook) {
		var libraries = {};

		libraries.Code = sCode;
		libraries.Title = sTitle;

		this.getView().getModel().create("/Books", libraries, null, this.successMsgBook, this.errorMsgBook);
	},

	successMsgBook : function() {
		sap.ui.commons.MessageBox.alert("Book entity has been successfully created");
	},

	errorMsgBook : function() {
		sap.ui.commons.MessageBox.alert("Error occured when creating Book entity");
	},
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 */
//   onBeforeRendering: function() {
//
//   },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
//   onAfterRendering: function() {
//
//   },

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//   onExit: function() {
//
//   }

});