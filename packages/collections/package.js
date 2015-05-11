Package.describe({
    name: 'app:collections',
    version: '0.0.1',
    summary: 'App collections',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1');

    api.use([
        'underscore',
        'aldeed:collection2',
        'aldeed:autoform',
    ], ['server', 'client']);

    api.export('Foos', ['server', 'client']);

    api.add_files([
        'collections/schemas/deps/_.js',
        'collections/schemas/foos.js',
        'collections/foos.js',
    ], ['client', 'server']);
});

Package.onTest(function(api) {
});
