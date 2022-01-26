import React from "react";

const Recipes = (props) => {

    const { data } = props;
    // console.log(data[0].recipe.image);
    return (
        <>
            <section className="container">
                {data.map((ele) => {
                    return (
                        <>
                            <div className="card">
                                <div className="card-img">
                                <img src={ele.recipe.image} alt="image" />
                                </div>
                                <h1>{ele.recipe.label}</h1>
                                <hr />
                                <ul>
                                    {ele.recipe.ingredientLines.map((inner) => {
                                        return (
                                            <>
                                                <li>{inner}</li>
                                                <hr />
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Recipes;