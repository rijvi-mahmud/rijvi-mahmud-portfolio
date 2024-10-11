/* eslint-disable jsx-a11y/alt-text */
import Container from '@/components/ui/Container';
import { promises as fs } from 'fs';
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

const components = {
	h1: props => (
		<h1
			{...props}
			className="text-3xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2 mb-4"
		>
			{props.children}
		</h1>
	),
	h2: props => (
		<h2
			{...props}
			className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-4"
		>
			{props.children}
		</h2>
	),
	h3: props => (
		<h3
			{...props}
			className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-4"
		>
			{props.children}
		</h3>
	),
	h4: props => (
		<h4
			{...props}
			className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-4"
		>
			{props.children}
		</h4>
	),
	p: props => (
		<p
			{...props}
			className="text-base text-gray-800 dark:text-gray-300 leading-relaxed mb-4"
		>
			{props.children}
		</p>
	),
	ul: props => (
		<ul
			{...props}
			className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-4 pl-6"
		>
			{props.children}
		</ul>
	),
	ol: props => (
		<ol
			{...props}
			className="list-decimal list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-4 pl-6"
		>
			{props.children}
		</ol>
	),
	a: props => (
		<a
			{...props}
			className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
		>
			{props.children}
		</a>
	),
	blockquote: props => (
		<blockquote
			{...props}
			className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 my-4 bg-gray-50 dark:bg-gray-800 p-4 rounded"
		>
			{props.children}
		</blockquote>
	),
	img: props => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			{...props}
			className="max-w-full rounded-md shadow-md my-6 border border-gray-200 dark:border-gray-700"
		/>
	),
	pre: props => (
		<pre
			{...props}
			className="bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 p-4 rounded-md overflow-x-auto my-4 border border-gray-300 dark:border-gray-700"
		>
			{props.children}
		</pre>
	),
	code: props => (
		<code
			{...props}
			className="
            text-sm text-red-600 dark:text-zinc-300 
            px-2 py-1 
            rounded-md 
            font-mono 
            shadow-sm dark:shadow-none
            transition-all duration-200
          "
		>
			{props.children}
		</code>
	),
};
export default async function About() {
	const content = await fs.readFile(
		path.join(process.cwd(), 'mdx', 'about.mdx'),
		'utf8'
	);

	const compiled = await compileMDX({
		source: content,
		components,
		options: {
			parseFrontmatter: true,
		},
	});
	return (
		<Container className={'mt-5'}>
			<div className="w-full space-y-4">
				<MDXRemote
					source={content}
					components={components}
					options={{
						parseFrontmatter: true,
					}}
				/>
			</div>
			{/* <h1>{compiled.frontmatter.title}</h1>
			<div className="w-full space-y-4">{compiled.content}</div> */}
		</Container>
	);
}
