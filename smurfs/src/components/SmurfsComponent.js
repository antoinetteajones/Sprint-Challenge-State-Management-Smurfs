import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';


const SmurfsComponent = props => {
  return(
    <div>
      {!props.name && props.isLoading && (
        <h2>Find a Smurf</h2>
      )}

     
      <button 
        onClick={() => props.fetchSmurfs()}>Get a Smurf</button>

        {props.smurfs
          &&
        !props.isLoading
          &&
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div>
                <h2 key={smurf.id}>{`Name: ${smurf.name}`}</h2>
                <h2 key={smurf.id}>{`Age: ${smurf.age}`}</h2>
                <h2 key={smurf.id}>{`Height: ${smurf.height}`}</h2>
              </div>//line 32 closing div
            )
          })}
        </div>//line 29 closing div
      }

    </div>//line 10 closing div
  )
}

const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsComponent);