export default {
  name: 'tags',
  title: 'Tags',
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
      name: 'displayName',
      title: 'Display Name',
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
      name: 'emoji',
      title: 'Emoji',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'MV',
          'Photography',
          'SuitableForActivities',
          'SuitableForTimeOf',
          'SuitableFor',
          'Lyrics',
          'Theming',
          'Casts',
          'Atmosphere',
          'Emoticon'
        ],
        layout: 'radio'
      }
    }
  ]
}
