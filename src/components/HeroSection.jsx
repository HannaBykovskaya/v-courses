import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"



const HeroSection = () => {
	return (
		<div className="flex flex-col items-center mt-40 mx-10">
			<h1 className="text-2xl sm:text-4xl md:-5xl lg:text-7xl text-center tracking-wide">
				VCourses - всё, что нужно
				<span className="bg-gradient-to-r from-orange-500
					to-red-800 text-transparent
					bg-clip-text">
					<br/>
					{" "} для программиста!
				</span>
			</h1>
			<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
				Мы обучим вас основным языкам программирования - JavaScript, Python, PHP.
				Программирование - это легко вместе с VCourses!
			</p>
			

				<div className="flex flex-col sm:flex-row w-full max-w-[1400px]
				 mt-10 justify-center">
					<video autoPlay loop muted
					className="rounded-lg w-full sm:w-1/2 
					border border-orange-700
					shadow-orange-400 my-2  mx-2 lg:mx-4 md:mx-2">
						<source src={video1} type="video/mp4" />
						Your browser does not support the video tag
					</video>
					<video autoPlay loop muted

					className="rounded-lg 
					w-full sm:w-1/2
					
					 border border-orange-700
					shadow-orange-400  my-2 mx-2 lg:mx-4 md:mx-2">
						<source src={video2} type="video/mp4" />
						Your browser does not support the video tag
					</video>
				</div>
		</div>
	)
}

export default HeroSection