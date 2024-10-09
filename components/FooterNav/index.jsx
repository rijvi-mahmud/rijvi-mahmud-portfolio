'use client';
import navItems from '@/data/menu';
import { cn } from '@/lib/utils.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterNav = () => {
	const pathname = usePathname();
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-100 via-zinc-100/50 to-zinc-50/0 dark:bg-gradient-to-b dark:from-green-950/5 dark:via-green-950/5 dark:to-green-900/0 z-50 transition w-full md:hidden">
			<div className="w-full text-zinc-200 ">
				<div className="flex items-center justify-between  backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit transition-all">
					<div className="grid grid-cols-5 text-xs w-full min-h-[56px]">
						{navItems.map((item, i) => (
							<Link
								href={item.href}
								key={i}
								className={cn(
									'flex items-center flex-col gap-0.5 size-full relative transition py-[10px]',
									pathname === item.href ? 'text-green-500' : 'justify-center'
								)}
							>
								<div
									className={cn(
										pathname !== item.href
											? 'flex items-center justify-center'
											: null
									)}
								>
									{pathname === item.href ? (
										<item.mIcon.solid className="size-5 transition" />
									) : (
										<item.mIcon.outlined className="size-6 transition" />
									)}
								</div>

								<div
									className={cn(
										pathname === item.href ? 'bottom-2' : '-bottom-10',
										'text-xs absolute transition font-semibold uppercase'
									)}
								>
									{item.name}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterNav;
