import { motion } from "framer-motion";
import { Loader2, BookOpen } from "lucide-react"; // Using BookOpen as placeholder logo if needed, or just a shape
import { SITE_TITLE } from "../data/passportSteps";
import splashBg from "../assets/splash.png";


const Splash = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-300"
        >
            {/* Background Image */}
            <img
                src={splashBg}
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-between p-6 w-full max-w-md h-full pt-20">

                {/* Logo Container (Top Section) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8 flex flex-col items-center"
                >
                    {/* Logo Placeholder Box */}
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-slate-200/80 backdrop-blur-md shadow-xl border-2 border-white/50 mb-6">
                        <BookOpen className="h-12 w-12 text-slate-500" strokeWidth={2} />
                        <span className="absolute bottom-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Logo</span>
                    </div>

                    {/* Loading Spinner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-8"
                    >
                        <div className="relative h-12 w-12 rounded-full border-[5px] border-blue-600/30 border-t-blue-600 animate-spin" />
                        <div className="absolute top-0 left-0 h-12 w-12 md:hidden"></div>
                    </motion.div>

                </motion.div>

                {/* Title Section (Bottom) */}
                <div className="mt-auto pb-12 text-center w-full">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                    >
                        {SITE_TITLE}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.6 }}
                        className="mt-2 text-white/90 font-medium text-lg drop-shadow-sm"
                    >
                        Menyiapkan panduan...
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Splash;
