---
attr:
  rel: stylesheet
  href: //bigdata-mindstorms.github.io/d3-playground/bradygh/20160329_1/background.css
---
d3.select('head').append('link').attr({{ page.attr | jsonify }});
