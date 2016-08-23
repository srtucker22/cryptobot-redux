import React from 'react';
import './loading-dialog.component.css';

export const LoadingDialog = ({progress})=> {
  function getBars() {
    return Array(Math.floor(progress / 10));
  }

  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='loading'>
          Loading
        </div>
        <br/>
        <div className='bar-outer'>
          {getBars().map(bar=> <div className='bar-inner'></div>)}
        </div>
      </div>
    </div>
  );
};
LoadingDialog.propTypes = {
  progress: React.PropTypes.number
};

export default LoadingDialog;
