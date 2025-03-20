import React from "react";
import useFetch from "../../hooks/useFetch";

const Planets = () => {

    const [planets, planetsLoading, planetsError] = useFetch("https://api.npoint.io/52c9ad7afe45dc91c53d");
    console.log(planets, planetsError);

    return(
        <>
            <h1>My Planets</h1>
            {planetsLoading && <p>Carregando...</p>}
            {planetsError && <p>Erro ao carregar os dados: {planets.Error}</p>}
            {!planetsLoading && 
            !planetsError && 
            planets &&
            planets.map((p, i) => <li key={i}>{p.nome}</li>)
            }
        </>
    );
};

export default Planets;