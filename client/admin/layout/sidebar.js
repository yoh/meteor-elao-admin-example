Template.app_admin_sidebar.helpers({
    collections: function(){

        var activeClass = function(collection){
            return collection === this.collection ? 'active' : '';
        }.bind(this);

        var getCollectionFilters = function(collection){
            var filters = Session.get(collection + '_filters');

            if (filters === undefined){
                filters = '';
            }

            return filters;
        };

        return [{
            href: Router.path('admin_list', {collection: 'foos'}) + getCollectionFilters('foos'),
            title: 'Foos',
            activeClass: activeClass('foos'),
        },{
            href: Router.path('admin_list', {collection: 'players'}) + getCollectionFilters('players'),
            title: 'Players',
            activeClass: activeClass('players'),
        }];
    }
});
