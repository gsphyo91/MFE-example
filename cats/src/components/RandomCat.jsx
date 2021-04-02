import { useEffect, useState } from "react";

export default function RandomCat() {
  const [catImg, setCatImg] = useState("");

  const fetchCatImg = () => {
    setCatImg("");

    fetch(`https://aws.random.cat/meow`)
      .then((res) => res.json())
      .then((catInfo) => {
        setCatImg(catInfo.file);
      });
  };

  useEffect(() => {
    if (!catImg) {
      fetchCatImg();
    }
  }, []);

  return (
    <div>
      <header>
        <h3>Cat</h3>
        {/* <h1 style={{color: 'red', fontSize: '2rem'}}>Cat</h1> */}
        <div>
          <button onClick={fetchCatImg}>New Cat</button>
        </div>
        {catImg ? (
          <div>
            <img src={catImg} width="400px" alt="cat" />
            {/* <img style={{borderRadius: '50%'}} src={catImg} width="400px" alt="cat" /> */}
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}
