sap.ui.define([
	"sap/ui/test/Opa5",
	"uap/dev/systemFields/test/integration/arrangements/Startup",
	"uap/dev/systemFields/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
