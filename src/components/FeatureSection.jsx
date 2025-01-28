import { features } from "../constants"

const FeatureSection = () => {
	return (
		<div className="relative mt-40 lg:mt-40 border-b border-neutral-800 min-h-[800px]
		 scroll-mt-40" id="features">
			<div className="text-center">
				<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
					Наши
					<span className="bg-gradient-to-r from-orange-500 to-orange-800
					text-transparent bg-clip-text">
						{" "} преимущества
					</span>
				</h2>
			</div>
			<div className="flex flex-wrap mt-10 lg:mt-20
			px-10 md:px-20 lg:px-20 
			p-4

			flex-col sm:flex-row items-center justify-center
			">
				{features.map((feature, index) => (
					<div key={index} className="w-full flex
					 sm:w-1/2
					 md:w-1/2
					 lg:w-1/3 ">
						<div className="flex items-start h-full ">
							<div className="flex mx-6 
							
							h-10 w-10 p-2 bg-neutral-900
							text-orange-700 justify-center items-center rounded-full">
								{feature.icon}
							</div>
							<div className="flex-1 h-[250px]">
								<h5 className="text-xl mb-4">
									{feature.text}
								</h5>
								<p className="text-md py-2 mb-20 text-neutral-500">
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FeatureSection