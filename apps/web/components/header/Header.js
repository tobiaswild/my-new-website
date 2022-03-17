import SanityImage from 'Components/parts/SanityImage'
import styles from 'Styles/Header.module.css'

export default function Header({ imageUrl, text, desc }) {
    return (
        <header className={styles.header}>
            <div className={styles.header_bg}></div>
            <SanityImage imageUrl={imageUrl} />
            <div className={styles.header_text}>
                <h1>{text}</h1>
                <p>{desc}</p>
            </div>
        </header>
    )
}
