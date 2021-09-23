export default {
  name: 'artists',
  title: 'Artists',
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
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'avatar',
      title: 'Avatar',
      validation: Rule => Rule.required(),
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
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url'
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url'
    },
    {
      name: 'spotify',
      title: 'Spotify',
      type: 'url'
    },
    {
      name: 'isFeatured',
      title: 'isFeatured',
      type: 'boolean'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tags'
            }
          ]
        }
      ]
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'portableText'
    },
    {
      name: 'birthday',
      title: 'Birthday',
      type: 'datetime'
    },
    {
      name: 'isBand',
      title: 'isBand',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags'
          }
        }
      ]
    },
    {
      name: 'revelantArtists',
      title: 'Revelant Artists',
      hidden: true,
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
    }
  ]
}
