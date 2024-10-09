'use client';
import skills from '@/data/skills';
import { useRouter } from 'next/navigation';
import { Card, CardHeader } from '../ui/card';
import SectionTitle from '../ui/sectionTitle';
import SkillsCard from '../ui/skillsCard';
const Skills = ({ isHomePage = true }) => {
	const router = useRouter();

	return (
		<div className="py-16 flex flex-col md:gap-20 gap-10">
			{isHomePage && (
				<>
					<div>
						<SectionTitle backgroundText="Expertise">skills</SectionTitle>
					</div>
					<div className="md:text-center md:tracking-wide">
						<p>
							Programming Languages, Frameworks, Libraries, Tools, and
							Technologies I&apos;m working on.
						</p>
					</div>
				</>
			)}
			<div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-16 gap-8 gap-y-12">
				{skills.slice(0, isHomePage ? 7 : skills.length).map((skill, i) => {
					return (
						<SkillsCard
							key={i}
							name={skill.name}
							type={skill.type}
							Icon={skill.icon}
						/>
					);
				})}

				{skills.length > 0 && isHomePage && (
					<Card
						className="w-fit flex items-center justify-start rounded-xl text-gray-800 dark:text-zinc-300 select-none group border-none backdrop-blur-lg cursor-pointer group shadow-none p-0 m-0"
						onClick={() => router.push('/skills')}
					>
						<CardHeader className="items-center space-y-0 rounded-2xl w-full flex flex-row justify-between gap-2 p-0 px-2">
							<h6 className="text-md font-semibold text-white">Show all</h6>
							<div className="group-hover:translate-x-1 transition">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.3516 3.95159C12.5766 3.72663 12.8818 3.60025 13.2 3.60025C13.5182 3.60025 13.8234 3.72663 14.0484 3.95159L21.2484 11.1516C21.4734 11.3766 21.5997 11.6818 21.5997 12C21.5997 12.3182 21.4734 12.6234 21.2484 12.8484L14.0484 20.0484C13.8221 20.267 13.5189 20.3879 13.2043 20.3852C12.8897 20.3825 12.5887 20.2563 12.3662 20.0338C12.1437 19.8113 12.0175 19.5103 12.0148 19.1957C12.0121 18.881 12.133 18.5779 12.3516 18.3516L17.5032 13.2H3.59999C3.28173 13.2 2.97651 13.0736 2.75147 12.8485C2.52642 12.6235 2.39999 12.3183 2.39999 12C2.39999 11.6817 2.52642 11.3765 2.75147 11.1515C2.97651 10.9264 3.28173 10.8 3.59999 10.8H17.5032L12.3516 5.64839C12.1266 5.42336 12.0003 5.11819 12.0003 4.79999C12.0003 4.4818 12.1266 4.17663 12.3516 3.95159Z"
										fill="url(#paint0_linear_1_73)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_1_73"
											x1="10"
											y1="12"
											x2="23"
											y2="12"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#22C55E" />
											<stop offset="1" stop-color="#EAB308" />
										</linearGradient>
									</defs>
								</svg>
							</div>
						</CardHeader>
					</Card>
				)}
			</div>
		</div>
	);
};

export default Skills;
