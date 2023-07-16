import React, { useState } from 'react';
import './Login.css'; // CSS 파일을 import합니다.

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 구현
    if (username === 'admin' && password === 'password') {
      onLogin(username);
    } else {
      alert('로그인 정보가 올바르지 않습니다.');
    }
  };

  return (
    <div className="login-container"> {/* .login-container 클래스 추가 */}
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
