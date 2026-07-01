import { Bell, User, CircleQuestionMark } from "lucide-react"

export function ControllPanel() {
    return (
        <div className="controll-panel flex items-center gap-4 md:gap-6 md:mr-4 text-muted-foreground">
            <div className="controll hidden md:flex md:flex-row gap-6 items-center justify-center">
                <div className="relative cursor-pointer">
                    <Bell className="h-5 w-5" />
                    {/* Notification Dot */}
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background" />
                </div>
                <CircleQuestionMark className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="profile">
                <User className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    )
}