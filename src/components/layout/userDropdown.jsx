import React from 'react'
import { CircleUser, LogOutIcon, } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"
import { useNavigate } from 'react-router-dom';

const UserDropdown = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <CircleUser className="hover:cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

                <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem variant="destructive" className='hover:cursor-pointer' onClick={() => handleLogout()}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown