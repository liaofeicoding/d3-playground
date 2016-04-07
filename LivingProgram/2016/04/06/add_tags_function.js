//title, meta description, meta keywords, open graph protocal tags
function title_tag(title) {
  d3.select('title').remove();
  d3.select('head').append('title').html(title);
}
function meta_description_tag(description) {
  d3.select('head').append('meta').attr("name", "description").attr("content", description);
}
function meta_keyword_tag(keywords) {
  d3.select('head').append('meta').attr("name", "keywords").attr("content", keywords);
}

function load_tags () {
  title_tag("Forever Soul Sisters The Indigo Adventure");
  meta_description_tag("The Forever Soul Sisters is an enthralling book following the life of two girls and their life as forever SoulSisters.");
  meta_keyword_tag("book, soulsisters, forever");
}


window.addEventListener('load', load_tags);
