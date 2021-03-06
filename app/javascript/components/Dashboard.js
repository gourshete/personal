import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardTabName from './DashboardTabName'
import Tab from './Tab';
//import Tab from '../components/tab.js'

export default class Dashboard extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
        <div className='dashboard-main'>
          <DashboardHeader logged_in_user={this.props.logged_in_user}/>
          <DashboardTabName/>
          <Tab/>
        </div>
    );
  }
}