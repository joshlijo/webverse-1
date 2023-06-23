import './StudentLogin.css';

const StudentLogin = () => {
  return (
    <div className="login-container">
      <div className="login-tab">
        <h2>Student Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="input-field" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
