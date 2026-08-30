import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    desk: defineCollection({
      type: 'page',
      source: 'desk/*.yml'
    }),
  },
})
