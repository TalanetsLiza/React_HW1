import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Check our Price List</h1>
            <div className={styles.description}>
                But I must explain to you how all this mistaken idea of denouncing pleasure 
                and praising pain was born and I will give you a complete account of the system, 
                and expound the actual teachings of the great explorer of the truth.
            </div>
        </div>
    );
};

export default Header;
