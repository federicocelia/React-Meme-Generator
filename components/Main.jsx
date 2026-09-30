import { useState } from "react";

export default function Main() {
  const [img, setImg] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value } = event.currentTarget;
    setImg((prev) => {
      return {
        ...prev,
        topText: value,
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
            // onChange={handleChange}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={img.imageUrl} />
        <span className="top">{img.topText}</span>
        <span className="bottom">{img.bottomText}</span>
      </div>
    </main>
  );
}
