import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'text'}),
        defineField({name: 'backgroundImage', title: 'Background Image', type: 'image'}),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content Sections',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Button Label', type: 'string'}),
        defineField({name: 'url', title: 'Button URL', type: 'url'}),
      ],
    }),
  ],
})
