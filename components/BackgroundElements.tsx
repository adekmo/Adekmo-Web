const BackgroundElements = () => (
    <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
            {/* Professional Animated Floating Elements */}
            <div className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full animate-pulse shadow-lg shadow-emerald-500/30" />
            <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-ping shadow-lg shadow-blue-500/30" />
            <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rotate-45 animate-pulse shadow-lg shadow-teal-500/30" />

            {/* Large Professional Shapes */}
            <div className="absolute top-1/4 right-10 w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full animate-pulse delay-200 shadow-xl shadow-slate-600/20" />
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rotate-45 animate-pulse delay-800 shadow-lg shadow-blue-600/30" />
            <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-gradient-to-r from-steel-500 to-slate-600 rounded-full animate-ping delay-1200 shadow-lg shadow-steel-500/30" />

            {/* Professional Grid Pattern */}
            <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle, #1e40af 1px, transparent 1px), radial-gradient(circle, #0891b2 1px, transparent 1px), radial-gradient(circle, #059669 1px, transparent 1px)`,
            backgroundSize: '80px 80px, 60px 60px, 100px 100px',
            backgroundPosition: '0 0, 20px 20px, 40px 40px'
            }} />

            {/* Sophisticated Flowing Lines */}
            <div className="absolute top-1/3 right-1/3 w-2 h-32 bg-gradient-to-b from-blue-500 via-indigo-600 to-slate-700 opacity-50 animate-pulse rounded-full shadow-lg" />
            <div className="absolute bottom-1/3 left-1/2 w-32 h-2 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 opacity-50 animate-pulse delay-1000 rounded-full shadow-lg" />
            <div className="absolute top-1/4 left-1/4 w-2 h-40 bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-700 opacity-45 animate-pulse delay-500 rounded-full shadow-lg" />

            {/* Additional Professional Shapes */}
            <div className="absolute top-3/4 right-1/4 w-10 h-10 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full opacity-70 animate-pulse delay-700 shadow-xl shadow-gray-600/20" />
            <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-gradient-to-r from-teal-600 to-emerald-700 rotate-45 opacity-80 animate-pulse delay-300 shadow-lg shadow-teal-600/30" />
            <div className="absolute top-10 right-1/3 w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full opacity-70 animate-ping delay-1500 shadow-lg shadow-indigo-600/30" />

            {/* Large Professional Accent Lines */}
            <div className="absolute top-1/2 left-10 w-1 h-48 bg-gradient-to-b from-blue-500 via-indigo-600 to-slate-700 opacity-60 rounded-full shadow-lg" />
            <div className="absolute bottom-1/2 right-10 w-1 h-48 bg-gradient-to-b from-teal-500 via-cyan-600 to-blue-700 opacity-60 rounded-full shadow-lg" />
            <div className="absolute top-20 left-1/2 w-48 h-1 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-700 opacity-60 rounded-full shadow-lg" />

            {/* Masculine Corner Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-600/30 to-transparent rounded-br-full" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-600/30 to-transparent rounded-tr-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-600/30 to-transparent rounded-tl-full" />
        </div>
    </>
)

export default BackgroundElements