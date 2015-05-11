AutoForm.addHooks(['admin_update', 'admin_insert'], {
    after: {
        insert: function(error, result) {
            if (!error) {
                Notifications.success('Success', "Insert successful !");

                var collection = Router.current().params.collection;
                if (collection) {
                    Router.go('admin_edit', {collection: collection, id: result});
                }
            }
        },
        update: function(error) {
            if (!error) {
                Notifications.success('Success', "Update successful !");
            }
        }
    }
});
