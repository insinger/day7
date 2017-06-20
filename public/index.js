(function() {
	angular.module("RegApp",[]).controller("RegCtrl",function() {
		var regCtrl=this;

		regCtrl.name="";
		regCtrl.email="";
		regCtrl.message="";

		regCtrl.isValid=function(form,field) {
			if (!form[field].$dirty) {return("initial");}
			else if (form[field].$dirty && !form[field].$valid) {return "error";}
			else {return "correct";}
			}
		regCtrl.resetForm=function() {
			regCtrl.name="";
			regCtrl.email="";
			regCtrl.message="";
			}
		regCtrl.processForm=function() {
			console.log("in processForm()");
			console.log("name="+regCtrl.name);
			console.log("email="+regCtrl.email);
			if (!(regCtrl.name && regCtrl.email)) {
				regCtrl.message="Incomplete entry!";
			   }
			else {
				regCtrl.message="Sucessful registration";
				}
			}
	});                           
})();
