export default {
  name: 'songs',
  title: 'Songs',
  type: 'document',
  preview: {
    select: {
      title: 'titleEn'
    }
  },
  fields: [
    {
      name: 'titleEn',
      title: 'TitleEn',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleEn'
      }
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'file'
    },
    {
      name: 'titleTh',
      title: 'TitleTh',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'titleRo',
      title: 'TitleRo',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'titleVi',
      title: 'TitleVi',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duration',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'releaseYear',
      title: 'ReleaseYear',
      hidden: true,
      type: 'number'
    },
    {
      name: 'isNewlyReleasedMv',
      title: 'isNewlyReleasedMV',
      hidden: true,
      type: 'boolean'
    },
    {
      name: 'type',
      title: 'Type',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: ['Single', 'OST', 'Cover', 'Live'],
        layout: 'radio'
      }
    },
    {
      name: 'label',
      title: 'Label',
      type: 'reference',
      to: [
        {
          type: 'labels'
        }
      ]
    },
    {
      name: 'artists',
      title: 'Artists',
      validation: Rule => Rule.required(),
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
    },
    {
      name: 'tagRefs',
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
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          'pop',
          'rnbsoul',
          'countryfolk',
          'hiphoprap',
          'acoustic',
          'rock'
        ],
        layout: 'radio'
      }
    },
    {
      name: 'lyricsTh',
      title: 'LyricsTh',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'text'
    },
    {
      name: 'translatedDate',
      title: 'Translated Date',
      type: 'datetime'
    },
    {
      name: 'deungdutjaisNote',
      title: "Deungdutjai's Note",
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'likeCount',
      title: 'Likes Count',
      type: 'number'
    },
    {
      name: 'viewCount',
      title: 'View Count',
      type: 'number'
    },
    {
      name: 'dislikeCount',
      title: 'Dislike Count',
      type: 'number'
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime'
    },
    {
      name: 'lastUpdatedSimilars',
      title: 'Last Updated Similars',
      type: 'datetime'
    }
  ]
}
