import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const Load = (props) => (
  <div className="container text-center">
    <h2>Enter merchant ID</h2>
    <div className="row">
      <TextField
        hintText="Merchant id" onChange={props.updateMerchantId}/>
    </div>
    <div className="row">
      <RaisedButton label="Configure" onClick={props.clickMerchantConfigure} />
    </div>
  </div>
)

Load.propTypes = {
  updateMerchantId: React.PropTypes.func.isRequired,
  clickMerchantConfigure: React.PropTypes.func.isRequired,
}

export default Load
