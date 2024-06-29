import classNames from "classnames";
import styles from "./brands.module.scss";
import { BrandsData } from "@/types";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { TextGenerateEffect } from "@/features/ui/text-generate-effect";

interface BrandsProps {
  content: Array<BrandsData>;
  columns: 3 | 4;
}

export function Brands({ content, columns }: BrandsProps) {
  const [windowWidth] = useWindowSize();
  function getMaxWidth(maxWidth: number | undefined) {
    if (windowWidth > 500) {
      return maxWidth;
    } else if (maxWidth) {
      return maxWidth * 0.7;
    } else return 150 * 0.7;
  }

  const words = `We handle projects of any scale and complexity across various domains.
Our solutions are tailored to meet the specific needs and goals of our clients.
We stay ahead of the curve by leveraging the latest technologies and trends.
We are committed to delivering high-quality products that exceed expectations.
At Devthrone, your success is our mission. Partner with us to transform your digital presence and achieve your business objectives with innovative, reliable, and scalable solutions. Visit us at devthrone.com to learn more about how we can help you.
`;
  return (
    <section id="us" className={styles.brandsSection}>
      <h1 className={classNames("largeText", styles.brandsTitle)}>
        WHY CHOOSE <br className={styles.titleBreak} />{" "}
        <span className="textGradient">US?</span>
      </h1>
      {/* <div
        className={classNames(
          styles.brandsGrid,
          columns === 3 ? styles.threeCols : styles.fourCols,
        )}
      >
       
      </div> */}
      <div>
        <TextGenerateEffect words={words} />
      </div>
    </section>
  );
}
