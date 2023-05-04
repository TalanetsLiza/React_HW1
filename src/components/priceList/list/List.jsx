import { cardPrice } from "../../../data/cardPrice";
import Button from "../../button/Button";
import styles from "./List.module.scss";

const List = () => {
    return (
        <div className={styles.container}>
            {cardPrice.map(item => {
                const popularityTitle = item.popularity ? styles.popularityTitle : "";
				const popularityPrice = item.popularity ? styles.popularityPrice : "";
                return (
                    <div className={styles.card} key={item.id}>
                        <h3 className={`${styles.title} ${popularityTitle}`}>{item.title}</h3>
                        <div className={`${styles.price} ${popularityPrice}`}>{item.price}</div>
                        <div className={styles.text}>{item.text}</div> 
                        <div className={styles.downloads}>{item.downloads}</div>
                        <div className={styles.memory}>{item.memory}</div> 
                        <Button text="LEARN MORE" />
                    </div>
                );
            })}
        </div>
    );
};

export default List;
