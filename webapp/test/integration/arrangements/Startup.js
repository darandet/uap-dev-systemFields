sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("uap.dev.systemFields.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "uap.dev.systemFields",
					async: true,
					manifest: true
				}
			});
		}

	});
});
