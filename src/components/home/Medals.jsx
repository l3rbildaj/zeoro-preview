import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MedalFlickerAnimation } from "../ui/FlickerAnimation";



export default function Medals() {
    const sectionRef = useRef(null)
    return (
        <div className="flex flex-col  justify-start py-10 px-5 md:px-10 gap-10">
            <h2 ref={sectionRef} className="text-4xl font-bold">FIELDS MEDALS</h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 px-10 justify-center items-center">
                <MedalItem itemRef={sectionRef} delay={0} />
                <MedalItem itemRef={sectionRef} delay={2} />
                <MedalItem itemRef={sectionRef} delay={4} />
                <MedalItem itemRef={sectionRef} delay={6} />
                <MedalItem itemRef={sectionRef} delay={8} />
            </div>
        </div>
    )
}






const MedalItem = ({ delay, itemRef }) => {
    const inview = useInView(itemRef, { once: true })

    useEffect(
        e => {
            console.log(inview)
        }
        , [inview])
    return (
        <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: inview ? 1 : 0, translateY: inview ? 0 : 100 }} transition={{ delay: delay * .1, ease: 'easeInOut' }} className="flex flex-col z-50 gap-10">
            <div className="h-full py-5 bg-white/20 w-full"><MedalFlickerAnimation /></div>
            <div className="flex flex-col gap-0">
                <p className="text-4xl text-white">Award One</p>
                <p className="text-xl text-white/50">Coming Soon</p>
            </div>
        </motion.div>
    )
}