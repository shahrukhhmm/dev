import Image from "next/image";
import styles from "./contact.module.scss";
import { Button, ButtonVariant } from "@/features/ui";
import Link from "next/link";

interface ContactProps {
  text: "design" | "create";
  onOpen: () => void;
  isOpen: boolean;
}

export function Contact({ text, onOpen, isOpen }: ContactProps) {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.purpleOrb} />
      <div className={styles.contactContainer}>
        
        <div>
          <h1 className={styles.contactLargeText}>
            LET&apos;S
            <span
              className={styles.specialText}
              style={{
                backgroundColor:
                  text === "create"
                    ? "var(--ez-orange)"
                    : "var(--adobe-purple)",
              }}
            >
              {" "}
              CONNECT
            </span>{" "}
            &
          </h1>
          <h1 className={styles.contactLargeText}>
            <span
              className={styles.specialText}
              style={{
                backgroundColor:
                  text === "create"
                    ? "var(--adobe-purple)"
                    : "var(--ez-orange)",
              }}
            >
              {text}
            </span>{" "}
            TOGETHER
          </h1>
        </div>
        <p className={styles.contactDescription}>
          Let&apos;s make your digital dreams a reality.
          <br className={styles.break} /> Contact us today to start the journey.
        </p>
        <div className={styles.policyLinks}>
          <a href="mailto:shahrukh862001@gmail.com"

          >
            shahrukh862001@gmail.com
          </a>
          |
          <a href="mailto:hasnadsatti740@gmail.com"

          >
            hasnadsatti740@gmail.com
          </a>
        </div>
        <div className={styles.policyLinks}>
          <a href="tel:+92445566158"

          >
            +92445566158
          </a>
          |
          <a href="tel:+92255329325"

          >
            +92255329325
          </a>
          |
          <a href="tel:+923035851328"

          >
            +923035851328
          </a>
        </div>
        <div className={styles.policyLinks}>
          OFFICE ONE:
          <a href="#"

          >
            D172 D-Block Sattelite Town, 6th Road, Near Total Petrol Pump, Rawalpindi
          </a>



        </div>
        <div className={styles.policyLinks}>
          OFFICE TWO:
          <a href="#"

          >
            US-173 3rd Floor, Malkabad Plaza 6th Road, Rawalpindi.
          </a>



        </div>

      </div>


      <div className={styles.orangeOrb} />
      {/* <div className={styles.policyLinks}>
        <Link
          href="/privacy-policy"
          scroll={false}
          shallow
          className={styles.link}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="/terms-and-conditions"
          scroll={false}
          shallow
          className={styles.link}
        >
          Terms & Conditions
        </Link>
      </div> */}
    </section>
  );
}
