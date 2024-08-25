import type { Post } from '@/payload/payload-types'

export async function fetchRecentPosts(numPosts: number): Promise<Post[]> {
  const response = await fetch(`/api/posts?limit=${numPosts}&sort=-createdAt`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.docs
}
