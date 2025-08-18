
const BackgroundLayer = () => (
    <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Large Professional Gradient Orbs */}
            <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-gradient-radial from-blue-600/50 via-indigo-700/30 to-slate-800/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-96 -right-96 w-[800px] h-[800px] bg-gradient-radial from-teal-600/50 via-cyan-700/30 to-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-600/40 via-teal-700/25 to-slate-900/20 rounded-full blur-3xl animate-pulse delay-500" />

            {/* Additional Professional Orbs */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-steel-500/35 via-blue-600/25 to-transparent rounded-full blur-2xl animate-pulse delay-700" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-indigo-600/35 via-slate-700/25 to-transparent rounded-full blur-2xl animate-pulse delay-1500" />

            {/* Sophisticated Mesh Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/15 via-transparent to-teal-600/15 opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/15 via-transparent to-indigo-700/15 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-700/10 via-transparent to-blue-600/10 opacity-80" />

            {/* Colorful Noise Pattern */}
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />

            {/* Overlay to ensure text readability */}
            {/* <div className="absolute inset-0 bg-white/85 dark:bg-black/75" /> */}
        </div>
    </>
)

export default BackgroundLayer