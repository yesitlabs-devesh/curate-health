import { Box, Flex, Grid } from '@radix-ui/themes';
import { ReactNode } from 'react';
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ActiveLink from '@/components/ui/active-link';

interface SideMenuLayoutProps {
  children?: ReactNode | ReactNode[];
}

interface SideMenuItem {
  icon?: ReactNode;
  text: ReactNode | string;
  link?: string;
  selected?: boolean;
  extra?: ReactNode;
}

export default async function SideMenuLayout({
  children,
}: SideMenuLayoutProps) {
  return (
    <Grid
      columns={'2'}
      flow={'row'}
      className={'h-screen !grid-cols-[200px_1fr]'}
    >
      <SideMenu />
      <Flex>{children}</Flex>
    </Grid>
  );
}

function SideMenu() {
  return (
    <Flex
      p={'4'}
      direction={'column'}
      justify={'between'}
      className={'border-color-gray-400 h-screen text-clip border-r'}
    >
      <Flex direction={'column'} gap={'6'}>
        <Link href={'/'}>
          <Avatar className={'h-7 w-7'}>
            <AvatarFallback
              className={'bg-gradient-to-r from-red-600 to-orange-400'}
            />
          </Avatar>
        </Link>
        <Flex gap={'1'} direction={'column'}>
          <SideMenuItem icon={<CiMail />} text={'mail'} />
          <SideMenuItem icon={<CiMail />} text={'mail'} />
          <SideMenuItem icon={<CiMail />} text={'mail'} />
        </Flex>
      </Flex>
    </Flex>
  );
}

function SideMenuItem({ icon, text, link = '', extra }: SideMenuItem) {
  return (
    <Box p={'2'} className={'rounded-sm hover:bg-zinc-100'}>
      <ActiveLink href={link}>
        <Flex direction={'row'} gap={'2'} justify={'between'}>
          <Flex gap={'2'} align={'center'}>
            {icon}
            <span className={'text-sm'}>{text}</span>
          </Flex>
          <Flex>{extra}</Flex>
        </Flex>
      </ActiveLink>
    </Box>
  );
}
