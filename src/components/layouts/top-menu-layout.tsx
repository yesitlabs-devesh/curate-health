import { Box, Container, Flex, Grid } from '@radix-ui/themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  AiOutlineBell,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineLogout,
  AiOutlineQuestion,
  AiOutlineSetting,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { getSession } from '@auth0/nextjs-auth0';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { GoDotFill } from 'react-icons/go';
import { Button } from '@/components/ui/button';
import NotificationsPopover from '@/components/modals/notifications-popover';

interface TopMenuLayoutProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  children?: ReactNode | ReactNode[];
}

interface UserMenuProps {
  children: ReactNode;
}

interface NavbarProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export default async function TopMenuLayout({
  left,
  center,
  right,
  children,
}: TopMenuLayoutProps) {
  return (
    <Grid
      rows={'2'}
      flow={'column'}
      className={'h-screen w-full !grid-rows-[56px_1fr]'}
    >
      <Navbar left={left} center={center} right={right} />
      <Flex direction={'column'} className={'overflow-y-auto'}>
        <Flex direction={'column'} className={'flex-1'}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Grid>
  );
}

export async function Navbar({ left, center, right }: NavbarProps) {
  return (
    <Flex
      p={'3'}
      className={'border-color-gray-400 overflow-hidden border-b'}
      align={'center'}
      justify={'between'}
    >
      <Flex>
        {left !== undefined ? (
          left
        ) : (
          <Link href={'/'}>
            <Avatar className={'h-7 w-7'}>
              <AvatarFallback
                className={'bg-gradient-to-r from-violet-600 to-purple-400'}
              />
            </Avatar>
          </Link>
        )}
      </Flex>
      <Flex>{center}</Flex>
      <Flex>
        {right !== undefined ? (
          right
        ) : (
          <Flex gap={'2'}>
            <Button
              size={'icon'}
              variant={'outline'}
              className={'h-7 w-7 rounded-full'}
            >
              <AiOutlineQuestion />
            </Button>
            <NotificationsPopover>
              <Button
                size={'icon'}
                variant={'outline'}
                className={'h-7 w-7 rounded-full'}
              >
                <AiOutlineBell />
              </Button>
            </NotificationsPopover>
            <UserMenu>
              <Avatar className={'h-7 w-7'}>
                <AvatarFallback
                  className={'bg-gradient-to-r from-cyan-500 to-blue-500'}
                />
              </Avatar>
            </UserMenu>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export async function Footer() {
  return (
    <Box width={'100%'} className={'border-t'} py={'6'} px={'2'}>
      <Container size={'4'}>
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <Flex justify={'between'} align={'center'}>
            <Badge
              variant={'outline'}
              className={'cursor-pointer text-blue-600'}
            >
              <GoDotFill /> &nbsp; All systems are normal
            </Badge>
            <Flex gap={'4'}>
              <Link
                href={'https://www.linkedin.com/company/multithread/'}
                target={'_blank'}
              >
                <AiOutlineLinkedin size={24} className={'text-zinc-600'} />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/multithread/'}
                target={'_blank'}
              >
                <AiOutlineTwitter size={24} className={'text-zinc-600'} />
              </Link>
              <Link
                href={'https://github.com/orgs/Multithread-LLC'}
                target={'_blank'}
              >
                <AiOutlineGithub size={24} className={'text-zinc-600'} />
              </Link>
            </Flex>
          </Flex>
          <Flex justify={'between'}>
            <Flex gap={'4'} align={'center'}>
              <Link href={'/'}>
                <Avatar className={'h-7 w-7'}>
                  <AvatarFallback
                    className={'bg-gradient-to-r from-violet-600 to-purple-400'}
                  />
                </Avatar>
              </Link>
              <Flex gap={'2'}>
                <small className={'text-zinc-600'}>Multithread © 2023</small>
              </Flex>
            </Flex>
            <Flex gap={'4'}>
              <Link
                href={'https://multithread.mintlify.app/'}
                target={'_blank'}
              >
                <p className={'text-sm text-zinc-600'}>Documentation</p>
              </Link>
              <Link
                href={'https://multithread.zendesk.com/hc'}
                target={'_blank'}
              >
                <p className={'text-sm text-zinc-600'}>Support</p>
              </Link>
              <Link href={'/'}>
                <p className={'text-sm text-zinc-600'}>Blog</p>
              </Link>
              <Link href={'/'}>
                <p className={'text-sm text-zinc-600'}>Changelog</p>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

async function UserMenu({ children }: UserMenuProps) {
  const session = await getSession();
  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={'outline-0'}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Your Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a href={'/account'}>
          <DropdownMenuItem className={'flex flex-row justify-between'}>
            Settings
            <AiOutlineSetting />
          </DropdownMenuItem>
        </a>
        <a href={'/api/auth0/logout'}>
          <DropdownMenuItem className={'flex flex-row justify-between'}>
            Sign out
            <AiOutlineLogout />
          </DropdownMenuItem>
        </a>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>{user?.email}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
