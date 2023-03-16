import { useState } from "react";

export const Search = (props) => {
  const [cidade, setCidade] = useState("");
  const searchInput = (e) => {
    e.preventDefault();
    let currentValue = document.querySelector("input[name=searchInput]").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=8381d40a331b0bcb3294734519dedd3b&units=metric`;
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        const { main, name, sys, weather } = data;

        if (sys !== undefined) {
          if (weather !== undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

            setCidade(`

                <div >

                <p>${main.temp}</p>

                <p>${sys.country}</p>

                <p>${name}</p>

                <p>${weather[0]["description"]}</p>

                <img src="${icon}" />

                </div>

                `);
          }
        } else {
          setCidade("");
        }
      });
  };
  return (
    <div className="search">
      <h2>Digite a Cidade que você quer saber a previsão do tempo</h2>
      <form onSubmit={(e) => searchInput(e)}>
        <input
          type={"text"}
          name={"searchInput"}
          placeholder={props.placeholder}
        />
        <input type="submit" value="Pesquisar por cidade!" />
      </form>
      {cidade != "" ? (
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: cidade }}
        />
      ) : (
        <div className="container">Pesquise por algo acima...</div>
      )}
    </div>
  );
};
