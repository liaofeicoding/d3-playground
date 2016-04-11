## 2016/04/10

Test module for both browser and `node.js`
* [hello](https://github.com/bigdata-mindstorms/d3-playground/tree/gh-pages/LivingProgram/2016/04/10/Lesson66/hello) module
* [test.js](test.js) test in node.js
* [hello.html](hello.html) test in browser (script include)
* [index.html](index.html) test in browser (browserify)
* [index.js](index.js) input for browerify
* [build](build) (browerify build script)
* [main.js](main.js) output for browser

Test in node

```shell
$ node ./test.js 
Hello world
```

Running the browserify build to obtain main.js:
```shell
$ ./build
```
Test in browser

- [Browserify version](https://bigdata-mindstorms.github.io/d3-playground/LivingProgram/2016/04/10/Lesson66/index.html)
- [Script include version](https://bigdata-mindstorms.github.io/d3-playground/LivingProgram/2016/04/10/Lesson66/hello.html)
