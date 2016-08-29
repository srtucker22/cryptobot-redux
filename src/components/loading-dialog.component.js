import _ from 'underscore';
import React from 'react';
import './loading-dialog.component.css';

export const LoadingDialog = ({progress})=> {
  function getBars() {
    return Math.floor(progress / 10);
  }

  return (
    <div>
      <div className='inner'>
        <div className='loading'>
          Loading
        </div>
        <br/>
        <div className='bar-outer'>
          {_.range(getBars()).map((bar, i)=> <div
            className='bar-inner' key={i}></div>)}
        </div>
      </div>
    </div>
  );
};
LoadingDialog.propTypes = {
  progress: React.PropTypes.number
};

export default LoadingDialog;
