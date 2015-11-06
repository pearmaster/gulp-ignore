gulp-ignore
===========

Include or exclude [gulp](https://github.com/gulpjs/gulp) files from the stream based on a condition

Usage

1: Remove things from the stream

**Remove from here on**

![][exclude]

```javascript
var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var condition = './gulpfile.js';

gulp.task('task', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.exclude(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
```

Run JSHint on everything, remove gulpfile from the stream, then uglify and write everything else.

2: Filter only matching things

**Include from here on**

![][include]

```javascript
var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var condition = './public/**.js';

gulp.task('task', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(gulpIgnore.include(condition))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
```

Run JSHint on everything, filter to include only files from in the public folder, then uglify and write them.


API
---

### exclude(condition)

Exclude files whose `file.path` matches, include everything else

### include(condition)

Include files whose `file.path` matches, exclude everything else

### condition

An array of glob-matching strings, just like you might provide to gulp.src.

LICENSE
-------

(MIT License)

Copyright (c) 2014 [Richardson & Sons, LLC](http://richardsonandsons.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[condition]: https://rawgithub.com/robrich/gulp-ignore/master/img/condition.svg
[ternary]: https://rawgithub.com/robrich/gulp-ignore/master/img/ternary.svg
[exclude]: https://rawgithub.com/robrich/gulp-ignore/master/img/exclude.svg
[include]: https://rawgithub.com/robrich/gulp-ignore/master/img/include.svg
[glob]: https://rawgithub.com/robrich/gulp-ignore/master/img/glob.svg
