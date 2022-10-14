import React, { useState } from "react";
import PropTypes from "prop-types";
import UserDetails from "components/UserDetails/UserDetails";
import s from "components/userList/UserList.module.css";

function UserList({ users }) {
  const [isActive, setIsActive] = useState(-1);

  const handleClick = (id) => {
    if (isActive === id) return setIsActive(-1);
    setIsActive(id);
  };

  return (
    <ol className={s.userList}>
      {users.map((user) => (
        <UserDetails
          key={user.login.uuid}
          data={user}
          active={isActive}
          onClick={handleClick}
        />
      ))}
    </ol>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
