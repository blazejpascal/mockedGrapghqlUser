import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import UserForArticle from './UserForArticle/UserForArticle';
import './UsersForArticle.css'

const UsersForArticle = () => (
<Query
    query={gql`
      {
        profileInfos (size: 4) {
          id
          name
          age
          website
          isFriend
          }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error </p>;
  return (
    <div className="mocked-users">
      {
      data.profileInfos.map(item => (
        <div key={item.id} className= "mocked-user">
          <UserForArticle {...item} />
        </div>
      ))}
    </div>
  )
}}
</Query>
)

export default UsersForArticle
