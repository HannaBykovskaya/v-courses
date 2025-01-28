import {CheckCircle2} from "lucide-react"
import codeImg from "../assets/study.jpg"
import { checklistItems } from "../constants"


const Workflow = () => {
	return (
		<section id="work" className="flex flex-col items-center mt-10 scroll-mt-20 mx-10">
			<div className="mt-20"> 
				<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6
				tracking-wide pb-10">
					Как организован
					<span className="bg-gradient-to-r from-orange-500 to-orange-800
					text-transparent bg-clip-text">
					
						{" "} учебный процесс?
					</span>
				</h2>
				
				<div className="flex px-10 flex-wrap justify-center">
					<div className="pt-12 w-full lg:w-1/2 max-w-[700px]">
						<img src={codeImg} alt="code"
							className="rounded-lg object-cover 
							 border border-neutral-700"/>
					</div>

					<div className="pt-12 w-full lg:w-1/2 mx-0 ">
						{checklistItems.map((item, index) => (
							<div key={index} className="flex mb-12 mx-8">
								<div className="text-green-400 
								h-10 w-10 p-2 justify-center items-center rounded-full">
									<CheckCircle2 />
								</div>
								<div >
									<h5 className="mt-1 mb-2 text-xl">
										{item.title}
									</h5>
									<p className="text-md text-neutral-500 ">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Workflow