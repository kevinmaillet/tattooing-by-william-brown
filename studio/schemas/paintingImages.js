export default {
    name: 'painting-image',
    type: 'document',
    title: 'Painting Images',
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