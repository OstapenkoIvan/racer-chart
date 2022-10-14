import React from 'react';
import PropTypes from 'prop-types';
import { getLapTime, getPenaltyTime } from 'components/utils/randomData';
import s from 'components/UserDetails/UserDetails.module.css';

function UserDetails({ data, active, onClick }) {
  const {
    picture,
    name,
    login: { uuid },
    location: { postcode },
  } = data;

  const lapTime = getLapTime(postcode);
  const penaltyTime = getPenaltyTime(postcode);

  const handleClick = () => {
    onClick(uuid);
  };

  const activeItem = active === uuid ? s.isActive : '';

  return (
    <li className={`${s.userItem} ${activeItem}`} onClick={handleClick}>
      <div className={s.userContainer}>
        <div></div>
        <img src={picture.thumbnail} alt={name.first} className={s.avatar} />
        <div className={s.thumb}>
          <p className={s.userName}>
            {name.first}
            {name.last}
          </p>
          <span className={s.timeDetails}>
            {lapTime} | {String(postcode).slice(0, 2)}км/ч
          </span>
          <span className={s.penaltyTime}>
            штрафное время {penaltyTime ? penaltyTime : '00:00:00'}
          </span>
        </div>
      </div>
    </li>
  );
}

UserDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserDetails;
