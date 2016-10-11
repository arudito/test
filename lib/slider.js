Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Header = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/header.tmp",
	defaultContainer : "page\\:header",

	initialize : function(title){
		this.data = {"title":title};
		console.log(this.data);
	},

	setTitle : function(newTitle){
		this.data.title = newTitle;
	}

	
});
