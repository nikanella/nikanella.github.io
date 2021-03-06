###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

data.projects.list.each do |project|
  proxy "/projects/#{project.path}.html", "/project.html", :locals => { project: project }, :ignore => true
end

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def categories
    public_projects.map(&:categories).flatten.compact.uniq.sort
  end

  def project_images(project_id)
    Dir["./source/images/projects/#{project_id}/*.{jpg,gif}"].reject {|path| path =~ /(home|thumb).jpg$/}.map {|path| path.gsub("./source", "")}
  end

  def public_projects
    data.projects.list.reject { |p| p.private? }
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
