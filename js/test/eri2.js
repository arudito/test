Clazz.Base,
    {
        /***
         * A call to render the UI fragment implemented in renderUI method
         * @param whereToRender A placeholder to hold the fragment, this would typically
         * be a div tag or other valid HTML element. 
         */
        render : function(whereToRender) {
            // call renderUI to get the element
            var fragment = this.renderUI();
            
            // get the placement using jQuery
            // and embed it 
            $(whereToRender).html(fragment);
            
            // bind all elements once rendered to provide events
            this.bindUI();
        },
	postRender : function(element) {

	},
}
