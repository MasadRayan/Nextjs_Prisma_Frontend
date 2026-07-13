import DislikeButton from '@/app/ui/DislikeButton';
import React from 'react'

const SlugPage = async ({params} : {params: Promise<{ slug: string }>}) => {

    const {slug} = await params
  return (
    <div>
      This is the slug page
        <p>Slug: {slug}</p>
        <DislikeButton blogSlug={slug}></DislikeButton>
    </div>
  )
}

export default SlugPage
