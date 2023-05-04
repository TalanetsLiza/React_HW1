import styles from "./PriceList.module.scss";
import List from "./list/List";
import Header from "./header/Header";

const PriceList = () => {
    return (
        <div className={styles.container}>
            <Header />
            <List />
        </div>
    );
};

export default PriceList;
