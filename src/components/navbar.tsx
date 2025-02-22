'use client'

import { NamedLogo } from "@/icons/logo";
import Link from "next/link";
import { Button } from "./button";
import { motion,useScroll, AnimatePresence} from "motion/react"
import { useEffect, useState } from "react";

const links = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : "About Us",
        path : "/about-us"
    },
    {
        name : "Contact Us",
        path : "/contact-us"
    },
    {
        name : "Blogs",
        path : "/blogs"
    },
    {
        name : "FAQs",
        path : "/faqs"
    }
]


export const Navbar = () => {
    const {scrollYProgress} = useScroll();
    const [opacity, setOpacity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const yProgress = scrollYProgress.on("change",(latest) => {
            if(latest==0){
                setOpacity(1)
            } else {
                setOpacity(0.6)
            }
        });
        return () => {
            yProgress();
        }
    },[scrollYProgress])

    return (<div className="sticky top-5 h-14 z-20">
        <div className="absolute w-full h-full md:h-20 top-5">
            <div className="relative flex flex-col md:flex-row justify-center items-center">
                <motion.div
                    animate={{opacity}}
                    className="absolute top-0 bg-background w-[90vw] max-w-[1440px] px-10 h-full md:h-20 rounded-2xl overflow-hidden" >
                        <div className="absolute top-0 w-[90vw] max-w-[1440px] px-10 h-full md:h-20 rounded-2xl backdrop-blur-sm" />
                </motion.div>
                
                <div className="px-5 lg:px-10 overflow-hidden md:h-20 flex flex-col md:flex-row py-2 justify-start md:justify-between items-center w-[90vw] max-w-[1440px] rounded-2xl border-brand-600">
                    <div className="z-20 h-14 md:h-20 flex justify-between items-center w-full">
                        <NamedLogo width="40" height="40" size="xs" />
                        <div className="hidden md:flex items-center h-full gap-5 lg:gap-20">
                            {links.map((link,_id)=>(
                                <Link key={_id} href={link.path}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden md:block">
                            <Button label="Join Now" variant="primary"/>
                        </div>
                        <motion.div onClick={()=>setIsOpen(!isOpen)} 
                            animate = {isOpen ? 'open' : 'closed'}
                            className="relative md:hidden flex flex-col gap-1">
                            <motion.div
                                variants={{
                                    open : {
                                        top : [-12,0,0],
                                        rotate : [0,0,45]
                                    },
                                    closed : {
                                        top : [0,0,-12],
                                        rotate : [45,0,0]
                                    }
                                }}
                                className="absolute -top-3 right-0 w-10 bg-foreground h-1 rounded-full"></motion.div>
                            <motion.div 
                                variants={{
                                    open : {
                                        top : [0,0,0],
                                        rotate : [0,0,-45]
                                    },
                                    closed : {
                                        top : [0,0,0],
                                        rotate : [45,0,0]
                                    }
                                }}
                                className="absolute top-0 right-0 w-10 bg-foreground h-1 rounded-full"></motion.div>
                            <motion.div 
                                variants={{
                                    open : {
                                        top : [12,0,0],
                                        rotate : [0,0,-45]
                                    },
                                    closed : {
                                        top : [0,0,12],
                                        rotate : [-45,0,0]
                                    }
                                }}
                                className="absolute top-3 right-0 w-10">
                                    <div className="w-6 bg-foreground h-1 rounded-full mr-0"></div>
                                </motion.div>

                        </motion.div>
                    </div>
                    {isOpen && 
                        <AnimatePresence>
                            <motion.div 
                                initial={{height : 0}}
                                animate={{height : 'auto'}}
                                exit={{height : 0}}
                                transition={{duration : 0.5,ease : 'easeInOut'}}
                                className="py-8 z-20 md:hidden flex flex-col items-center justify h-full gap-8 lg:gap-20">
                                {links.map((link,_id)=>(
                                    <Link key={_id} href={link.path}>
                                        {link.name}
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    }
                </div>
                
           </div>
        </div>
    </div>
    );
}