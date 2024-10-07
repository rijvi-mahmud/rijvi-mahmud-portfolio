'use client';
import { formatNameForUrl } from '@/lib/utils';
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiExternalLinkFill } from 'react-icons/ri';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function ProjectCard({
	title,
	description,
	icon,
	category,
	githubLink,
	liveLink,
	index,
}) {
	const [hovered, setHovered] = useState(null);
	return (
		<Card
			className="bg-green-950/5 shadow-none border border-yellow-50/5 flex flex-col-reverse gap-0 cursor-pointer group hover:-translate-y-1 transition md:py-2 pb-2 relative"
			onMouseOver={e => setHovered(true)}
			onMouseLeave={e => setHovered(false)}
		>
			<CardHeader className="pt-3">
				<CardTitle className="capitalize leading-normal h-12">
					{title}
				</CardTitle>
				<CardDescription className="line-clamp-2">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent className="isolate py-4 flex justify-between items-center relative">
				<Image
					src={icon}
					className="-z-20 object-cover object-center h-[200px] w-full group-hover:scale-100 transition rounded-md"
					alt="avatar"
					height={300}
					width={300}
					decoding="async"
					fetchPriority="high"
					blurDataURL="/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
					placeholder="blur"
				/>
				<Badge
					className={
						'absolute top-1 right-2.5 z-50 py-2 px-3 bg-green-900 rounded-none rounded-tl-xl rounded-br-xl shadow'
					}
				>
					{category}
				</Badge>
			</CardContent>
			<CardFooter className="pt-4 pb-3 -order-3">
				<div className="space-x-2.5 md:space-x-4">
					{githubLink && (
						<Button
							asChild
							variant="outline"
							className="dark:bg-transparent dark:text-zinc-50 p-2 rounded-full m-0"
						>
							<Link href={githubLink} target="_blank">
								<GitHubLogoIcon className="size-4 md:size-5" />
							</Link>
						</Button>
					)}
					{liveLink && (
						<Button
							asChild
							variant="outline"
							className="dark:bg-transparent dark:text-zinc-50 p-2 rounded-full m-0"
						>
							<Link href={liveLink} target="_blank">
								<RiExternalLinkFill className="size-4 md:size-5" />
							</Link>
						</Button>
					)}
				</div>
				<Button variant="outline" className="" asChild>
					<Link
						href={`/projects/${formatNameForUrl(title)}`}
						className="ml-auto dark:bg-transparent dark:text-zinc-50"
					>
						<ArrowRightIcon className="size-4 mr-2" />
						View Project
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
