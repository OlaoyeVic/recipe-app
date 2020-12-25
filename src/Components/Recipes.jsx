import React from "react";
import styles from "../recipes.module.css";

function Recipes(props) {
  return (
    <div className={styles.recipe}>
      <h3 className={styles.title}>{props.title}</h3>
      <ul className={styles.ul}>
        {props.ingredients.map((ingredient) => {
          return <li className={styles.li}>{ingredient.text}</li>;
        })}
      </ul>
      <p>{props.calories}</p>
      <img className={styles.image} src={props.image} alt="" />
    </div>
  );
}
export default Recipes;
