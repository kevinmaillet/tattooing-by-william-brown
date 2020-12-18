export default {
    name: 'hero-image',
    type: 'document',
    title: 'Hero Image',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      }
    ]
  }