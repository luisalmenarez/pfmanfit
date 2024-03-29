"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface FooterSectionProps {
  title: string;
  list: { text: string; href: string; target?: string; rel?: string }[];
}

const FooterSection: FC<FooterSectionProps> = ({ title, list }) => {
  const fadeInConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.1 },
    transition: { delay: 0, duration: 0.6 },
    variants: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.section {...fadeInConfig}>
      <h2 className="text-2xl font-semibold text-zinc-300 mb-5"> {title} </h2>
      <ul>
        {list.map(({ text, href, target, rel }, index) => (
          <li
            key={index}
            className="text-zinc-300 mb-4 hover:line-through hover:text-primary transition-all duration-300">
            <Link href={href} target={target} rel={rel}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default FooterSection;
