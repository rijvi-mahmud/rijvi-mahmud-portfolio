import { services } from '@/data/services';
import { cn } from '@/lib/utils';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import SectionTitle from '../ui/sectionTitle';

const Services = () => {
	return (
		<div className="py-20 flex flex-col space-y-24">
			<SectionTitle backgroundText="Services">What i do?</SectionTitle>
			<div className="w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6">
					{services.map((service, i) => (
						<Card
							key={service.id}
							className={cn(
								'bg-green-950/5 shadow-none flex flex-row-reverse relative py-6 md:py-16 px-8 md:px-4 items-center border border-yellow-50/5 justify-between h-40 md:h-48 backdrop-blur-lg w-full'
								// i === 2 ? "grow-0": "grow"
							)}
						>
							<CardHeader className="text-2xl md:text-xl p-0 w-full text-green-100 space-y-4">
								<CardTitle className="leading-snug text-center text-base md:text-xl mx-auto w-[88%] md:w-full md:mx-0">
									{service.title} <br />
									<span className="text-slate-200 text-base font-medium">
										({service.subtitle})
									</span>
								</CardTitle>
								<CardDescription className="text-gray-400 w-full text-center text-sm">
									{service.description}
								</CardDescription>
							</CardHeader>
							{/* <CardContent className="opacity-20 p-0 self-start h-full absolute top-4 left-4">
								<service.icon className="size-20 md:size-16 text-green-200/50 -rotate-45 origin-center" />
							</CardContent> */}
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
