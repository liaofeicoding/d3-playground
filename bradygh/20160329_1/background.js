---
attr:
  rel: stylesheet
  href: //bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/03/05/background.css
---
d3.select('head').append('link').attr({{ page.attr | jsonify }});
