import { connect } from 'react-redux'
import { LoadComments } from '../store/actions/CommentAction'
import { LoadLocation } from '../store/actions/LocationAction'
import { LoadLikes, AddLike } from '../store/actions/LikesAction'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CommentForm from './CommentForm'

const mapStateToProps = ({ commentState, locationState, likesState }) => {
  return { commentState, locationState, likesState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    fetchLocation: (id) => dispatch(LoadLocation(id)),
    fetchLikes: (id) => dispatch(LoadLikes(id)),
    addLike: (id, formValue) => dispatch(AddLike(id, formValue))
  }
}

const LocationDetails = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchComments(id)
    props.fetchLocation(id)
    props.fetchLikes(id)
  }, [])

  return (
    <div className="comments">
      <h1>{props.locationState.location.name}</h1>
      <img
        src={props.locationState.location.image}
        alt={props.locationState.location.name}
      />
      <h3>
        Likes{' '}
        <button
          onClick={() =>
            props.addLike(props.likesState.likes._id, {
              likes: props.likesState.likes.likes + 1,
              location: id
            })
          }
        >
          +
        </button>
      </h3>
      <h5>{props.likesState.likes.likes}</h5>
      <h3>Comments</h3>
      {props.commentState.comments.map((comment) => (
        <div key={comment._id}>
          <h3>
            {comment.username}: {comment.comment}
          </h3>
        </div>
      ))}
      <CommentForm />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
