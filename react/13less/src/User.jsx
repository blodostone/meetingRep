import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { render } from 'sass';

//algo
//1. create empty state ++++
//2. make http call on componentDidMount & update state ++++
//3. update render to show user data ++++
//4. handle userId change ++++


class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAvatal: null,
      userName: null,
      userLocation: null,
    }
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.userId
    if(prevProps.match.params.userId != curUserId) {
      this.getUserData(curUserId);
    }
  }

  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
     .then(response => response.json())
     .then(userData => {
       const {avatar_url, name, location} = userData;
       this.setState({
        userAvatal: avatar_url,
        userName: name,
        userLocation: location,
       });
     })

     //TODO make error handler
  }

  render() {

    const { avatar, name, location } = this.state;

    if(!avatar || !name || !location) {
      return null;
    }

    return (
      <div className="user">
       <img 
        alt="User Avatar" 
        className="user__avatar"
        src={avatar} 
       />
       <div className="user__info">
         <span className="user__name">{name}</span>
         <span className="user__location">{location}</span>
       </div>
     </div>
    )
  }
}


// const User = () => {
//   const [userData, setUserData] = useState(null);
//   const { userId } = useParams();

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }

//         throw new Error();
//       })
//       .then(userData => {
//         setUserData(userData);
//       });
//   }, [userId]);

//   if (!userData) {
//     return null;
//   }

//   const { name, location, avatar_url } = userData;
//   return (
//     <div className="user">
//       <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//       <div className="user__info">
//         <span className="user__name">{name}</span>
//         <span className="user__location">{location}</span>
//       </div>
//     </div>
//   );
// };

export default User;