import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Container from '@/components/ui/Container';

export default function Home() {
	return (
		<>
			<Container>
				<Hero />
				<Projects />
				<Skills />
				<Services />
			</Container>
		</>
	);
}
