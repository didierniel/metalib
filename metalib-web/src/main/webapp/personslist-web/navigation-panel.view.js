sap.ui.jsview("personlist-web.navigation-panel", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf personlist-web.navigation-panel
	*/ 
	getControllerName : function() {
		return "personlist-web.navigation-panel";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf personlist-web.navigation-panel
	*/ 
	createContent : function(oController) {
		
		var oText2 = new sap.ui.commons.TextView({
			text : "NavigationPanel-2013-11-29-14:44"
		});

		return oText2;
	}

});
