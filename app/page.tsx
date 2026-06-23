"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from 'lucide-react'
import { MobileMenu } from "./MobileNav"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-[#08101D] overflow-auto">
      <nav className="h-18 w-full border-b">
        <div className="navbar mx-auto h-full w-full px-6 flex items-center justify-between">
          <div className="logo hidden md:flex text-xl gap-2 font-bold text-white">
            <Image src="/logo.png" alt="logo" width='30' height='10' className="rounded-md" />
            <p>ShortLy</p>
          </div>
          <div className="md:hidden">
            <MobileMenu/>
          </div>
          <div className="navigation hidden md:flex gap-8 items-center">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/doc">Docs</Link>
          </div>
          <div className=" action-buttons flex gap-4">
            <Button variant="outline" size="lg">Login</Button>
            <Button variant="default" size="lg">Get started</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
