import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";
import "./style.css";
// import Contact from "./components/Contact";
// import ikram from "./images/ikram.jpg";
// import imran from "./images/Imran.jpg";
// import sajib from "./images/sajib.jpg";
// import Sakib from "./images/Sakib.jpg";
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="contacts">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* <Contact name="Sakibul Islam" img={Sakib} />
      <Contact name="Imran Al Hasan " img={imran} />
      <Contact name="Sajib Ahmed Bijoy" img={sajib} />
      <Contact name="Ikram Hossain" img={ikram} /> */}
    </div>
  );
}

export default App;
