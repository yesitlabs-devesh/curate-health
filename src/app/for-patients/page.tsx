'use client';
import * as React from 'react';
import '@radix-ui/themes/styles.css';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

function ForPatientsPage() {
  return (
    <div className="max-width-[1152px] m-auto">
      <h1 className="flex-col w-[60%]">
        Changing Lives Through Wellness Coaching.
      </h1>
      <div className="flex-row w-[70%] justify-end">
        American healthcare is broken. Costs continue to rise while outcomes
        remain stagnant. The bad news is this trend will continue until we
        transition from a system that focuses on saving sick patients to one
        that keeps them well. The good news is that by deploying the expertise
        of board-certified health and wellness professionals, we can change it.
        We’re on a mission to improve health outcomes and lower the cost of
        care.
      </div>
    </div>
  );
}

export default ForPatientsPage;
