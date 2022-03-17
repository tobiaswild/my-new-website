import SanityImage from 'Components/parts/SanityImage'
import styles from 'Styles/Header.module.css'

export default function HomeHeader({ imageUrl, text, desc }) {
    return (
        <header className={styles.home_header} id="top">
            <div className={styles.header_bg}></div>
            <SanityImage imageUrl={imageUrl} />
            <div className={styles.header_text}>
                <h1 className="mb-2">{text}</h1>
                <p>{desc}</p>
            </div>
        </header>
    )
}
