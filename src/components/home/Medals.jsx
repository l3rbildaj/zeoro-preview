import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MedalFlickerAnimation } from "../ui/FlickerAnimation";
import AnimatedText from "../ui/TextAnimation";



export default function Medals() {
    const sectionRef = useRef(null)
    return (
        <div ref={sectionRef} className="flex flex-col  justify-start py-10 px-5 md:px-10 gap-10">
            <AnimatedText
                text={"FIELDS MEDALS"}
                stagger={0.05}
                className={
                    " uppercase  text-3xl md:text-4xl flex flex-wrap max-w-[500px] pt-10 font-bold text-white "
                }
            />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 px-0 justify-center items-center">
                <MedalItem itemRef={sectionRef} delay={0} number={"one"} />
                <MedalItem itemRef={sectionRef} delay={2} number={"two"} />
                <MedalItem itemRef={sectionRef} delay={4} number={"three"} />
                <MedalItem itemRef={sectionRef} delay={6} number={"four"} />
                <MedalItem itemRef={sectionRef} delay={8} number={"five"} />
            </div>
        </div>
    )
}






const MedalItem = ({ delay, itemRef, number }) => {
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
                <p className="text-3xl text-white capitalize">Award {number}</p>
                <p className="text-lg text-white/50">Coming Soon</p>
            </div>
        </motion.div>
    )
}