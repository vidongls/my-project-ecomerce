import React from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from '@mui/material/TextareaAutosize'

function BlogCommentForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="comment-form">
      <div className="postbox-comment__title">
        <h2>Post Comments</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          minRows={7}
          placeholder="Your Comment..."
          {...register('message', { required: true })}
        />

        <input
          placeholder="Your Name..."
          {...register('name', { required: true })}
        />

        <input
          placeholder="Your Email..."
          {...register('email', { required: true })}
        />

        <input
          placeholder="Your Website..."
          {...register('website', { required: true })}
        />

        <input className="btn" value="Post Comment" type="submit" />
      </form>
    </div>
  )
}

export default BlogCommentForm
