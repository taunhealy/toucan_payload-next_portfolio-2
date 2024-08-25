import { Block } from 'payload/types'

export const PostsGrid: Block = {
  slug: 'PostsGrid',
  labels: {
    singular: 'Posts Grid',
    plural: 'Posts Grid',
  },
  fields: [
    {
      name: 'numPosts',
      type: 'number',
      defaultValue: 9,
      label: 'Number of posts to show',
    },
  ],
}
