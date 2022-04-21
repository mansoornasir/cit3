const path = require('path');

// join the path
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// resolve the path
console.log(path.resolve('foo/bar', './baz'));

// normalize the path
console.log(path.normalize('foo/bar//baz/asdf/quux/..'));

// get the filename of the path
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));

// get the dirname of the path
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));

// get the extension of the path
console.log(path.extname('/foo/bar/baz/asdf/quux.html'));

// get the filename of the path
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));