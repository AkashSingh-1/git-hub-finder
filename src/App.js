import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleUser from "./components/SingleUser";

const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [singleUser, setSingleUser] = useState({});

  /*  async componentDidMount() {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_scerete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  } */

  const search = async (e) => {
    setLoading(true);
    let res = await axios.get(
      `https://api.github.com/search/users?q=${e}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_scerete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data.items);
    setLoading(false);
  };
  const getUser = async (username) => {
    setLoading(true);
    let res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_scerete=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setSingleUser(res.data);
    setLoading(false);
  };

  const clearAll = () => {
    setUser([]);
  };
  const alertfun = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Alert alert={alert} />

        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <div>
                <Search
                  search={search}
                  clear={user.length > 0 ? true : false}
                  clearAll={clearAll}
                  alertfun={alertfun}
                />
                <Home user={user} loadin={loading} />
              </div>
            )}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={(props) => (
              <SingleUser
                {...props}
                getUser={getUser}
                singleUser={singleUser}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
