export default {
  name: 'artistGroup',
  title: 'Artist Group',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'isFeatured',
      title: 'isFeatured',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'artists'
            }
          ]
        }
      ]
    }
  ]
}
