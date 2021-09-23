export default {
  name: 'casts',
  title: 'Casts',
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
      name: 'nickname',
      title: 'Nickname',
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
      name: 'featuredIn',
      title: 'FeaturedIn',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'songs'
            }
          ]
        }
      ]
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'file'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'file'
    },
    {
      name: 'coverColor',
      title: 'Cover Color',
      type: 'string'
    }
  ]
}
