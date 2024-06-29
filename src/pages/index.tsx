

import { landingPageData, metaData } from "@/constants";
import MetaData from "@/metadata";
import DesignPage from "./design";

export default function Home() {

  return (
    <>
      <MetaData
        data={metaData.home}
        imageData={[...landingPageData.design, ...landingPageData.creative]}
        scroll={false}
      />
      <DesignPage />
      {/* <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{
            originX: isPresent ? 0 : 1,
            backgroundColor:
              router.pathname === "/creative"
                ? "var(--adobe-purple)"
                : "var(--ez-orange)",
          }}
          className={styles.privacyScreen}
        /> */}
    </>
  );
}
