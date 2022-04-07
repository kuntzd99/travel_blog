import { connect } from 'react-redux'
import { LoadComments, CreateComment } from '../store/actions/CommentAction'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CommentForm from './CommentForm'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id))
  }
}

const LocationDetails = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchComments(id)
    console.log(props.commentState)
  }, [])

  return (
    <div className="comments">
      <h1>Comments</h1>
      {props.commentState.comments.map((comment) => (
        <div key={comment._id}>
          <h3>
            {comment.username}: {comment.comment}
          </h3>
        </div>
      ))}
      <Link to={`/addcomment/${id}`}>Add Comment</Link>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
