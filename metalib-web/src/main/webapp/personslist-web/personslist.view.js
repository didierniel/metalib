sap.ui.jsview("personslist-web.personslist", {

	getControllerName : function() {
		return "personslist-web.personslist";
	},

	createContent : function(oController) {
		// Create an instance of the table control
		
		var oText2 =new sap.ui.commons.TextView({text:"Metalib-2013-08-09-10:03"});

		var oText1 =new sap.ui.commons.TextView({text:"Logo"});

		var oText3 =new sap.ui.commons.TextView({text:"Profile"});

		var oLayout = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix",
			layoutFixed : true,
			columns : 1,
			width : "100%",
			widths : [ "100%" ]
			});

		var oLayoutHeader = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix-header",
			layoutFixed : true,
			columns : 3,
			width : "100%",
			widths : [ "20%","60%", "20%" ]
			});		
		
		var oLayoutStatus = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix-status",
			layoutFixed : true,
			columns : 1,
			width : "100%",
			widths : [ "100%" ]
			});

		var oLayoutBody = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix-body",
			layoutFixed : true,
			columns : 2,
			width : "100%",
			widths : [ "20%","80%" ]
			});

		
		oLayoutHeader.createRow( oText1, oText2,oText3 ); 

		oLayout.createRow( oLayoutHeader ); 

		var oTextStatus =new sap.ui.commons.TextView({text:"Status"});
		
		oLayoutStatus.createRow(oTextStatus);
		
		oLayout.createRow(oLayoutStatus);
		
		var oText =new sap.ui.commons.TextView({text:"Tree"});
		
		var oTable = new sap.ui.table.Table({
			title : "Persons",
			visibleRowCount : 7,
			firstVisibleRow : 3,
			selectionMode : sap.ui.table.SelectionMode.Single,
		});		
		
		var oTableLibrary = new sap.ui.table.Table({
			title : "Libraries",
			visibleRowCount : 7,
			firstVisibleRow : 3,
			selectionMode : sap.ui.table.SelectionMode.Single,
		});
		
		var oTableBook = new sap.ui.table.Table({
			title : "Books",
			visibleRowCount : 7,
			firstVisibleRow : 3,
			selectionMode : sap.ui.table.SelectionMode.Single,
		});
		
		var oTransTree = new sap.ui.commons.Tree("transTree");
		
		var oLayoutReader = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix-reader",
			layoutFixed : true,
			columns : 1,
			width : "100%",
			widths : [ "100%" ]
			});		
		
		var oTextCommand =new sap.ui.commons.TextView({text:"Command"});
		var oTextReader =new sap.ui.commons.TextView({text:"Reader"});
		oLayoutReader.createRow(oTextCommand);
		oLayoutReader.createRow(oTextReader);
		oLayoutReader.createRow(oTable);
		oLayoutReader.createRow(oTableLibrary);
		oLayoutReader.createRow(oTableBook);
		
		oLayoutBody.createRow(oTransTree, oLayoutReader ); 

		oLayout.createRow( oLayoutBody ); 

		// toolbar
		var oTableToolbar = new sap.ui.commons.Toolbar();
		// first name field
		var oCodeLabel = new sap.ui.commons.Label({
			text : 'First Name'
		});
		var oFirstNameField = new sap.ui.commons.TextField({
			id : 'firstNameFieldId',
			value : '',
			width : '10em',
		});
		oCodeLabel.setLabelFor(oFirstNameField);
		oTableToolbar.addItem(oCodeLabel);
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

		
		// toolbar
		var oTableLibraryToolbar = new sap.ui.commons.Toolbar();
		// first name field
		var oCodeLabel = new sap.ui.commons.Label({
			text : 'Code'
		});
		var oCodeField = new sap.ui.commons.TextField({
			id : 'codeFieldId',
			value : '',
			width : '10em',
		});
		oCodeLabel.setLabelFor(oCodeField);
		oTableLibraryToolbar.addItem(oCodeLabel);
		oTableLibraryToolbar.addItem(oCodeField);
		// last name field
		var oTitleLabel = new sap.ui.commons.Label({
			text : 'Title'
		});
		var oTitleField = new sap.ui.commons.TextField({
			id : 'titleFieldId',
			value : '',
			width : '10em',
		});
		oTitleLabel.setLabelFor(oTitleField);
		oTableLibraryToolbar.addItem(oTitleLabel);
		oTableLibraryToolbar.addItem(oTitleField);
		// add button
		var oAddLibraryButton = new sap.ui.commons.Button({
			id : 'addLibraryButtonId',
			text : "Add Library",
			press : function() {
				oController.addNewLibrary(sap.ui.getCore().getControl(
						"codeFieldId").getValue(), sap.ui.getCore()
						.getControl("titleFieldId").getValue(), oTableLibrary);
			}
		});
		oTableLibraryToolbar.addItem(oAddLibraryButton);
		oTableLibrary.setToolbar(oTableLibraryToolbar);

		oTableLibrary.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Code"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"Code"),
			sortProperty : "Code",
			filterProperty : "Code",
			width : "100px"
		}));
		oTableLibrary.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Title"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"Title"),
			sortProperty : "Title",
			filterProperty : "Title",
			width : "100px"
		}));
		oTableLibrary.bindRows("/Librarys");
		

		
		// toolbar
		var oTableBookToolbar = new sap.ui.commons.Toolbar();
		// first name field
		var oBookCodeLabel = new sap.ui.commons.Label({
			text : 'Code'
		});
		var oBookCodeField = new sap.ui.commons.TextField({
			id : 'bookCodeFieldId',
			value : '',
			width : '10em',
		});
		
		
		oBookCodeLabel.setLabelFor(oBookCodeField);
		oTableBookToolbar.addItem(oBookCodeLabel);
		oTableBookToolbar.addItem(oBookCodeField);
		// last name field
		var oBookTitleLabel = new sap.ui.commons.Label({
			text : 'Title'
		});
		var oBookTitleField = new sap.ui.commons.TextField({
			id : 'bookTitleFieldId',
			value : 'MyBlankTitle',
//			value : '{/Librarys(1)/Title}',
			width : '10em',
		});
		oBookTitleLabel.setLabelFor(oBookTitleField);
		oTableBookToolbar.addItem(oBookTitleLabel);
		oTableBookToolbar.addItem(oBookTitleField);


		
		var oBookLinkLabel = new sap.ui.commons.Label({
			text : 'Library'
		});
		
		// Create a ComboBox
		var oLibraryLinkComboBox = new sap.ui.commons.ComboBox("LibraryLink");
		oLibraryLinkComboBox.setTooltip("Country");
		oLibraryLinkComboBox.setEditable(true);
		oLibraryLinkComboBox.setValue("Deutschland");
		oLibraryLinkComboBox.setWidth("200px");
		var oItem = new sap.ui.core.ListItem("Country1");
		oItem.setText("Canada");
		oLibraryLinkComboBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem("Country2");
		oItem.setText("Deutschland");
		oLibraryLinkComboBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem("Country3");
		oItem.setText("England");
		oLibraryLinkComboBox.addItem(oItem);
		oItem = new sap.ui.core.ListItem("Country4");
		oItem.setText("Россия");
		oLibraryLinkComboBox.addItem(oItem);
		
		//oLibraryLinkComboBox.setModel(this.getModel());
		//this.displayLibraryLinkComboBox(oLibraryLinkComboBox);

