const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
 
gulp.task('concat', () => {
    return gulp.src('js/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
    gulp.watch('js/**/*.jsx', ['concat']);    
});

gulp.task('default', ['watch']);