/*
 * @Author: think
 * gulp就是用来机械化的完成重复性的工作
 * gulp的机制就是将重复工作抽象成一个个的任务
 * @Date:   2016-01-28 12:48:57
 * @Last Modified by:   think
 * @Last Modified time: 2016-01-28 14:21:21
 */

'use strict';


//此处代码都是由node执行的

//载入gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');


//注册一个任务
gulp.task('copy', function() {
  //当gulp执行这个say任务时，会自动执行这个函数
  // console.log('hello world');
  // 合并，压缩之类的操作
  // gulp.src()的作用就是取某个路径去取一个文件
  // gulp.dest()的作用就是上边接收到的文件放到参数所指定的目录下，
  // 不需要写文件的名字，会自动生成
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/')) //将此处需要的操作传递进去
  ;
});

gulp.task('dist', function() {
  //当'src/index.html'这个文件发生变化时，就执行一下'copy'任务
  gulp.watch('src/index.html', ['copy']);
  gulp.watch('src/styles/*.less', ['style']);
});

// var watcher = gulp.watch('js/**/*.js', ['uglify', 'reload']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });


gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});
