export default {
  name: 'heroImages',
  title: 'Hero Images',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'isFeatured',
      title: 'isFeatured',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'buttonLabel',
      title: 'Button Label',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'targetUrl',
      title: 'Target URL',
      validation: Rule => Rule.required(),
      type: 'string'
    }
  ]
}