//		var oLibraryLinkTemplate = new sap.ui.core.ListItem();
//		oItemTemplate1.bindProperty("id", "id");
//		oLibraryLinkTemplate.bindProperty("text", "Title");
//		oItemTemplate1.bindProperty("tooltip", "description");
//		oComboBox3.bindItems("/Librarys", oLibraryLinkTemplate);
		
		oTableBookToolbar.addItem(oBookLinkLabel);
		oTableBookToolbar.addItem(oLibraryLinkComboBox);
		
//		var oTextField = new sap.ui.commons.TextField({
//		    value: "{/company/name}"

		
		// add button
		var oAddBookButton = new sap.ui.commons.Button({
			id : 'addBookButtonId',
			text : "Add Book",
			press : function() {
				oController.addNewBook(sap.ui.getCore().getControl(
						"codeFieldId").getValue(), sap.ui.getCore()
						.getControl("titleFieldId").getValue(), oTableBook);
			}
		});
		oTableBookToolbar.addItem(oAddBookButton);
		oTableBook.setToolbar(oTableBookToolbar);

		oTableBook.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Code"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"Code"),
			sortProperty : "Code",
			filterProperty : "Code",
			width : "100px"
		}));
		oTableBook.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Title"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"Title"),
			sortProperty : "Title",
			filterProperty : "Title",
			width : "100px"
		}));
		oTableBook.bindRows("/Books");
		
		
		
		
		oTransTree.setShowHeader(false);
		oTransTree.setTitle("Explorer");
		oTransTree.setWidth("100%");
		oTransTree.setHeight("auto");
		oTransTree.setShowHeaderIcons(true);
		oTransTree.setShowHorizontalScrollbar(false);

		//create Tree Nodes
		var oTransNode1 = new sap.ui.commons.TreeNode("transNode1", {text:"Computer", icon:"images/system.gif", expanded: true});
		var oTransNode2 = new sap.ui.commons.TreeNode("transNode2", {text:"OSDisk (C:)", icon:"images/disk.gif", expanded: true});
		var oTransNode3 = new sap.ui.commons.TreeNode("transNode3", {text:"Program Files", icon:"images/folder.gif"});
		var oTransNode4 = new sap.ui.commons.TreeNode("transNode4", {text:"Windows", icon:"images/folder.gif"});
		var oTransNode5 = new sap.ui.commons.TreeNode("transNode5", {text:"Mass Storage (USB)", icon:"images/disk.gif"});
		var oTransNode6 = new sap.ui.commons.TreeNode("transNode6", {text:"Network", icon:"images/network.gif"});

		oTransNode1.addNode(oTransNode2);
		oTransNode1.addNode(oTransNode5);

		oTransNode2.addNode(oTransNode3);
		oTransNode2.addNode(oTransNode4);
		

		//add Tree Node root to the Tree
		oTransTree.addNode(oTransNode1);
		//oTransNode1.bindProperty("text", "@title"); 
		//oTransTree.bindNodes("/Librarys",oTransNode1);
		oTransTree.addNode(oTransNode6);

		// bind table rows to /Persons based on the model defined in the init method of the controller
		oTable.bindRows("/Persons");
		return oLayout;
	},
	
	displayLibraryLinkComboBox:function( theLibraryLinkComboBox){
		
		return theLibraryLinkComboBox;
	}
	
});
