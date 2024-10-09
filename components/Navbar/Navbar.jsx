'use client';
import Logo from '@/components/ui/logo';
import navItems from '@/data/menu';
import { cn } from '@/lib/utils.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
	const pathname = usePathname();
	return (
		<div className="sticky -top-2 h-24 sm:h-28 bg-gradient-to-b from-zinc-100 via-zinc-100/50 to-zinc-50/0 dark:bg-gradient-to-b dark:from-green-950/5 dark:via-green-950/5 dark:to-green-900/0 z-50 transition md:px-20">
			<div className={cn('w-full text-zinc-400 px-4 md:px-20 pt-8')}>
				<div className="flex items-center justify-between rounded-full py-4 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit transition-all px-7 ">
					<Logo />

					<div className="none">
						<Link
							href="https://wa.me/+8801784781272"
							target="_blank"
							className="md:hidden"
						>
							<FaWhatsapp className="text-green-500 text-3xl" />
						</Link>
						<ul className="gap-8 hidden md:flex font-medium">
							{navItems.map(item => (
								<li key={item.href} className="relative">
									<Link
										href={item.href}
										className={cn(
											'hover:text-green-100 relative transition-all after:absolute after:h-[1px] after:w-0 after:bg-slate-200 after:left-[1px] after:-bottom-0.5 after:rounded-full after:transition-all',
											pathname === item.href
												? 'after:w-7/12'
												: 'after:hover:w-8/12 ',
											pathname === item.href
												? 'text-green-100'
												: 'text-zinc-400'
										)}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
