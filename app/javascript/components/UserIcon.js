import React from 'react';

export default class UserIcon extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
        <div className='user-icon'>
          Logged in as - {this.props.logged_in_user.first_name} {this.props.logged_in_user.last_name}
        </div>
    );
  }
}
