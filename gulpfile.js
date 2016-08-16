var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify=require('gulp-browserify');
var ugly=require('gulp-uglify');
var gulpif=require('gulp-if');
var sass=require('gulp-sass')

var env=process.env.NODE_ENV || 'development';
var outputDir='public';

gulp.task('jade',function(){
    return gulp.src('views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir+"/html"))
})

gulp.task('js',function(){
    return gulp.src('views/js/**/*.js')
        .pipe(browserify({debug:env ==='development'}))
        .pipe(gulpif(env==='production',ugly()))
        .pipe(gulp.dest(outputDir+'/javascripts'))
})

gulp.task('sass',function(){
    var config={}
    if(env==='development'){
        config.sourceComments='map';
    }
    if(env==='production'){
        config.outputStyle='compressed';
    }
    return gulp.src('views/sass/**/*.sass')
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir+'/stylesheets'))
})

gulp.task('watch',function(){
    gulp.watch('views/js/**/*.js',['js']);
    gulp.watch('views/sass/**/*.sass',['sass']);
    //gulp.watch('views/**/*.jade',['jade']);
})

gulp.task('default',['js','sass','watch'])