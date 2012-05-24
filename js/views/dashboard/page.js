define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/dashboard/page.html',
  'jscssp',
  'text!../../../css/styles.css'
], function($, _, Backbone, dashboardPageTemplate, jscssp, styles){
  var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {
		      var parser = new jscssp();

     var sheet = parser.parse(styles, false, true);
     console.log(sheet);
     var imports = _.filter(sheet.cssRules, function (rule) {
        if(rule.type === 3){
          return true;
        } else {
          return false;
        }
     });
     var importNames = _.map(imports, function(rule){
        return rule.href.substr(rule.href.indexOf('(')+2, rule.href.indexOf(')')-rule.href.indexOf('(')-3);
     });
     console.log(importNames);
      $(this.el).html(_.template(dashboardPageTemplate, {_:_, importNames: importNames}));
      
    }
  });
  return DashboardPage;
});
