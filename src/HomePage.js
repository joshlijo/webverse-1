import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <img src="./spidey.jpg" alt="Webverse Logo" className="logo" />
          <h1 className="organization-name">St. Peter Parker High School</h1>
        </div>
      </header>

      {/* Body */}
      <main>
        <div className="login-tabs-container">
          {/* Student Login Tab */}
          <div className="login-tab">
            <h2>Student</h2>
            <Link to="./StudentLogin">
              <button className="login-button">Login</button>
            </Link>
          </div>

          {/* Warden Login Tab */}
          <div className="login-tab">
            <h2>Warden</h2>
            <button className="login-button">Login</button>
          </div>

          {/* Faculty Login Tab */}
          <div className="login-tab">
            <h2>Faculty</h2>
            <button className="login-button">Login</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
