"use client"
import { Avatar } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { RiExternalLinkFill } from "react-icons/ri";
import { useState } from "react";

export default function ProjectCard({title, description, icon, category, githubLink, liveLink, index}) {
    const [hovered, setHovered] = useState(null);
    return (
        <Card className='bg-green-950/5 shadow-none border border-yellow-50/5 flex flex-col-reverse gap-0 cursor-pointer group hover:-translate-y-1 transition md:p-2 pb-2 relative' onMouseOver={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
                <CardHeader className="pt-3">
                    <CardTitle className='capitalize'>{title}</CardTitle>
                    <CardDescription className='line-clamp-2 '>{description}</CardDescription>
                </CardHeader>
                <CardContent className='py-4 flex justify-between items-center relative'>
                    <Avatar className='size-12 outline-neutral-800 rounded-full relative'>
                        <Image src={icon} className='size-10 object-cover left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:scale-125 transition rounded-full' alt="avatar" height={300} width={300} decoding='async' fetchPriority='high' blurDataURL='/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII' placeholder='blur'/>
                    </Avatar>

                    <Badge variant="secondary" className={"py-2 px-3 bg-green-200/10 rounded-none rounded-tl-xl rounded-br-xl"}>{category}</Badge>
                    
                </CardContent>
                <CardFooter className="pt-4 pb-3 -order-3">
                    <div className='space-x-2.5 md:space-x-4'>
                        {githubLink && <Button asChild variant="outline" className='dark:bg-transparent dark:text-zinc-50 p-2 rounded-full m-0'>
                            <Link href={githubLink} target='_blank'>
                            <GitHubLogoIcon className='size-4 md:size-5' />
                            </Link>
                        </Button>}
                        {liveLink && <Button asChild variant="outline" className='dark:bg-transparent dark:text-zinc-50 p-2 rounded-full m-0'>
                            <Link href={liveLink} target='_blank'>
                            <RiExternalLinkFill className='size-4 md:size-5' />
                            </Link>
                        </Button>}
                    </div>
                    <Button variant="outline" className='' asChild>
                        <Link href={`/projects/${title.toLowerCase().split(' ').join('-')}-${index}`} className='ml-auto dark:bg-transparent dark:text-zinc-50'>
                            <ArrowRightIcon className='size-4 mr-2' />
                            View Project</Link>
                    </Button>
                </CardFooter>
            </Card>
    )
}