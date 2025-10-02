"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        // TODO: Add your logout logic here
        router.push("/sign-in");
    };

    const user = { name: "John", email: "contact@oneth.com" };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors"
                >
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium">{user.name}</span>
                        <span className="text-xs text-gray-500">{user.email}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-60 bg-gray-900 text-gray-300 border border-gray-700 shadow-xl rounded-2xl p-2"
            >
                {/* User Info */}
                <DropdownMenuLabel>
                    <div className="flex items-center gap-3 py-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
              <span className="text-base font-medium text-white">
                {user.name}
              </span>
                            <span className="text-sm text-gray-400">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-700" />

                {/* Logout */}
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center text-gray-300 font-medium hover:text-yellow-500 hover:bg-gray-800 transition-colors rounded-lg cursor-pointer"
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </DropdownMenuItem>

                <DropdownMenuSeparator className="hidden sm:block bg-gray-700" />

                {/* Mobile Navigation */}
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
