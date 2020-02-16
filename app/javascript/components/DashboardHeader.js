import React from 'react'
import UserIcon from "./UserIcon";

export default class DashboardHeader extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
        <div className='dashboard-header'>
          <div className='dashboard-header-text'>Dashboard</div>
          <UserIcon logged_in_user={this.props.logged_in_user}/>
        </div>
    );
  }
} 