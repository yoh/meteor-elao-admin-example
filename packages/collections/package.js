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
    api.export('Players', ['server', 'client']);
    api.export('Things', ['server', 'client']);
    api.export('Thinggs', ['server', 'client']);

    api.add_files([
        'collections/schemas/foos.js',
        'collections/foos.js',
        'collections/schemas/players.js',
        'collections/players.js',
        'collections/schemas/things.js',
        'collections/things.js',
        'collections/schemas/thinggs.js',
        'collections/thinggs.js',
    ], ['client', 'server']);
});

Package.onTest(function(api) {
});
