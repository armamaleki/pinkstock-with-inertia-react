import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { faq, privacyPolicy } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    BanknoteIcon,
    Bell,
    LayoutGrid,
    ListOrdered,
    MapPin,
    MessageCircleIcon,
    ShieldAlert,
    ShieldQuestionIcon,
    Store,
} from 'lucide-react';
import AppLogo from './app-logo';
import dashboard from '@/routes/dashboard';

const mainNavItems: NavItem[] = [
    {
        title: 'حساب کاربری',
        href: dashboard.index(),
        icon: LayoutGrid,
    },
    {
        title: 'سفارشات',
        href: dashboard.orders(),
        icon: ListOrdered,
    },
    {
        title: 'نظرات و پرسش ها',
        href: '#',
        icon: MessageCircleIcon,
    },
    {
        title: 'آدرس ها',
        href: '#',
        icon: MapPin,
    },
    {
        title: 'گزارش پرداختی',
        href: dashboard.transactions(),
        icon: BanknoteIcon,
    },

    {
        title: 'پیام ها',
        href: '#',
        icon: Bell,
    },

];

const footerNavItems: NavItem[] = [
    {
        title: 'درخواست فروشنده شدن',
        href: dashboard.vendorRequest.index(),
        icon: Store,
    },
    {
        title: 'قوانین و مقررات',
        href: privacyPolicy(),
        icon: ShieldAlert,
    },
    {
        title: 'سوالات متداول',
        href: faq(),
        icon: ShieldQuestionIcon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar
            side={'right'}
            dir={'rtl'}
            collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard.index()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
