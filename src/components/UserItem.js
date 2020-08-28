import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ val: { avatar_url, login } }) => {
  return (
    <div>
      <div className='card'>
        <div className='in-card'>
          <img src={avatar_url} alt='img'></img>
          <p>{login}</p>
          <div className='btn'>
            <Link to={`/user/${login}`} style={{ textDecoration: "none" }}>
              more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
