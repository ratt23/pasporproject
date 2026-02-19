import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INTRO_SUBTITLE, STEPS, INTRO_PRE, INTRO_MAIN } from "../data/passportSteps";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const ITEMS_PER_PAGE = 3;

const StepPager = () => {
    const [page, setPage] = useState(0);
    const [selectedStep, setSelectedStep] = useState(null);
    const totalPages = Math.ceil(STEPS.length / ITEMS_PER_PAGE);

    const currentSteps = STEPS.slice(
        page * ITEMS_PER_PAGE,
        (page + 1) * ITEMS_PER_PAGE
    );

    const nextPage = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    // Variants for page transition
    const params = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.3 }
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-blue-50/50 px-6 pt-10 pb-10 font-sans">
            <div className="w-full max-w-[420px] flex flex-col h-full relative">

                {/* Branding Header */}
                <div className="flex justify-center items-center py-4 mb-2">
                    {/* Logo Placeholder */}
                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse flex items-center justify-center text-xs text-slate-400 font-bold">
                            LOGO
                        </div>
                        <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">
                            Logo Instansi
                        </span>
                    </div>
                </div>

                {/* Header - Matches "Selamat datang di..." style */}
                <div className="mb-8 text-center px-4">
                    <h2 className="text-xl font-bold text-blue-500">
                        {INTRO_PRE}
                    </h2>
                    <h1 className="text-3xl font-extrabold text-slate-800 mt-1 leading-tight">
                        {INTRO_MAIN}
                    </h1>
                    <p className="mt-3 text-sm text-blue-400 font-medium">
                        Ikuti langkah-langkah berikut, tekan <span className="italic font-bold">Next</span> untuk lanjut.
                    </p>
                </div>

                {/* Card Container - White, Rounded, Soft Shadow */}
                <div className="relative z-10 w-full overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-xl shadow-blue-900/5 ring-1 ring-slate-100 flex-1 flex flex-col">

                    <div className="relative flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="space-y-4 py-2" // Reduced space-y slightly, using gaps in items
                            >
                                {currentSteps.map((step, index) => {
                                    const stepNumber = page * ITEMS_PER_PAGE + index + 1;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedStep(step)}
                                            className={`group relative flex items-start gap-4 py-6 cursor-pointer transition-all duration-200 hover:bg-blue-50/50 rounded-2xl px-3 -mx-3 ${index < currentSteps.length - 1 ? 'border-b border-slate-100' : ''}`}
                                        >
                                            {/* Number Bubble - Top aligned usually */}
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                                    {stepNumber}
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1 min-w-0 pr-2">
                                                <h3 className="text-lg font-bold text-slate-700 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs font-medium text-slate-500 leading-relaxed whitespace-pre-line">
                                                    {step.body}
                                                </p>
                                            </div>

                                            {/* Image - Right aligned */}
                                            {step.image && (
                                                <div className="w-24 flex-shrink-0 self-center -mr-2">
                                                    <img
                                                        src={step.image}
                                                        alt="Illustration"
                                                        className="w-full drop-shadow-lg object-contain transform group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pager Footer - Outside the card */}
                <div className="mt-6 flex items-center justify-between px-2">
                    <button
                        onClick={prevPage}
                        disabled={page === 0}
                        className="flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3 text-sm font-bold text-brand-blue transition disabled:opacity-0 hover:bg-blue-100 active:scale-95"
                    >
                        <ChevronLeft size={20} strokeWidth={3} />
                        Prev
                    </button>

                    <span className="text-sm font-semibold text-slate-400">
                        Halaman {page + 1} / {totalPages}
                    </span>

                    <button
                        onClick={nextPage}
                        disabled={page === totalPages - 1}
                        className="flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition disabled:opacity-0 hover:bg-brand-dark active:scale-95"
                    >
                        Next
                        <ChevronRight size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Footer Info */}
                <div className="mt-8 mb-4 text-center">
                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 Kantor Imigrasi. All rights reserved.
                    </p>
                </div>

                {/* Detail Popup Modal */}
                <AnimatePresence>
                    {selectedStep && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-6">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedStep(null)}
                                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                            />

                            {/* Modal Card */}
                            <motion.div
                                layoutId={`step-${selectedStep.title}`}
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl p-6 overflow-hidden"
                            >
                                <button
                                    onClick={() => setSelectedStep(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-40 h-40 mb-6 relative">
                                        <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-xl transform scale-75" />
                                        <img
                                            src={selectedStep.image}
                                            alt={selectedStep.title}
                                            className="relative w-full h-full object-contain drop-shadow-xl"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-extrabold text-slate-800 mb-4 leading-snug">
                                        {selectedStep.title}
                                    </h3>

                                    <div className="w-full bg-blue-50/50 rounded-2xl p-4 border border-blue-100/50">
                                        <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-line text-left text-sm">
                                            {selectedStep.body}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedStep(null)}
                                        className="mt-6 w-full py-3.5 bg-brand-blue text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default StepPager;
