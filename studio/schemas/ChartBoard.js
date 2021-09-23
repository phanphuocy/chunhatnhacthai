export default {
  name: 'chartBoard',
  title: 'Chart Board',
  description: 'A collection of songs that are trending over a period of time',
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
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'isWeek',
      title: 'isWeek',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'startDate',
      title: 'StartDate',
      validation: Rule => Rule.required(),
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'EndDate',
      validation: Rule => Rule.required(),
      type: 'datetime'
    },
    {
      name: 'items',
      title: 'Items',
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
    }
  ]
}
