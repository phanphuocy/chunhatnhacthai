export default {
  name: 'playlists',
  title: 'Playlists',
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
      name: 'songs',
      title: 'Songs',
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
      name: 'cover',
      title: 'Cover',
      validation: Rule => Rule.required(),
      type: 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'name'
      }
    }
  ]
}
