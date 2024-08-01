"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type HeadingProps = {
    heading: string,
    subheading: string
}

export default function SectionHeadings({ heading, subheading }: HeadingProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div ref={ref} className="flex flex-col gap-6 lg:max-w-[80%]">
            <motion.h3
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                className="instrument-sans text-lg text-sleekWhite/80"
            >
                {heading}
            </motion.h3>
            <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                className="text-sleekWhite text-3xl lg:text-4xl"
            >
                {subheading}
            </motion.p>
        </div>
    )
}
