import { cn } from '@/lib/utils';

export default function Container({ children, className, ...props }) {
	return (
		<div className={cn('md:px-44 px-5 w-full space-y-7', className)} {...props}>
			{children}
		</div>
	);
}
