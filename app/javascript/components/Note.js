import React from 'react'
import DashboardHeader from "./DashboardHeader";
import DashboardTabName from "./DashboardTabName";

export default class Note extends React.Component{
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({
      notes: this.props.notes
    });
  }

  render() {
    return(
        <div>
          <div className='dashboard-main'>
            <DashboardHeader logged_in_user={this.props.logged_in_user}/>
            <DashboardTabName/>
            <div className='tab-body'>
`              <p className='note'>{this.props.notes[0].data}</p>
            </div>
          </div>
        </div>
    );
  }
}