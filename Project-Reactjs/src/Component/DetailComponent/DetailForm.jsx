import { React, useState } from 'react'
import { useForm } from 'react-hook-form'
import Rating from '@mui/material/Rating'
import TextareaAutosize from '@mui/material/TextareaAutosize'

function DetailForm(props) {
  const [value, setValue] = useState(4)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="detail-form">
      <h4>Add a Review</h4>
      <div className="your-rating">
        <span className="rating-text"> Your Rating: </span>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Your Review</h5>
        <TextareaAutosize
          minRows={3}
          style={{ width: '100%' }}
          {...register('message', { required: true })}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ minWidth: '50%', paddingRight: '15px' }}>
            {' '}
            <h5>Name</h5>
            <input {...register('name', { required: true })} />
          </div>
          <div style={{ minWidth: '50%', paddingLeft: '15px' }}>
            <h5>Email</h5>
            <input {...register('email', { required: true })} />
          </div>
        </div>
        <input className="btn" value="Add Your Review" type="submit" />
      </form>
    </div>
  )
}

export default DetailForm
