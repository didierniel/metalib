sap.ui.jsview("personslist-web.personslist", {

	getControllerName : function() {
		return "personslist-web.personslist";
	},

	createContent : function(oController) {
		// Create an instance of the table control
		
		var oPanel = new sap.ui.commons.Panel();
		var oText =new sap.ui.commons.TextView({text:"Here comes the content..."});
		oPanel.addContent(oText);
		
		var oTable = new sap.ui.table.Table({
			title : "Metalib-2013-08-02-15:55",
			visibleRowCount : 7,
			firstVisibleRow : 3,
			selectionMode : sap.ui.table.SelectionMode.Single,
		});
		oPanel.addContent(oTable);
		

		// toolbar
		var oTableToolbar = new sap.ui.commons.Toolbar();
		// first name field
		var oFirstNameLabel = new sap.ui.commons.Label({
			text : 'First Name'
		});
		var oFirstNameField = new sap.ui.commons.TextField({
			id : 'firstNameFieldId',
			value : '',
			width : '10em',
		});
		oFirstNameLabel.setLabelFor(oFirstNameField);
		oTableToolbar.addItem(oFirstNameLabel);
		oTableToolbar.addItem(oFirstNameField);
		// last name field
		var oLastNameLabel = new sap.ui.commons.Label({
			text : 'Last Name'
		});
		var oLastNameField = new sap.ui.commons.TextField({
			id : 'lastNameFieldId',
			value : '',
			width : '10em',
		});
		oLastNameLabel.setLabelFor(oLastNameField);
		oTableToolbar.addItem(oLastNameLabel);
		oTableToolbar.addItem(oLastNameField);
		// add button
		var oAddPersonButton = new sap.ui.commons.Button({
			id : 'addPersonButtonId',
			text : "Add Person",
			press : function() {
				oController.addNewPerson(sap.ui.getCore().getControl(
						"firstNameFieldId").getValue(), sap.ui.getCore()
						.getControl("lastNameFieldId").getValue(), oTable);
			}
		});
		oTableToolbar.addItem(oAddPersonButton);
		oTable.setToolbar(oTableToolbar);
		// define the columns and the control templates to be used
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "First Name"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"FirstName"),
			sortProperty : "FirstName",
			filterProperty : "FirstName",
			width : "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Last Name"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"LastName"),
			sortProperty : "LastName",
			filterProperty : "LastName",
			width : "200px"
		}));
		// bind table rows to /Persons based on the model defined in the init method of the controller
		oTable.bindRows("/Persons");
		return oPanel;
	}
});
