bookApp.factory('bookObjects', function ($resource) {
    return $resource('https://www.googleapis.com/books/v1/volumes',
        {maxResults: '20', callback: 'JSON_CALLBACK', key: apiKey },
        { get: { method: 'JSONP' }
        });
});