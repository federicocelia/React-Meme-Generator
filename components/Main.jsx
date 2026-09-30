import { useState, useEffect } from "react";

export default function Main() {
  const [img, setImg] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  function changeImg() {
    if (!memes.length) return;
    const randomIndex = Math.floor(Math.random() * memes.length);
    setImg((prev) => {
      return {
        ...prev,
        imageUrl: memes[randomIndex].url,
      };
    });
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setImg((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button onClick={changeImg}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={img.imageUrl} />
        <span className="top">{img.topText}</span>
        <span className="bottom">{img.bottomText}</span>
      </div>
    </main>
  );
}
