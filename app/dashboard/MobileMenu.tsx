"use client"

import Link from 'next/link'
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
    return <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="lg">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8 m-4">
                    <Link href="#">Dashboard</Link>
                    <Link href="/machines">Machines</Link>
                    <Link href="/snapshots">Snapshots</Link>
                    <Link href="/templates">Templates</Link>
                    <Link href="/downloads">Downloads</Link>
                </div>
            </SheetContent>
        </Sheet>
}