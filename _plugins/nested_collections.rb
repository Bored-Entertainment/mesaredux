# _plugins/nested_collections.rb
module Jekyll
  class NestedCollectionsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      collection = site.collections['games']
      return unless collection

      collection.docs.each do |doc|
        raw_path = if doc.respond_to?(:relative_path) && doc.relative_path
                     doc.relative_path
                   else
                     doc.path
                   end
        next unless raw_path

        relative_path = normalize_path(raw_path, site)
        normalized_path = strip_collection_prefix(relative_path, collection)

        parent_dir = extract_parent_dir(normalized_path)

        doc.data['parent_dir'] = parent_dir
        doc.data['parent_segments'] = parent_dir.empty? ? [] : parent_dir.split('/')
      end
    end

    private

    def normalize_path(path, site)
      normalized = path.tr('\\', '/')
      source_prefix = site.source.end_with?('/') ? site.source : "#{site.source}/"
      normalized = normalized.sub(%r!^#{Regexp.escape(source_prefix)}!, '')
      normalized
    end

    def strip_collection_prefix(path, collection)
      prefix = collection.relative_directory.sub(%r!^/?!, '')
      return path unless prefix && !prefix.empty?

      path.sub(%r!^#{Regexp.escape(prefix)}/!, '')
    end

    def extract_parent_dir(path)
      dir = File.dirname(path)
      return '' if dir == '.' || dir == '/'

      dir
    end
  end
end
  