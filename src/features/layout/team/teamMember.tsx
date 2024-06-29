import { TeamData } from "@/types";
import Image from "next/image";
import styles from "./team.module.scss";
import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { contactFormText } from "@/constants";

interface TeamMemberProps {
  member: TeamData;
  index: number;
  color: string;
}

export const TeamMember = memo(function TeamMember({
  member,
  index,
  color,
}: TeamMemberProps) {
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.325,
      },
    },
    hover: {
      opacity: 0.45,
      scale: 1.1,
    },
  };
  const [isHovered, setIsHovered] = useState(false);
  function hoverHandler() {
    setIsHovered(true);
  }
  function onMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div className={styles.memberContainer}>

      <p className={styles.memberName}>{member.name}</p>
      <div className={styles.lineThrough} />
      <div
        className={styles.positionContainer}
        style={{
          color: color.slice(0, 2) === "--" ? `var(${color})` : color,display:"flex",flexDirection:"column"
        }}
      >
        <p>{member.position}</p>
        <p>{member.name}</p>
       
      </div>
    </div>
  );
});
