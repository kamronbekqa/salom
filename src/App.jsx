import "./App.css";

function App() {
  return (
    <>
      <header>
        <div class="container">
          <div className="header-wrapper">
            <div className="header-left">
              <img src="../1.png" alt="" />
            </div>
            <div className="header-right">
              <h3>Home</h3>
              <h3>Features</h3>
              <h3>Community</h3>
              <h3>Blog</h3>
              <h3>Pricing</h3>
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="container">
            <div className="hero-wrapper">
              <div className="hero-left">
                <h1>
                  Lessons and insights
                  <br /> from 8 years
                </h1>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button>Register</button>
              </div>
              <div className="hero-right">
                <img src="../2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <img className="img" src="../3.png" alt="" /> <br />
      <br />
      <img className="img" src="../4.png" alt="" />
      <br />
      <br />
      <img className="img" src="../5.png" alt="" />
      <footer>
        <div class="container"></div>
      </footer>
    </>
  );
}

export default App;
