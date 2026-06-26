import Image from "next/image";
import { Lock, Circle } from "lucide-react";

interface SessionCardProps {
    logo: string;
    title: string;
    containerId: string;
}

export function SessionCard({
    logo,
    title,
    containerId,
}: SessionCardProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-2 transition-transform duration-300 hover:-translate-y-1">

            <div className="flex items-center gap-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-400/20">
                    <Image
                        src={logo}
                        alt={title}
                        width={24}
                        height={24}
                    />
                </div>

                <div className="flex-1">
                    <h4 className="text-white font-semibold">
                        {title}
                    </h4>

                    <p className="text-xs text-zinc-400">
                        {containerId}
                    </p>
                </div>

                <Circle
                    className="fill-green-400 text-green-400"
                    size={10}
                />

            </div>

            <div className="mt-4 flex items-center justify-between text-xs">

                <div className="flex items-center gap-1 text-zinc-400">
                    <Lock size={14} />
                    Isolated
                </div>

                <span className="text-green-400">
                    Running
                </span>

            </div>

        </div>
    );
}