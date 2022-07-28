import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("http://localhost:8080/meals");
            const loadedMeals = await response.json();
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    let toRender;

    if (isLoading) {
        toRender = <div class={classes.loader}></div>;
    }

    if (httpError) {
        toRender = (
            <p>An error occurred while getting the meals list: {httpError}</p>
        );
    }

    const mealsList = meals.map((meal) => {
        return (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        );
    });

    if (meals.length > 0) {
        toRender = <ul>{mealsList}</ul>;
    }

    return (
        <section className={classes.meals}>
            <Card>{toRender}</Card>
        </section>
    );
};

export default AvailableMeals;
