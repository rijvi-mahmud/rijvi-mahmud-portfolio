import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { EyeOpenIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import localFont from 'next/font/local';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { SlSocialSkype } from 'react-icons/sl';
import SocialIcons from '../SocialIcons';
import HeroImage from './HeroImage';

const nunito = localFont({
	src: [
		{
			path: '../../assets/font/Nunito-ExtraBold.ttf',
			weight: '800',
			style: 'bold',
		},
	],
	variable: '--font-nunito',
});

const Hero = () => {
	return (
		<>
			<div className="w-full md:min-h-[82vh] px-10 flex flex-col gap-8 pt-5 md:pt-0 select-none lg:flex-row-reverse md:px-24 items-center justify-between">
				<HeroImage />
				<div className="w-full">
					<div className="flex gap-5 md:gap-6 flex-col basis-1/2">
						<div className="h-fit">
							<h1 className="text-xl md:text-2xl font-mono text-slate-100 font-semibold tracking-wide">
								Welcome! I&apos;m
							</h1>
							<h1
								className={cn(
									`text-5xl md:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-200 py-1`,
									nunito.className
								)}
							>
								Rijvi
							</h1>
						</div>

						<div className="flex flex-col gap-3 md:gap-5">
							<div>
								<h3 className="text-2xl text-slate-100 font-bold">
									I build API&apos;s & web apps!
								</h3>
							</div>
							<div>
								<p className="text-base text-slate-100 antialiased">
									I&apos;m a full-stack web developer based in Bangladesh,
									specializing in cutting-edge web technologies as well as
									pixel-perfect designs.
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-6 md:gap-8">
							<div className="flex items-center">
								<DropdownMenu modal={false}>
									<DropdownMenuTrigger>
										<Button
											variant="outline"
											className="rounded-l-full md:rounded-l-xl md:rounded-r-none  w-40 py-6"
											asChild
										>
											<span>
												<PaperPlaneIcon className="size-4 mr-2" />
												Contact me
											</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className={
											'bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900 py-2'
										}
									>
										<DropdownMenuItem asChild>
											<Link
												href="https://wa.me/+8801784781272"
												className="text-slate-100 flex items-center gap-2 cursor-pointer hover:underline"
											>
												<FaWhatsapp />
												Whatsapp
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												href="skype:live:rijvimahmud"
												className="text-slate-100 flex items-center gap-2 cursor-pointer hover:underline"
											>
												<SlSocialSkype />
												Skype
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												href="mailto:rijvimahmudd@gmail.com"
												className="text-slate-100 flex items-center gap-2 cursor-pointer hover:underline"
											>
												<MdOutlineEmail />
												Email
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>

								<Button
									variant="outline"
									className="rounded-r-full md:rounded-r-xl md:rounded-l-none text-base w-40 py-6"
									asChild
								>
									<Link href="/resume.pdf" download>
										<EyeOpenIcon className="size-4 mr-2" />
										<span className="text-slate-100">Resume</span>
									</Link>
								</Button>
							</div>
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
