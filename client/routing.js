Router.setTemplateNameConverter(function (str){
    return str.replace(/\./g, '_');
});

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

Router.map(function() {
    // homepage
    this.route('homepage', {
        path: '/'
    });
});

// put this at end of routing to peserve app routes
Router.mapElaoAdminRoutes();
