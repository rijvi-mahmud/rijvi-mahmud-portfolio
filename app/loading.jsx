export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="fixed top-0 left-0 w-full h-full z-[99999999999] flex items-center justify-center dark-gradient">
				{/* Loading spinner */}
				<span className="loader"></span>
			</div>
		</div>
	);
}
