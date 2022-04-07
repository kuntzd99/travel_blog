import { connect } from 'react-redux'
import {
  CreateComment,
  AddUsername,
  AddCommentBody
} from '../store/actions/CommentAction'
import { useNavigate, useParams, Link } from 'react-router-dom'

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToPros = (dispatch) => {
  return {
    postComment: (formValue) => dispatch(CreateComment(formValue)),
    addUsername: (formValue) => dispatch(AddUsername(formValue)),
    addCommentBody: (formValue) => dispatch(AddCommentBody(formValue))
  }
}

const CommentForm = (props) => {
  const { id } = useParams()

  const handleUsernameChange = (event) => {
    event.preventDefault()
    props.addUsername(event.target.value)
  }

  const handleCommentChange = (event) => {
    event.preventDefault()
    props.addCommentBody(event.target.value)
  }

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    let payload = {
      username: props.commentState.newUsername,
      comment: props.commentState.newCommentBody,
      location: id
    }
    props.postComment(payload)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          onChange={handleUsernameChange}
          value={props.newUsername}
          type="text"
          name="username"
        />
        <label>Comment: </label>
        <input
          onChange={handleCommentChange}
          value={props.newCommentBody}
          type="text"
          name="comment"
        />
        <button type="submit">Submit</button>
      </form>
      <Link to={`/${id}`}>Back</Link>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToPros)(CommentForm)
