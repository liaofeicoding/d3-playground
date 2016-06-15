---
title: 2016/06/15
---
<script src="d3.v3.min.js" charset="utf-8"></script>

# What can you do with `d3.js`?

Turn the first paragraph into blue.

Click the code block to run.

```javascript
d3.select('p')
  .style('color', 'blue');
```

Make the viewport mobile friendly.

```javascript
d3.select('head')
  .append('meta')
  .attr('name', 'viewport')
  .attr('content', 'width=device-width');
```
<script>
var repo = 'https://github.com/bigdata-mindstorms/d3-playground/blob/gh-pages/';
var path = "{{ page.path }}";
d3.select('body')
  .append('div')
  .style('text-align', 'right')
  .style('padding', '1em')
  .append('a')
  .attr('href', repo + path)
  .html('GitHub source');
</script>
<script src="main.js" charset="utf-8"></script>
