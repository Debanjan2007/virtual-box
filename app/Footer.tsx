"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full mt-20 border-t border-white/10">

            <div className="w-full px-6 md:px-12 lg:px-16 py-12">

                {/* Main Footer */}

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

                    {/* Logo */}

                    <div className="space-y-5">

                        <div className="flex items-center gap-3">

                            <Image
                                src="/logo.png"
                                alt="VBox"
                                width={38}
                                height={38}
                                className="rounded-lg"
                            />

                            <h2 className="text-2xl font-bold text-white">
                                VBox
                            </h2>

                        </div>

                        <p className="max-w-sm text-sm leading-7 text-zinc-400">
                            Launch secure browser-based Linux workspaces powered
                            by Docker. Fast, isolated and accessible from
                            anywhere.
                        </p>

                    </div>

                    {/* Product */}

                    <div>

                        <h3 className="mb-5 font-semibold text-white">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">

                            <Link
                                href="/features"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                Features
                            </Link>

                            <Link
                                href="/pricing"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                Pricing
                            </Link>

                            <Link
                                href="/roadmap"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                Roadmap
                            </Link>

                        </div>

                    </div>

                    {/* Resources */}

                    <div>

                        <h3 className="mb-5 font-semibold text-white">
                            Resources
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">

                            <Link
                                href="/docs"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                Documentation
                            </Link>

                            <Link
                                href="/api"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                API Reference
                            </Link>

                            <Link
                                href="/status"
                                className="text-zinc-400 transition hover:text-white"
                            >
                                Status
                            </Link>

                        </div>

                    </div>

                    {/* Community */}

                    <div>

                        <h3 className="mb-5 font-semibold text-white">
                            Community
                        </h3>

                        <div className="flex flex-col gap-4 text-sm">

                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="flex items-center gap-3 text-zinc-400 transition hover:text-white"
                            >
                                <i className="fa-brands fa-github text-lg"></i>
                                GitHub
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex items-center gap-3 text-zinc-400 transition hover:text-white"
                            >
                                <i className="fa-brands fa-linkedin text-lg"></i>
                                LinkedIn
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 VBox. All rights reserved.
                    </p>

                    <p className="text-center">
                        Designed & Developed by{" "}
                        <span className="font-medium text-zinc-300">
                            Debanjan Das
                        </span>
                    </p>

                </div>

            </div>

        </footer>
    );
}