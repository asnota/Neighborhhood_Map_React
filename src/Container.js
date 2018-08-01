import React from 'react';
import Map from './Map'
import GoogleApi from './utils/GoogleApi'
import GoogleApiComponent from './GoogleApiComponent'
import ScriptCache from './utils/ScriptCache'

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyB1ijS6t6OKocfsfAdu9Nuawo1NfwzJLHQ'
})(Container)
