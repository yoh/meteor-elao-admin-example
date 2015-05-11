# meteor-elao-admin-example

The `meteor-elao-admin` package needs `elao:meteor-elaostrap`, `iron:router`, `gfk:notifications` and `aldeed:template-extension` packages.

### Principes
- admin dashboard is accessible on `/admin` (`ElaoAdmin.config.router.route_prefix` param)
- to create a collection list `trucs` (path /admin/trucs) :
  - create a publication `trucs_list` in `server/admin/publish.js` like :
  ```
  Meteor.publish('trucs_list', function () {
      return Trucs.find();
  });
  ```
  - create `trucs_list` template based on `client/admin/collections/foos/list.html` and `client/admin/collections/foos/list.js`

- to create a collection edit `trucs` (path /admin/trucs/:id) :
  - create a publication `trucs_edit` in `server/admin/publish.js` like :
  ```
  Meteor.publish('trucs_edit', function (id) {
    return Trucs.find({});
  });
  ```
  - create `trucs_edit` template based on `client/admin/collections/foos/edit.html` and `client/admin/collections/foos/edit.js`

- to create a collection new `trucs` (path /admin/trucs/new) : ...


### Example

- default config : `packages/admin/lib/admin.js`
- example routing file : `client/routing.js` :
````
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
````

- example of admin publications in `server/admin/publish.js`
- example of template : `client/admin` and `client/admin/collections/*`
