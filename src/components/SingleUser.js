import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const SingleUser = ({ getUser, match, singleUser }) => {
  useEffect(() => {
    getUser(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    html_url,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
    location,
    company,
    blog,
  } = singleUser;
  return (
    <Fragment>
      <div className='info'>
        <div className='grid-1'>
          <img src={avatar_url} alt={name} />
          <h3>{name}</h3>
          <a href={html_url}>
            <button className='btnn'>view github profile</button>
          </a>
        </div>
        <div className='grid-2'>
          <h3 style={{ textDecoration: "underline", color: "blue" }}>BIO</h3>
          {bio != null ? <p>{bio}</p> : <p>not yet uploaded :(</p>}

          <br />
          <br />
          {company !== null ? (
            <h4>company : {company}</h4>
          ) : (
            <h4>company : null</h4>
          )}
          {blog !== "" ? <h4>blog : {blog}</h4> : <h4>blog : null</h4>}
          {location !== null ? (
            <h4>location : {location}</h4>
          ) : (
            <h4>location : null</h4>
          )}
        </div>
      </div>
      <div className='badge'>
        <ul>
          <li>Followers:{followers}</li>
          <li>Following:{following}</li>
          <li>public repos:{public_repos}</li>
          <li>Public gist:{public_gists}</li>
        </ul>
      </div>
      <br />
      <br />
      <Link to='/'>
        <button className='btnn'>back</button>
      </Link>
    </Fragment>
  );
};

export default SingleUser;
