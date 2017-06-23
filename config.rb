require "active_support"

configure :development do
  activate :livereload
end

activate :blog do |blog|
  blog.prefix = "blog"
  blog.layout = "article_layout"
end

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true, footnotes: true,
               strikethrough: true, highlight: true, autolink: true,
               link_attributes: { target: "_blank" }, with_toc_data: true

activate :syntax
activate :directory_indexes

set :fonts_dir, "fonts"
set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"

configure :build do
  activate :minify_css
  activate :relative_assets
  set :relative_links, true
end
