import React from "react";
import { useState, useEffect } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });
    const [allMemeData, setAllMemeData] = useState({});

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemeData(data.data.memes);
        }

        getMemes();
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        let index = Math.floor(Math.random() * 100);
        setMeme({
            ...meme,
            randomImage: allMemeData[index].url,
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />

                <input
                    type="text"
                    className="form-input"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />

                <button className="form-button" onClick={handleClick}>
                    Get a meme
                </button>
            </div>

            <div className="meme">
                <img
                    src={meme.randomImage}
                    className="meme-image"
                    alt="random meme"
                />

                <h1 className="meme-text top">{meme.topText}</h1>
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    );
};

export default Meme;
