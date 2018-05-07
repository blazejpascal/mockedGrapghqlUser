import React from 'react';
import PropTypes from 'prop-types';
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
InviteButton.defaultProps = {
  isFriend: false,
};

InviteButton.propsType = {
isFriend: PropTypes.boolean
}
export default InviteButton
