let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    pump = require('pump'),
    uglify = require('gulp-uglify');



gulp.task('copy-html', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'));
});

// tasks for CSS files

gulp.task('sass',()=> {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('autoprefix', gulp.series('sass'),() =>
    gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css'))
});

// gulp.task('autoprefix', () =>
//     gulp.src('./src/css/**/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./src/css1/'))
// );


// gulp.task('concat-css', ['autoprefix'], ()=>{
//     return gulp.src('./src/css/**/*.css')
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('./src/css/'));
// });

// gulp.task('minify-css', ['concat-css'], ()=>{
//     return gulp.src('./src/css/style.css')
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest('./src/css/'));
// });

// gulp.task('copy-css', ['minify-css'], () => {
//     return gulp.src('./src/css/style.css')
//         .pipe(gulp.dest('./dist/css/'))
// });

//tasks for JS files

gulp.task('concat-js', () => {
    return gulp.src('./src/js/!**!/!*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./src/js/'));
});

// gulp.task('minify-js', ['concat-js'], (cb) => {
//     pump([
//             gulp.src('./src/js/script.js'),
//             uglify(),
//             gulp.dest('./src/js/')
//         ],
//         cb
//     );
// });

// gulp.task('copy-js', ['minify-js'], () => {
//     return gulp.src('./src/js/script.js')
//         .pipe(gulp.dest('./dist/js/'))
// });

// gulp.task('serve', ['copy-html', 'copy-css', 'copy-js'], () => {
//     browserSync.init({
//         server: {
//             baseDir: "./dist"
//         }
//     });
//
//     gulp.watch('./src/!**!/!*.html', ['copy-html']).on('change', browserSync.reload);
//     gulp.watch('./src/scss/!**!/!*.scss', ['copy-css']).on('change', browserSync.reload);
//     gulp.watch('./src/js/!**!/!*.js', ['copy-js']).on('change', browserSync.reload);
// });
