import React from 'react';
import './users/users.css'
import * as axios from 'axios';
import userPhoto from '../../assets/img/male-icon.png'

class Users extends React.Component {
  
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  
  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id}>
        <span>
          <div className='userPhoto__wrapper'>
            <img src={u.photos.small != null
              ? u.photos.small : userPhoto} alt={u.name}/>
          
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                this.props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                this.props.follow(u.id)
              }}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>;
  }
}


export default Users;

