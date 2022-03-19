import Link from "next/link";
import styles from "Styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <form
        name="contact"
        action="https://getform.io/f/9d9c8628-8008-43df-965e-a93427ec768a"
        method="POST"
      >
        <p className={styles.form_item}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" required />
        </p>
        <p className={styles.form_item}>
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" rows={4} required></textarea>
        </p>
        <p>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl border-none bg-primery p-1 font-bold text-white"
          >
            Send
          </button>
        </p>
        <p className={styles.or_email}>
          or per email at{" "}
          <Link href="mailto:hello@tobiaswild.de">
            <a target="_blank">hello@tobiaswild.de</a>
          </Link>
        </p>
      </form>
    </section>
  );
}
