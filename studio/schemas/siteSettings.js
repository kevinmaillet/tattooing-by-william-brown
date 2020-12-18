export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Describe your blog for search engines and social media.'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Keywords',
        description: 'siAdd keywords that describes your blog.',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      }

    ]
  }