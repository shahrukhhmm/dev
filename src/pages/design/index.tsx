import {
  brandsData,
  btsData,
  designCarouselData,
  faqs,
  headerDescription,
  metaData,
  ourProcess,
  pageTags,
  services
} from "@/constants";
import {
  BTS,
  Brands,
  Contact,
  DesignWork,
  Faq,
  FormModal,
  Hero,
  Navbar,
  Portal,
  Process,
  Services
} from "@/features/layout";
import MetaData from "@/metadata";
import styles from "@/styles/Home.module.css";
import { Scroll } from "@/utils/scroll";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DesignPage() {
  const page = "build";
  const color = "--ez-orange";

  const [showModal, setShowModal] = useState(false);
  const isPresent = useIsPresent();
  const router = useRouter();

  useEffect(() => {
    Scroll(0, "auto");
  }, []);

  function onOpen() {
    setShowModal(true);
  }
  function onClose() {
    setShowModal(false);
  }

  return (
    <>
      <MetaData data={metaData.design} imageData={btsData.design} />
      <Navbar/>
      <div className={styles.heroContainer}>
        <Hero
          page={page}
          description={headerDescription.design}
          tags={pageTags.design}
        />
        {/* <DesignHero
          leftData={designMarqueeLeftData}
          rightData={designMarqueeRightData}
        /> */}
      </div>
      <DesignWork content={designCarouselData} />
      <Services content={services.design} color={color} />
      <BTS content={btsData.design} page={page} />
      <Brands content={brandsData.design} columns={4} />
      <Process content={ourProcess.design} color={color} />
     
      <Faq content={faqs.design} color={color} />
      <Contact onOpen={onOpen} text={page} isOpen={showModal} />
      <Portal root="contact-root">
        <FormModal onClose={onClose} showModal={showModal} color={color} />
      </Portal>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor:
            router.pathname === "/creative"
              ? "var(--adobe-purple)"
              : "var(--ez-orange)",
        }}
        className={styles.privacyScreen}
      />
    </>
  );
}
