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
            <div className="children w-full h-full">
                {children}
            </div>
        </div>
    </>
}