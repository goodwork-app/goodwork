
import React from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          this is { name }
        </h1>
        <Link to="/profile"> Profile </Link>
        <button type="button" className="btn btn-primary">
          do goodwork
        </button>
        <Outlet />
      </div>
    );
  }
}

export default App;
