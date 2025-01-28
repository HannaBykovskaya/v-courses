import { testimonials } from "../constants"

const Testimonials = () => {
	return (
		<div className="flex flex-col items-center mt-10 lg:mt-40 tracking-wide
		scroll-mt-20" id="testimonials">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl
			 text-center my-10 lg:my-20">
				Что говорят наши студенты
			</h2>
			<div className="flex flex-wrap justify-center sm:flex-col
			sm:px-20 md:flex-row lg:flex-row">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="w-full  lg:w-1/3 px-4 py-2 flex">
						<div className="bg-neutral rounded-md p-6 text-md border
						border-neutral-800 font-thin flex flex-col flex-grow
						
						">
							<p className="text-neutral-400 testimonial-text flex flex-col flex-grow">
								{testimonial.text}
							</p>
							<div className="flex mt-8 items-center">
								<img className="w-12 h-12 mr-6 rounded-full border
								 border-neutral-300" 
								src={testimonial.image} alt={testimonial.user} />
								<div>
									<h6>{testimonial.user}</h6>
									<span className="text-sm font-normal italic
									 text-neutral-600">
										{testimonial.company}
									</span>
								</div>
							</div>
						</div>
					</div>

				))}
			</div>
		</div>
	)
}

export default Testimonials