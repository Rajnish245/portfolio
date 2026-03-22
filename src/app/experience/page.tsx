'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SplitText } from '../components/ui/SplitText'
import MagneticWrapper from '../components/ui/MagneticWrapper'
import "../globals.css";
import ScrollReveal from '../components/ui/ScrollReveal';

const Page = () => {
    const [selected, updateSelected] = useState('training');

    return (
        <div className="bg-bgColor min-h-screen relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-theme/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-theme/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
                <div className="absolute top-[40%] right-[10%] w-[25%] h-[25%] bg-teal-theme/5 rounded-full blur-[80px] animate-pulse delay-1000"></div>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32'>
                <section className='mb-24 px-4'>
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-4 mb-8"
                            >
                                <div className="h-px w-12 bg-blue-theme/30"></div>
                                <span className="text-cyan-theme text-[10px] font-bold tracking-[0.4em] uppercase">Chronicle</span>
                            </motion.div>
                            <SplitText
                                text="Academic Journey"
                                className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight"
                            />
                        </div>
                        <p className="text-white/30 text-sm max-w-xs font-sans tracking-wide leading-relaxed border-l border-blue-theme/20 pl-8">
                            Tracing the educational foundations that power my technical expertise and creative approach.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        {/* Timeline Feature */}
                        <div className="relative mb-24 max-w-4xl mx-auto px-4">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2"></div>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-theme/20 via-blue-theme to-cyan-theme/20 -translate-y-1/2 origin-left shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                            ></motion.div>

                            <div className="relative flex justify-between items-center">
                                {['2023 – Present', '2018 – 2020', '2017 – 2018'].map((year, i) => (
                                    <motion.div
                                        key={year}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col items-center gap-4 group"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-bgColor border-2 border-blue-theme/50 relative z-10 transition-all duration-500 group-hover:border-blue-theme group-hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]">
                                            <div className="absolute inset-1 rounded-full bg-blue-theme opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="absolute inset-0 rounded-full bg-blue-theme animate-ping opacity-0 group-hover:opacity-20"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-bgColor px-4 py-1.5 rounded-full border border-white/5 group-hover:text-blue-theme/70 group-hover:border-blue-theme/20 transition-all duration-500">{year}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* LPU Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-blue-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/lpu.png" alt="LPU" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">LOVELY PROFESSIONAL UNIVERSITY</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">BTech - Computer Science and Engineering</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Phagwara, Punjab</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-theme font-bold text-[10px] uppercase tracking-widest bg-blue-theme/10 px-3 py-1 rounded-full">CGPA: 7.00</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* DAV Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-blue-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/dav.png" alt="DAV" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">D.A.V. PUBLIC SCHOOL</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">Intermediate</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Bokaro, Jharkhand</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-cyan-theme font-bold text-[10px] uppercase tracking-widest bg-cyan-theme/10 px-3 py-1 rounded-full">Percentage: 81</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* UP Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-blue-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/up.png" alt="UP Board" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">BVN PUBLIC SCHOOL</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">Matriculation</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Jehanabad, Bihar</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-teal-theme font-bold text-[10px] uppercase tracking-widest bg-teal-theme/10 px-3 py-1 rounded-full">Percentage: 77</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 pt-16 border-t border-white/5">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-4 mb-8"
                        >
                            <div className="h-px w-12 bg-cyan-theme/30"></div>
                            <SplitText 
                                text="Professional"
                                className="text-blue-theme text-[10px] font-bold tracking-[0.4em] uppercase"
                            />
                        </motion.div>
                        <SplitText
                            text="Work Experience"
                            delay={0.2}
                            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                        />
                    </div>
                    <p className="text-white/30 text-sm max-w-xs font-sans tracking-wide leading-relaxed border-l border-cyan-theme/30 pl-8 text-left hidden md:block">
                        Transforming technical skills into impactful contributions within diverse professional environments.
                    </p>
                </div>

                <article className="max-w-5xl mx-auto py-12">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="space-y-4 sticky top-32"
                        >
                            {["training", "exam", "music", "lpu"].map((job) => (
                                <MagneticWrapper key={job}>
                                    <motion.button
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                        }}
                                        onClick={() => updateSelected(job)}
                                        className={clsx(
                                            "w-full text-left p-6 rounded-2xl transition-all duration-500 border",
                                            selected === job
                                                ? "bg-white/5 border-blue-theme/50 shadow-2xl shadow-blue-theme/10"
                                                : "border-transparent opacity-40 hover:opacity-100"
                                        )}
                                    >
                                        <h3 className={clsx(
                                            "text-xl font-serif font-bold mb-1",
                                            selected === job ? "text-blue-theme" : "text-white"
                                        )}>
                                            {job === "training" ? "DSA Bootcamp" : job === "exam" ? "Exam Platform" : job === "music" ? "My Music App" : "University"}
                                        </h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                                            {job === "training" ? "Training" : job === "exam" ? "Project" : job === "music" ? "Project" : "Degree"}
                                        </p>
                                    </motion.button>
                                </MagneticWrapper>
                            ))}
                        </motion.div>

                        <div className="min-h-[600px]">
                            <JobInformation key={selected} selected={selected} />
                        </div>
                    </div>
                </article>

                <section className="mt-12 md:mt-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/#technical-prowess">
                            <MagneticWrapper>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 md:px-16 py-5 md:py-6 rounded-full bg-gradient-to-r from-blue-theme to-cyan-theme text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs shadow-[0_20px_40px_rgba(255,107,53,0.2)] hover:shadow-[0_25px_50px_rgba(255,107,53,0.4)] transition-all duration-500 group relative overflow-hidden border border-white/10"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Explore Technical Prowess
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>
                            </MagneticWrapper>
                        </Link>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

const JobInformation = ({ selected }) => {
    const jobData = {
        training: {
            title: "C++ Programming: OOPs and DSA",
            company: "Training Bootcamp",
            resp: [
                "Completed an intensive DSA bootcamp focused on mastering core Data Structures and Algorithms.",
                "Implemented key data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
                "Solved complex computer science problems using optimized and efficient approaches.",
                "Achieved Grades A+ through consistent performance and logical thinking.",
                "Explored greedy techniques, recursion, and advanced problem-solving."
            ],
            tools: ["C++", "Data Structures", "Algorithms", "OOPs"]
        },
        exam: {
            title: "AI-Based Exam Evaluation System",
            company: "Full Stack Project",
            resp: [
                "Built a full-stack platform used by teachers and students.",
                "Implemented automated delivery, 30-sec autosave, and AI-assisted subjective grading.",
                "Cut manual evaluation time by 70% and improved grading consistency by 85%.",
                "Implemented secure RBAC and high-reliability autosave with 99.9% sync accuracy.",
                "Enabled real-time monitoring powering 100+ concurrent sessions via Socket.IO."
            ],
            tools: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Generative AI"]
        },
        music: {
            title: "My Music Platform",
            company: "Full Stack Project",
            resp: [
                "Created a mood-based music streaming platform with personalized playlists.",
                "Implemented YouTube-based song uploads and a dynamic user dashboard.",
                "Enabled dynamic mood-based playlist generation.",
                "Designed a responsive in-browser music player for seamless playback.",
                "Optimized UI with Tailwind CSS and designed secure authentication."
            ],
            tools: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"]
        },
        lpu: {
            title: "Computer Science Degree",
            company: "Lovely Professional University",
            resp: [
                "Maintaining an academic record with a 7.00 CGPA.",
                "Focusing on data structures, algorithms, and core computer science principles.",
                "Participating in coding problem solving and development of full-stack projects.",
                "Enhancing knowledge in Web Technologies, RESTful APIs, and Frameworks."
            ],
            tools: ["CS Core", "Software Engineering", "Mathematics"]
        }
    };

    const jobInfo = jobData[selected];

    return (
        <motion.div
            key={selected}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-12"
        >
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="space-y-4"
            >
                <h2 className="text-4xl text-white font-serif font-bold">{jobInfo.title}</h2>
                <p className="text-blue-theme font-bold uppercase tracking-[0.3em] text-xs pb-4 border-b border-white/5">{jobInfo.company}</p>
            </motion.div>

            <div className="space-y-8">
                <motion.h3 
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]"
                >
                    Achievements
                </motion.h3>
                <ul className="space-y-6">
                    {jobInfo.resp.map((resp, i) => (
                        <motion.li
                            key={i}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            className="flex gap-4 text-white/60 leading-relaxed text-lg font-sans border-l border-blue-theme/20 pl-6"
                        >
                            {resp}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <motion.h3 
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]"
                >
                    Technologies Wrapped
                </motion.h3>
                <motion.div 
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                    className="flex flex-wrap gap-3"
                >
                    {jobInfo.tools.map((tool, i) => (
                        <motion.span 
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 12 } }
                            }}
                            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-widest hover:border-blue-theme/50 transition-colors"
                        >
                            {tool}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Page;
