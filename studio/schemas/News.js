export default {
  preview: {
    prepare: values => {
      const getFirstText = block =>
        block.children && block.children[0] && block.children[0].text
      const block = values.title.find(getFirstText)
      return {title: block && getFirstText(block)}
    },
    select: {
      title: 'body'
    }
  },
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: ['Bài Hát Mới', 'Ca Sĩ Mới', 'MV Mới Phát Hành'],
        layout: 'dropdown'
      }
    },
    {
      name: 'id',
      title: 'ID',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      name: 'body',
      title: 'Body',
      validation: Rule => Rule.required(),
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
      name: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'identifier',
      title: 'Identifier',
      type: 'string'
    }
  ]
}
