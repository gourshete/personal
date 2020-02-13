import React from 'react';

export default class DashboardTabName extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
        <div className='dashboard'>
          <div className='notes tab-name'>
            <a href='/notes/list'>Notes</a>
          </div>
          <div className='keep tab-name'>Keep</div>
          <div className='reminder tab-name'>Reminders</div>
        </div>
    );
  }
}