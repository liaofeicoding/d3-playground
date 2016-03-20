function load_bootstrap() {
  if(! this.bootstrap_version) {
    d3.select('head')
      .append('link')
      .attr('rel', 'stylesheet')
      .attr('href', '/d3-playground/bootstrap/3.3.6/css/bootstrap.min.css');
    d3.select('head')
      .append('link')
      .attr('rel', 'stylesheet')
      .attr('href', '/d3-playground/bootstrap/3.3.6/css/bootstrap-theme.min.css');
    this.bootstrap_version = '3.3.6';
    d3.select('head')
      .append('script')
      .attr('async', false)
      .attr('src', '/d3-playground/jquery/2.2.1/jquery.min.js');
    d3.select('head')
      .append('script')
      .attr('src', '/d3-playground/bootstrap/3.3.6/js/bootstrap.min.js');
    console.log(this);
  }
}
