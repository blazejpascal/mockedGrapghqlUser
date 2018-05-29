import React from 'react';
import './InviteButton.css';

const InviteButton = props => {
  const { isFriend, cssClass } = props;
  const text = isFriend ? 'Friend' : 'Invite to Friends';

  return (
    <div className={`invite-button ${cssClass}`} role="button" tabIndex="0">
      <span className='invite-button__text'>{text}</span>
    </div>
  );
};

export default InviteButton
