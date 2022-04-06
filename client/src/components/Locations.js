import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadLocations } from '../store/actions/LocationAction'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToPros = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const Locations = (props) => {
  useEffect(() => {
    props.fetchLocations()
  }, [])

  return (
    <div className="locations">
      <h1>Locations</h1>
      {props.locationState.locations.map((location) => (
        <div key={location._id}>
          <h3>{location.name}</h3>
          <img src={location.image} alt={location.name} />
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToPros)(Locations)
