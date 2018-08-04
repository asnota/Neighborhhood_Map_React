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

    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'key'
})(Container)
