import React from 'react';
import UserData from './components/UserData/UserData';
import './UserForArticle.css';

const UserForArticle = props => {
  const { ...data } = props;
  return (
    <div className='user-for-article__container'>
      <UserData {...data} />
    </div>
  );
};

export default UserForArticle;
