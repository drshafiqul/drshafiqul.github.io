source "https://rubygems.org"

# Specify the Jekyll version that GitHub Pages uses for consistency.
# The `github-pages` gem will manage the exact version.
gem "jekyll", "~> 3.9"

# This is the primary gem for building with GitHub Pages.
# It includes Jekyll and all necessary plugins.
gem "github-pages", group: :jekyll_plugins

# Windows-specific gem for performance.
# This line is ignored on macOS and Linux.
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Optional plugins can be added here.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  # Hawkins is a CLI helper, often not needed for the build itself.
  # You can keep it if you use it for local development.
  gem "hawkins"
  # Consider adding this for faster local builds.
  # gem "jekyll-include-cache"
  gem "webrick"
end