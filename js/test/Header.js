Clazz.createPackage("widget.test");

Clazz.widget.test.Header = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/header.tmp",
	defaultContainer : "page\\:header",

	initialize : function(title){
		this.data = {"title":title};
		console.log(this.data);
	},

	
});