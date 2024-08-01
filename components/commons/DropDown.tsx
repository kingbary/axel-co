import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function DropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex gap-1 items-center'>Industries<span><ChevronDown size={18} /></span></DropdownMenuTrigger>
            <DropdownMenuContent className='instrument-sans bg-dark/70 w-[200px] text-sleekWhite border-sleekWhite/20'>
                <DropdownMenuItem className='hover:bg-black'><Link href={"#"} className="flex items-center">Agriculture</Link></DropdownMenuItem>
                <DropdownMenuItem className='hover:bg-black'><Link href={"#"} className="flex items-center">Infrastructure</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={"#"} className="flex items-center">Renewable Energy</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={"#"} className="flex items-center">HealthCare</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={"#"} className="flex items-center">Media</Link></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
