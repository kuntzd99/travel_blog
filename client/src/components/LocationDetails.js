import { connect } from 'react-redux'
import { LoadComments } from '../store/actions/CommentAction'
import { LoadLocation } from '../store/actions/LocationAction'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CommentForm from './CommentForm'

const mapStateToProps = ({ commentState, locationState }) => {
  return { commentState, locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    fetchLocation: (id) => dispatch(LoadLocation(id))
  }
}

const LocationDetails = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchComments(id)
    props.fetchLocation(id)
  }, [])

  return (
    <div className="comments">
      <h1>{props.locationState.location.name}</h1>
      <img
        src={props.locationState.location.image}
        alt={props.locationState.location.name}
      />
      <h1>Comments</h1>
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
