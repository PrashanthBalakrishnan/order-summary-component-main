import iconMusic from "../assets/icon-music.svg";
import illustrationHero from "../assets/illustration-hero.svg";

const Summary = () => {
  return (
    <main className="summary">
      <img src={illustrationHero} alt="person listening to music" />
      <h1 className="summary__heading">Order Summary</h1>
      <p className="summary__desc">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="payment">
        <img className="payment__icon" src={iconMusic} alt="Music icon" />
        <div>
          <h2 className="payment__heading">Annual Plan</h2>
          <p className="payment__amount">$59.99/year</p>
        </div>
        <button className="payment__changebtn">Change</button>
      </div>
      <button className="summary__proceed">Proceed to Payment</button>
      <button className="summary__cancel">Cancel Order</button>
    </main>
  );
};
export default Summary;
