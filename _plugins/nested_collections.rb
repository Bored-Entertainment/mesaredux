# _plugins/nested_collections.rb
module Jekyll
    class NestedCollectionsGenerator < Generator
      safe true
      priority :low
  
      def generate(site)
        site.collections['games'].docs.each do |doc|
          dir = doc.path.split('/')[1..-2].join('/')
          doc.data['parent_dir'] = dir
        end
      end
    end
  end
  