export default {
  name: 'playlistGroup',
  title: 'Playlist Group',
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'songs'
            },
            {
              type: 'artists'
            },
            {
              type: 'playlists'
            },
            {
              type: 'labels'
            },
            {
              type: 'news'
            },
            {
              type: 'tags'
            },
            {
              type: 'playlistGroup'
            },
            {
              type: 'artistGroup'
            },
            {
              type: 'heroImages'
            },
            {
              type: 'chartBoard'
            },
            {
              type: 'casts'
            }
          ]
        }
      ]
    },
    {
      name: 'isFeatured',
      title: 'isFeatured',
      validation: Rule => Rule.required(),
      type: 'boolean'
    }
  ]
}
