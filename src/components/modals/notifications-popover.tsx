import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface NoitifcationsPopoverProps {
  children: ReactNode;
}

export default function NotificationsPopover({
  children,
}: NoitifcationsPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="right-10 w-80 p-0" align={'end'}>
        <Flex className={'gap-4 p-3'} align={'center'}>
          <Avatar className={'h-7 w-7'}>
            <AvatarFallback
              className={'bg-gradient-to-r from-violet-600 to-purple-400'}
            />
          </Avatar>
          <Flex direction={'column'}>
            <p className={'text-normal text-sm'}>
              This is a description of a notification of a thing
            </p>
            <p className={'text-sm text-zinc-600'}>70d ago</p>
          </Flex>
        </Flex>
        <Separator />
        <Flex className={'gap-4 p-3'} align={'center'}>
          <Avatar className={'h-7 w-7'}>
            <AvatarFallback
              className={'bg-gradient-to-r from-violet-600 to-purple-400'}
            />
          </Avatar>
          <Flex direction={'column'}>
            <p className={'text-normal text-sm'}>
              This is a description of a notification of a thing
            </p>
            <p className={'text-sm text-zinc-600'}>70d ago</p>
          </Flex>
        </Flex>
        <Separator />
        <Flex className={'gap-4 p-3'} align={'center'}>
          <Avatar className={'h-7 w-7'}>
            <AvatarFallback
              className={'bg-gradient-to-r from-violet-600 to-purple-400'}
            />
          </Avatar>
          <Flex direction={'column'}>
            <p className={'text-normal text-sm'}>
              This is a description of a notification of a thing
            </p>
            <p className={'text-sm text-zinc-600'}>70d ago</p>
          </Flex>
        </Flex>
        <Separator />
        <Flex className={'gap-4 p-3'} align={'center'}>
          <Avatar className={'h-7 w-7'}>
            <AvatarFallback
              className={'bg-gradient-to-r from-violet-600 to-purple-400'}
            />
          </Avatar>
          <Flex direction={'column'}>
            <p className={'text-normal text-sm'}>
              This is a description of a notification of a thing
            </p>
            <p className={'text-sm text-zinc-600'}>70d ago</p>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
