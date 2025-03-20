import React from "react";
import useFetch from "../../hooks/useFetch";

const Foods = () => {

    const [foods, foodsLoading, foodsError] = useFetch("https://api.npoint.io/60f0e85d4d2c10680b05");
    console.log(foods, foodsError);

    return(
        <>
            <h1>Foods</h1>
            {foodsLoading && <p>Carregando...</p>}
            {foodsError && <p>Erro ao carregar os dados: {planets.Error}</p>}
            {!foodsLoading && 
            !foodsError && 
            (!foods || foods.length == 0)}
            {!foodsLoading && 
            !foodsError && 
            foods &&
            foods.map((f, i) => <div className="card" key={i}>{f.name}</div>)
            }
        </>
    );
};

export default Foods;