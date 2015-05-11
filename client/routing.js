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


/**
 * ElaoAdmin conf
 */
ElaoAdmin.config.layout.title = 'App Admin';
ElaoAdmin.config.router.default.yieldRegions = {
    'admin_navbar': {to: 'navbar'},
    'app_admin_sidebar': {to: 'sidebar'},
};

// put this at end of routing to peserve app routes
Router.mapElaoAdminRoutes();
