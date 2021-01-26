import React from 'react';
import s from './Post.module.css';
import DefaultPhoto from './../../../../assets/images/DefaultPhoto.png'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={DefaultPhoto} />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;