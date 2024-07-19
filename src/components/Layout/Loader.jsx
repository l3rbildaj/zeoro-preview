import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { LoaderFlickerAnimation } from "../ui/FlickerAnimation";



export default function Loader({ loading, setLoading }) {
    const [finished, setFinished] = useState(false)
    const [gonnaScale, setGonnaScale] = useState(false)


    useEffect(
        () => {
            setTimeout(() => {
                setFinished(true)
            }, 1000)
            setTimeout(() => {
                setGonnaScale(true)
            }
                , 3000)

            setTimeout(() => {
                setLoading(false)
            }
                , 6000)
        }
    )



    return (
        <motion.div className="relative top-0 left-0 w-full h-screen ">
            <div className='absolute z-0 md:-top-40 -top-[50vh] -right-[100vw] md:-right-40 scale-50 md:scale-75'>
                <div className='relative'>
                    <motion.div initial={{ right: 0 }} animate={{ right: '-100%' }} transition={{ duration: .7, delay: 1 }} className='bg-black w-full h-full absolute'>

                    </motion.div>
                    <svg className="a" width="1109" height="754" viewBox="0 0 1109 754" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M492.743 317.586C376.771 65.0472 142.194 -2.99681 0.742428 -6.25265L4.19412 -156.213C180.704 -152.15 481.07 -67.2654 629.057 254.987C682.188 370.685 773.027 455.229 871.958 512.714C971.506 570.559 1074.91 598.415 1145.96 603.47L1135.32 753.092C1040.28 746.33 914.871 711.135 796.597 642.409C677.705 573.325 561.716 467.78 492.743 317.586Z" fill="url(#paint0_linear_564_209)" fill-opacity="0.8" />
                        <defs>
                            <linearGradient id="paint0_linear_564_209" x1="-66.0854" y1="-232.627" x2="1276.11" y2="703.59" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2E2099" stop-opacity="0" />
                                <stop offset="0.365" stop-color="#30219D" />
                                <stop offset="0.635" stop-color="#7354C1" />
                                <stop offset="1" stop-color="#886BC9" stop-opacity="0.31" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="w-full flex z-40 flex-col justify-center scale-50 md:scale-100 items-center h-full">
                <LoaderFlickerAnimation disapear={gonnaScale} finished={finished} />
                <AnimatePresence>
                    {/* {
                        finished &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="bg-black absolute w-[40%] h-[40%] text-4xl font-bold z-20">
                        </motion.div>
                    } */}
                    {/* {
                        finished && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale: gonnaScale ? 3 : 1 }} transition={{ duration: .5, ease: 'easeInOut' }} className="bg-[#121212] w-56 z-20 h-28 absolute"></motion.div>
                    } */}
                    {
                        finished && <>
                            <LogoAnimationLoader gonnaScale={gonnaScale} />
                        </>
                    }
                </AnimatePresence>
            </div>
            {
                gonnaScale &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-5 left-0 w-full  flex justify-center items-center text-white">
                    Equations Solved by <span className='text-violet-600 mx-2 cursor-pointer'>@Omar</span> and <span className='text-violet-600 mx-2 cursor-pointer'>@Zakaria</span>
                </motion.div>
            }
        </motion.div>
    );
}





const LogoAnimationLoader = ({ gonnaScale }) => {


    return (
        <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1, scale: gonnaScale ? 2 : 1 }} transition={{ delay: .5, duration: .5, ease: 'easeInOut' }} className="w-40 absolute bg-black h-10 z-20" width="330" height="60" viewBox="0 0 330 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="74.3555" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="124.863" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="197.359" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="269.859" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="74.3555" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="124.863" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="197.359" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="269.859" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="74.3555" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="124.863" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="197.359" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="269.859" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="74.3555" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="124.863" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="197.359" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="269.859" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} y="50.4395" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="74.3555" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="124.863" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="197.359" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="269.859" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="12.8555" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="87.2227" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="137.73" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="210.227" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="282.723" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="37.918" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="112.273" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="162.781" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="235.277" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="307.773" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="12.8555" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="87.2227" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="137.73" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="210.227" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="282.723" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="12.8555" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="87.2227" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="137.73" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="210.227" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="282.723" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="37.918" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="112.273" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="162.781" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="235.277" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="307.773" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="37.918" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="112.273" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="162.781" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="235.277" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="307.773" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="12.8555" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="87.2227" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="137.73" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="210.227" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="282.723" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="12.8555" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="87.2227" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="137.73" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="210.227" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="282.723" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="37.918" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="112.273" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="162.781" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="235.277" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="307.773" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="37.918" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="112.273" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="162.781" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="235.277" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="307.773" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="25.3789" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="99.7461" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="150.254" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="222.754" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="295.25" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="50.4414" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="175.309" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="247.805" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="320.301" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="25.3789" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="99.7461" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="150.254" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="222.754" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="295.25" y="12.8564" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="25.3789" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="99.7461" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="150.254" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="222.754" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="295.25" y="37.9111" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="50.4414" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="175.309" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="247.805" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="320.301" y="12.8564" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="50.4414" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="175.309" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="247.805" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="320.301" y="37.9111" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="25.3789" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="99.7461" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="150.254" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="222.754" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="295.25" y="25.3857" width="9.2306" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="25.3789" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="99.7461" y="50.4395" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="150.254" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="222.754" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="295.25" y="50.4365" width="9.2306" height="9.56026" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="50.4414" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="175.309" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="247.805" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="320.301" y="25.3857" width="9.56026" height="9.2306" rx="4.6153" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="50.4414" y="50.4395" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="175.309" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ color: 'white' }} x="247.805" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
            <motion.rect initial={{ color: 'white', opacity: 1 }} transition={{ delay: 3, duration: .4 }} animate={{ opacity: .2 }} x="320.301" y="50.4365" width="9.56026" height="9.56026" rx="4.78013" fill="currentColor" />
        </motion.svg>

    )
}