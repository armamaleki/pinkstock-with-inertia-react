import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
interface Link {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

interface Meta {
    current_page: number;
    last_page: number;
    links: Link[];
    per_page: number;
    total: number;
}

interface PaginateProps {
    meta: Meta;
}
export default function Paginate({ meta }:PaginateProps) {
    if (!meta || !meta.links) return null;
    return (
        <Pagination>
            <PaginationContent className="flex justify-center gap-1">
                {meta.links.map((link, index) => {
                    if (!link.url && !link.page) {
                        if (link.label.includes('...')) {
                            return (
                                <PaginationItem key={index}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            );
                        }
                        return null;
                    }
                    if (link.label.includes('Previous')) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationPrevious
                                    href={link.url || '#'}
                                    className={!link.url ? 'opacity-50 pointer-events-none' : ''}
                                />
                            </PaginationItem>
                        );
                    }

                    if (link.label.includes('Next')) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationNext
                                    href={link.url || '#'}
                                    className={!link.url ? 'opacity-50 pointer-events-none' : ''}
                                />
                            </PaginationItem>
                        );
                    }
                    return (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href={link.url}
                                isActive={link.active}
                                className={`${
                                    link.active
                                        ? 'bg-pink-500 text-white hover:bg-pink-600'
                                        : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                                }`}
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}
