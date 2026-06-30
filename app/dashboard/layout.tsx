import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { MobileMenu } from "./MobileMenu"
import Image from "next/image";
import { Bell, Settings, User } from 'lucide-react';
import Link from "next/link";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>
        <div className="container h-screen w-screen flex flex-col">
            <AnimatedGridPattern className="absolute inset-0 opacity-35 text-slate-500/60 dark:text-slate-400/40" />
            <nav className="flex navbar w-full p-4 text-md justify-between items-center">
                <div className="md:hidden z-99">
                    <MobileMenu />
                </div>
                <div className="logo hidden md:flex text-xl gap-2 font-bold text-white cursor-pointer">
                    <Image src="/logo.png" alt="logo" width='30' height='10' className="rounded-md" />
                    <p>VBox</p>
                </div>
                <ul className="md:flex gap-6 hidden">
                    <li>
                        <Link href="#">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/machines">Machines</Link>
                    </li>
                    <li>
                        <Link href="/snapshots">Snapshots</Link>
                    </li>
                    <li>
                        <Link href="/templates">Templates</Link>
                    </li>
                    <li>
                        <Link href="/downloads">Downloads</Link>
                    </li>
                </ul>
                <div className="controll-tab flex gap-4 md:gap-3">
                    <Settings />
                    <Bell />
                    <User />
                </div>
            </nav>
            <div className="children w-full h-full">
                {children}
            </div>
        </div>
    </>
}