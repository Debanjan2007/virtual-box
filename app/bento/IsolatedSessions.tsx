import { SessionCard } from "./SessionCard";
import { sessions } from "./data";

export function IsolatedSessions() {
    return (
        <div className="absolute inset-0 p-6">

            <div className="flex h-full flex-col justify-center gap-4">

                {sessions.map((session) => (
                    <SessionCard
                        key={session.containerId}
                        {...session}
                    />
                ))}

            </div>

        </div>
    );
}