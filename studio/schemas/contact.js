export default {
  name: 'contact',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'about',
      type: 'text',
      title: 'About',
      description: 'Write about stuff here.'
    },
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