import React from 'react';
import axios from 'axios';


class UserList extends React.Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios.get('dashboards/list')
        .then(res=>{
          this.setState({
            users: res.data || []
          })
    })
  }

  render() {
    return(
      <div>
        <h2> User List</h2>
        {this.state.users.map((user) => {
          return <li>{user.first_name} {user.last_name}</li>
        })}

      </div>
    );
  }
}

export default UserList;