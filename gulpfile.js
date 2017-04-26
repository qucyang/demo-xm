var gulp = require('gulp'),
	concat = require("gulp-concat"),  //合并文件
	uglify = require("gulp-uglify"), //压缩js文件
    runSequence = require('run-sequence'), //控制task顺序
    browserSync = require('browser-sync'), //开启服务
    minicss = require('gulp-minify-css'); //压缩css文件


//输入gulp后，默认执行default任务
gulp.task('default', function(cb){
	runSequence(['concat-css','concat-js'],'serve',cb);//异步执行concat-css和concat-js,之后在执行aaa
});
//开启服务
gulp.task('serve',function(){
	browserSync.init({
		server:{
			baseDir:"./"    
		}
	})
});
//重新加载html页面
gulp.task('html',function(){
	gulp.src('./*.html')
		.pipe(browserSync.reload({stream:true}))
	// browserSync.reload();
});
//合并并且压缩css文件
gulp.task('concat-css',function(){
	gulp.src('css/*.css')
		.pipe(minicss())
		.pipe(concat('style-mini.css'))
		.pipe(gulp.dest('dist/css/'))
});	
//合并并且压缩js文件
gulp.task('concat-js', function () {
    gulp.src(['js/html5shiv.js','js/json.js','js/index.js','js/public.js','js/lunbo.js'])  //要合并的文件
    	.pipe(uglify())
    	.pipe(concat('index-mini.js'))  // 合并
    	.pipe(gulp.dest('dist/js'))
});
//监听.html文件，当期发生改变时执行'html'任务
gulp.watch('./*.html',['html']); 
//监听.css文件，当期发生改变时同步执行'concat-css','html'任务
gulp.watch('./css/*.css',['concat-css','html']);
//监听.js文件，当期发生改变时同步执行'concat-js','html'任务
gulp.watch('./js/*.js',['concat-js','html']);
// gulp.watch('./*.html').on('change', browserSync.reload);
