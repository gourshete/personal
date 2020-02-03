import React from 'react'

export default class DashboardHeader extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
        <div className='dashboard-header'>
          <div className='dashboard-header-text'>Dashboard</div>
        </div>
    );
  }
} 