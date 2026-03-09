import { useMemo, useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [aim, setAim] = useState(0);

  const lampStyle = useMemo(
    () => ({
      "--aim": `${aim}deg`,
      "--light-opacity": isOn ? 0.82 : 0.08
    }),
    [aim, isOn]
  );

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width - 0.5;
    const tilt = Math.max(-18, Math.min(18, ratio * 36));
    setAim(tilt);
  };

  return (
    <main id="hero" className="page">
      <h1 className="title">Cute Lamp Login</h1>

      <section className={`stage ${isOn ? "on" : "off"}`} onMouseMove={onMouseMove}>
        <div className="panel-frame">
          <div className="lamp-wrap" style={lampStyle}>
            <div className="lamp-shadow" />
            <div className="light-cone" />
            <button className="lamp" onClick={() => setIsOn((v) => !v)} aria-label="Toggle lamp">
              <span className="shade">
                <span className="face">
                  <span className="eye eye-left" />
                  <span className="eye eye-right" />
                  <span className="smile" />
                </span>
              </span>
              <span className="neck" />
              <span className="stand" />
              <span className="foot" />
            </button>
          </div>

          <form className={`login ${isOn ? "awake" : "sleep"}`} onSubmit={(e) => e.preventDefault()}>
            <h2>Welcome Back</h2>
            <label htmlFor="user">Username</label>
            <input id="user" type="text" placeholder="Enter your username" />
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" placeholder="Enter your password" />
            <button type="submit" className="login-btn">
              Login
            </button>
            <a href="#0" onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
            <div className="links">
              <a href="https://github.com/SaburNayem/react_portfolio" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
              <a href="https://saburnayem.github.io/react_portfolio/#hero" target="_blank" rel="noreferrer">
                Live Hero Link
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
