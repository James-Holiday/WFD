import React from "react";
import Cookie from "js-cookie";

const Login = props => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Cookie.set("USERNAME", name, { expires: 3 });
    Cookie.set("PASSWORD", password);
    props.setLoggedIn(true);
    props.setHeaderText("Logged in Header");
  };

  return (
    <div className="login">
      <div>Login</div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
