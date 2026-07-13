import React from 'react'

const SlugPage = async ({params} : {params: Promise<{ slug: string }>}) => {

    const {slug} = await params
  return (
    <div>
      This is the slug page
        <p>Slug: {slug}</p>
    </div>
  )
}

export default SlugPage
