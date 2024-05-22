"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
    children: React.ReactNode;
    words: string[];
    before: string;
    duration?: number;
    framerProps?: HTMLMotionProps<"h1">;
    className?: string;
}

export function WordRotate({
    children,
    words,
    before,
    duration = 2500,
    framerProps = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
        transition: { duration: 0.25, ease: "easeOut" },
    },
    className,
}: WordRotateProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <div className="overflow-hidden py-2">
            <AnimatePresence mode="wait">
                <div>
                    <h1 className={cn(className, "mr-3")}>{children}</h1>
                    <div className="flex items-center">
                        <h1 className={cn(className, "mr-3")}>{before}</h1>
                        <motion.h1 key={words[index]} className={cn(className)} {...framerProps}>
                            {words[index]}
                        </motion.h1>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
}
