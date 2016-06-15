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
var url = "{{ page.url }}";
console.log(url);
</script>
<script src="main.js" charset="utf-8"></script>
