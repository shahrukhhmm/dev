import classNames from "classnames";
import styles from "./hero.module.scss";

interface HeroProps {
  page: "design" | "creative";
  description: string;
  tags: Array<string>;
}

export function Hero({ page, description }: HeroProps) {
  return (
    <div className={styles.heroContent}>
      {/* HEADING */}
      <div className={styles.heroHeadingContainer}>

        <h1 className={styles.heroHeading}>
          DEV{" "}
          <span
            className={styles.headingGradient}
            style={{
              backgroundColor:
                page === "design" ? "var(--ez-orange)" : "var(--adobe-purple)",
            }}
          >
            THRONE
          </span>
        </h1>
      </div>
      {/* DESCRIPTION */}
      <p className={styles.heroDescription}>{description}</p>
      {/* TAGS */}
      <div
        className={classNames(
          styles.heroTags,
          page === "creative" && styles.creativeHeroTags,
        )}
      >
        {/* {tags.map((tag) => (
          <Button variant={ButtonVariant.gradient} key={tag}>
            {tag}
          </Button>
        ))} */}
      </div>
      {/* <FeaturedReview content={featuredReviewData[page]} /> */}
    </div>
  );
}
