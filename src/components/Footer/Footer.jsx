// import React from 'react';

const Footer = () => {
    return (
        <div className="mt-[250px] px-2">
            <div className="relative bg-[#050814] text-white pt-40 pb-8 px-4 sm:px-6 lg:px-8 font-sans mt-32">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 sm:px-6">
                    {/* Decorative thin-border wrapper */}
                    <div className="rounded-[24px] border border-white/10 p-1 bg-transparent backdrop-blur-sm">
                        {/* Main Card with Soft Mesh Gradient */}
                        <div className="relative overflow-hidden rounded-[20px] bg-white bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.4),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(254,215,170,0.5),transparent_40%)] px-4 py-10 text-center shadow-2xl sm:px-12 sm:py-16">

                            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Subscribe to our Newsletter
                            </h2>
                            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-gray-500">
                                Get the latest updates and news right in your inbox!
                            </p>

                            {/* Input Form: Stacks vertically on mobile, switches to horizontal row on sm screens */}
                            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-3">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full flex-auto rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto flex-none rounded-lg bg-gradient-to-r from-[#d976a3] via-[#e49b73] to-[#f4d166] px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:opacity-95 active:scale-[0.99] transition-all whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* --- Main Footer Content --- */}
                <div className="mx-auto max-w-7xl mt-12 sm:mt-16 ">

                    {/* Cricket Logo Section */}
                    <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
                        <div className="relative w-24 h-20 flex flex-col items-center justify-center">
                            {/* Logo Image Placeholder */}
                            <img src="https://i.ibb.co.com/fYxXLJpb/logo-footer.png" alt="" />
                        </div>
                    </div>

                    {/* Links Grid: Stacks 1 column on mobile, 2 columns on small tablets, 3 columns on desktops */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 border-b border-white/5 pb-12">

                        {/* Column 1: About Us */}
                        <div className="space-y-3 text-center sm:text-left">
                            <h3 className="text-sm font-semibold text-white tracking-wider">About Us</h3>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="space-y-3 text-center sm:text-left">
                            <h3 className="text-sm font-semibold text-white tracking-wider">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-slate-400 inline-block text-left sm:block">
                                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="text-xs text-slate-600">•</span>
                                        <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors py-0.5">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Inline Mini-Subscribe */}
                        {/* Spans full width on small screens/tablets to clean up the asymmetry, steps back down on desktop */}
                        <div className="space-y-3 sm:col-span-2 md:col-span-1 text-center sm:text-left mt-4 sm:mt-0">
                            <h3 className="text-sm font-semibold text-white tracking-wider">Subscribe</h3>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                                Subscribe to our newsletter for the latest updates.
                            </p>

                            {/* Inline Input Form: Stays connected horizontally even on small layouts */}
                            <form className="flex w-full max-w-sm mx-auto sm:mx-0 rounded-lg overflow-hidden border border-white/10 bg-white">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#e49b73] to-[#f4d166] text-gray-900 px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition-opacity whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* --- Copyright Footer --- */}
                    <div className="mt-8 text-center text-xs text-slate-500">
                        <p>&copy; 2026 Your Company All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;