import React from "react";
import UserItem from "./UserItem";
import Loading from "./Loading";

const home = ({ loadin, user }) => {
  if (loadin) {
    return <Loading />;
  } else {
    return (
      <div className='card'>
        {user.map((e) => (
          <UserItem key={e.id} val={e} />
        ))}
      </div>
    );
  }
};

export default home;
