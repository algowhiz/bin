import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { MoreVertical } from 'lucide-react';

interface DropdownNavNotesProps {
    navItems: { label: string; onClick: (noteId: string) => void }[];
    noteId: string;
}

const DropdownNavNotes = ({ navItems,noteId }: DropdownNavNotesProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <button>
                    <MoreVertical
                        size={15}
                        className=" transition-all text-black duration-200"
                    />
                </button>
            </HoverCardTrigger>
            <HoverCardContent className=" shadow-md rounded-md p-1">
                <ul className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => item.onClick(noteId)}
                            className="block px-4 py-2 text-sm"
                        >
                            {item.label}
                        </button>
                    ))}
                </ul>
            </HoverCardContent>
        </HoverCard>
    );
};

export default DropdownNavNotes;
