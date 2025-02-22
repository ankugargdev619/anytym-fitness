'use client';
import { motion } from "motion/react";
export const LoadingAnimation = () => {
    return <>
        <div className="w-full h-screen flex items-center justify-center bg-background">
                <motion.svg
                    initial={{opacity : 0.6}}
                    animate={{opacity:[0.6,1,0.6]}}
                    transition={{repeat:Infinity,duration:1.2,ease:"easeInOut"}}
                    id="eAVOaXDFR611" width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><g>
                    <path className="fill-handle" d="M20.120303,194.212209c0-64.362281,21.882156-173.571557,129.70449-173.571558s130.175281,108.482226,130.175281,173.571555-43.39176,65.089341-43.39176.000001c.000001-86.785775-36.715468-130.178666-86.783521-130.178666-57.795475,0-86.783521,40.722071-86.783521,130.178666c0,65.08934-43.39176,65.08934-42.920969.000002Z" transform="matrix(.460917 0 0 0.460905 80.49492 45.486621)" strokeWidth="0"/>
                    <path d="M80.29963,169.85019C80.29963,131.273,111.57262,100,150.14982,100s69.85019,31.27299,69.85019,69.85019c0,25.60276-13.77469,47.98827-34.31735,60.14981h-71.06569c-20.54266-12.16154-34.31735-34.54705-34.31735-60.14981h.00001ZM149.701529,200c20.83174,0,30-9.318124,30-30.149814s-9.018445-29.850186-29.850185-29.850186-30.149815,9.018496-30.149815,29.850186s9.16826,30.149814,30,30.149814Z" transform="translate(-.149815 15)" fill="#ef3816" strokeWidth="0"/></g>
                    <motion.line 
                        animate={{rotate : 360}}
                        transition={{repeat: Infinity, duration:1.2, ease: "linear"}}
                        x1="150" y1="160" x2="150" y2="210" className="stroke-handle"  strokeDasharray="25 25" strokeWidth="3" strokeLinecap="round"/>
                    <motion.line 
                        animate={{rotate : 360}}
                        transition={{repeat: Infinity, duration:14.4, ease: "linear"}}
                        x1="130" y1="185" x2="170" y2="185" className="stroke-handle" strokeDasharray="20 20" strokeWidth="4" strokeLinecap="round"/>
                </motion.svg>
        </div>
    </>
}