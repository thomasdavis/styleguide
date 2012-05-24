define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/style/page.html',
  'jscssp',
  'text!../../../css/styles.css'
], function($, _, Backbone, stylePageTemplate, jscssp, styles){
  var StylePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      var that = this;
		 require(['text!../css/'+this.options.style], function (stylesheet){
       var parser = new jscssp();

      var stylesheet = parser.parse(stylesheet, false, true);
window.stylesheett = stylesheet;
      console.log(stylesheet);
         $(that.el).html(_.template(stylePageTemplate, {_:_, stylesheet: stylesheet}));
         fixie.init(':empty')
        SyntaxHighlighter.highlight();
      });

      
    }
  });
  return StylePage;
});
