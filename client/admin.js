/**
 * ElaoAdmin conf
 */
ElaoAdmin.config.layout.title = 'App Admin';

ElaoAdmin.config.router.default.yieldRegions = {
    'admin_navbar': {to: 'navbar'},
    'app_admin_sidebar': {to: 'sidebar'},
};

ElaoAdmin.config.collections = {
    'foos': Foos
};
