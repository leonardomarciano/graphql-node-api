const gulp = require('gulp')
const clean = require('gulp-clean')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json')

// TODO: compile with tsconfig.json ->
gulp.task('scripts',['static'],  () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

// TODO: move statics file to dist dir ->
gulp.task('static', ['clean'] , () => gulp.src(['src/**/*.json']).pipe(gulp.dest('dist')) );

// TODO: clear dist dir -> 
gulp.task('clean', () => gulp.src('dist').pipe(clean()) );

// TODO: build sequence -> clean, static, scripts
gulp.task('build', ['scripts'])

// TODO: Autoreload ->
gulp.task('watch', ['build'], () => gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']))

// ? Should default task reload the app?
gulp.task('default', ['watch'])