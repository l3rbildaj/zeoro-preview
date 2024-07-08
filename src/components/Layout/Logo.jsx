import { motion } from "framer-motion";
import { useState } from "react";






export default function Logo() {

    const [hovered, setHovered] = useState(false);

    return (
        <motion.svg onMouseEnter={e => setHovered(true)} onMouseLeave={e => setHovered(false)} className="w-32 cursor-pointer transition-all hover:scale-[1.01] z-10" width="330" height="60" viewBox="0 0 330 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="74.3555" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="124.863" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="197.359" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="269.859" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="74.3555" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="124.863" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="197.359" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="269.859" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="74.3555" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="124.863" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="197.359" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="269.859" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="74.3555" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="124.863" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="197.359" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="269.859" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect y="50.4395" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="74.3555" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="124.863" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="197.359" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="269.859" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="12.8555" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="87.2227" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="137.73" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="210.227" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="282.723" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="37.918" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="112.273" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="162.781" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="235.277" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="307.773" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="12.8555" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="87.2227" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="137.73" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="210.227" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="282.723" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="12.8555" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="87.2227" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="137.73" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="210.227" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="282.723" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="37.918" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="112.273" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="162.781" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="235.277" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="307.773" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="37.918" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="112.273" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="162.781" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="235.277" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="307.773" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="12.8555" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="87.2227" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="137.73" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="210.227" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="282.723" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="12.8555" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="87.2227" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="137.73" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="210.227" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="282.723" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="37.918" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="112.273" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="162.781" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="235.277" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="307.773" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="37.918" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="112.273" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="162.781" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="235.277" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="307.773" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="25.3789" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="99.7461" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="150.254" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="222.754" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="295.25" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="50.4414" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="175.309" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="247.805" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="320.301" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
            <motion.rect x="25.3789" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="99.7461" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="150.254" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="222.754" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="295.25" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="25.3789" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="99.7461" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="150.254" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="222.754" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="295.25" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="50.4414" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="175.309" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="247.805" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="320.301" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="50.4414" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="175.309" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="247.805" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="320.301" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="25.3789" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="99.7461" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="150.254" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="222.754" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="295.25" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="25.3789" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="99.7461" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="150.254" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="222.754" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="295.25" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="white" />
            <motion.rect x="50.4414" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="175.309" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="247.805" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="#2B2B2B" />
            <motion.rect x="320.301" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="white" />
            <motion.rect x="50.4414" y="50.4395" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="175.309" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="247.805" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="white" />
            <motion.rect x="320.301" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="#2B2B2B" />
        </motion.svg>

    )






}