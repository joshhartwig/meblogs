import React from 'react'

type Props = {
  title: string,
  date: string,
  content: string,
}

function PostPreview({title, date, content}: Props) {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export default PostPreview