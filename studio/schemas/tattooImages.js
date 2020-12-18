export default {
    name: 'tattoo-image',
    type: 'document',
    title: 'Tattoo Images',
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