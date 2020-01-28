import React from 'react';
import axios from 'axios';

export default class LogIn extends React.Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
debugger
    const params = {
      email: data.get('email'),
      password: data.get('password'),
    };
    axios.post('/dashboards/signin', params)
        .then(res => {
          debugger;
        })
  }

  render(){
    return (
        <div className='main'>
          <h2 className="sign" align="center">Log In</h2>
          <form className='form1' onSubmit={this.handleSubmit}>
            <input className='un' id='email' name='email' type='email' placeholder='Email' />
            <input className='un' id='password' name='password' type='password' placeholder='Password' />
            <div className='login-btn' align='center'>
              <button className='btn-primary'> Login</button>
            </div>
          </form>
        </div>
    );
  }
}