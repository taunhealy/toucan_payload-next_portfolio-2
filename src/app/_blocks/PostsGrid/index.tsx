import React from 'react'

import { Post } from '../../../payload/payload-types'
import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'

type Props = {
  blockName?: string
  blockType: 'posts'
  numPosts?: number
  posts: Post[]
}

export const PostsGrid: React.FC<Props> = ({ blockName, numPosts, posts }) => {
  const displayPosts = numPosts ? posts.slice(0, numPosts) : posts

  return (
    <Gutter>
      <h2>{blockName || 'PostsGrid'}</h2>
      <div>
        {displayPosts && displayPosts.length > 0 ? (
          displayPosts.map(post => (
            <div key={post.id}>
              <Card relationTo="posts" doc={post} showCategories />
              <h3>{post.title}</h3>
              <p>{post.meta?.description}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </Gutter>
  )
}
