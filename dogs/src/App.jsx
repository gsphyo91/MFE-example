import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dogImg, setDogImg] = useState("");

  const fetchDogImg = () => {
    setDogImg('');
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (!dogImg) {
      fetchDogImg();
    }
  }, []);

  return (
    <div>
      <header>
        <h3>Dog</h3>
        <div>
          <button onClick={fetchDogImg}>New Dog</button>
        </div>
        {dogImg ? (
          <div>
            <img src={dogImg} width="400px" alt="dog" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;
