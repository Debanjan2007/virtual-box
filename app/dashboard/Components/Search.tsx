import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Search, Settings } from "lucide-react"

export function SearchBar() {
    return (
        <div className="container w-full h-full text-sm text-muted-foreground flex items-center justify-center gap-2">
            <div className="searct-items bg-muted/60 border-1 rounded-md px-2 flex items-center ">
                <button className="w-full h-full flex-1 flex-stretch items-center justify-start gap-2 px-2 py-1 rounded-md hover:bg-muted/50 transition-all duration-300 flex gap-2 items-center">
                    <Search className="w-4 h-4"/>
                    <span>
                        Serch machines
                    </span>
                </button>
                <button className="hidden md:flex rounded-md hover:bg-muted/50 bg-muted rounded-md border-1 px-1">
                    Ctrl + K
                </button>
            </div>
        </div>
    )
}

export function SearchDialog() {
    return (
        <CommandDialog>
            <CommandInput placeholder="Search VMs..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <Search className="mr-2 h-4 w-4" />
                        <span>Search VMs</span>
                        <CommandShortcut>Ctrl + K</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>Ctrl + ,</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )   
}