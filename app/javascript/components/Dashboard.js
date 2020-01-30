import React from 'react';

export default class Dashboard extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
        <div className='dashboard-main'>
          <div className='dashboard-header'>
            <div className='dashboard-header-text'>Dashboard</div>
          </div>
          <div className='dashboard'>
            <div className='notes tab'>
              <a href='#'>Notes</a>
            </div>
            <div className='keep tab'>Keep</div>
            <div className='reminder tab'>Reminders</div>
          </div>
        </div>
    );
  }
}