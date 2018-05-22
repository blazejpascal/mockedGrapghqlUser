import React from 'react';
import avatar from './assets/jpg/avatar-1577909_960_720.png';
import InviteButton from './components/InviteButton/InviteButton'
import './UserData.css';

const UserData = props => {
  const { ...data} = props;

  return (
    <div className="user-data__container">
      <img src={avatar} alt="avatar" className="user-data__photo" />
      <div className="user-data__data">
        <div className="user-data__data--name">`{data.name} ({data.age})` </div>
        <div className="user-data__data--rest-data"> {data.website}</div>
      </div>
      <InviteButton cssClass="user-data__button" isFriend= {data.isFriend} />
    </div>
  );
};

export default UserData;
