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
          <DashboardHeader/>
          <DashboardTabName/>
          <Tab/>
        </div>
    );
  }
}