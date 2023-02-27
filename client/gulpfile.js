

// const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
// const sass = gulpSass(require('sass'));

import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import sass from 'sass'

const Sass = gulpSass(sass)


gulp.task('sass' ,async () => {
    gulp.src('src/components/Header/*.scss').pipe(Sass()).pipe(gulp.dest('src/css'))
})

