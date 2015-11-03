# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

activate :directory_indexes

# Build-specific configuration
configure :build do
  activate :autoprefixer
  activate :minify_css

  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

end
