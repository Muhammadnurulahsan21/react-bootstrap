import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const items = [
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
    {
      name: "World's No-1 Image",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://i.pinimg.com/originals/99/83/cf/9983cf8edddae80ed2b9599a26111bc7.jpg",
    },
  ];

  return (
    <div className="App">
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {items.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
