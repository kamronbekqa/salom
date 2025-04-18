import "./App.css";

function App() {
  const userName = prompt("Ismingizni kiriting:");
  const hour = new Date().getHours();
  const date = new Date().toLocaleDateString();
  const randomNumber = Math.floor(Math.random() * 101);
  const isDay = hour >= 6 && hour < 18;

  return (
    <div className={isDay ? "light" : "dark"}>
      <div className="card">
        <p>
          Hello my name is: <span className="highlight">{userName}</span>
        </p>
        <p>
          This is the day: <span className="highlight">{date}</span>
        </p>
        <p>A random number from 0 to 100:</p>
        <h1>{randomNumber}</h1>
      </div>
    </div>
  );
}

export default App;
