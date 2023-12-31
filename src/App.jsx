import "./App.sass";

function App() {
  return (
    <div className="container">
      <img className="img" src="/images/illustration-hero.svg" alt="Hero Illustration"/>
      <div className="content">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasrs on
          any device anywhere you like!
        </p>
        <div className="plan-container">
          <img src="/images/icon-music.svg" alt="" className="icon" alt="Music Icon"/>
          <div className="plan">
            <h2 className="selected">Annual Plan</h2>
            <p className="cost">$59.99/year</p>
          </div>
          <a href="#" className="plan-status">
            Change
          </a>
        </div>
        <button className="btn">Proceed to Payment</button>
        <a href="#" className="order-status">
          Cancel Order
        </a>
      </div>
    </div>
  );
}

export default App;
