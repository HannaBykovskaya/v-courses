import {Menu, X} from "lucide-react"
import {useState} from "react"

import logo from "../assets/logo.png"
import {navItems} from "../constants"


const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	}


	return (
		<nav className="
		fixed top-4 z-50 flex w-full flex-col items-center justify-center
		
		 py-3 backdrop-blur-lg border-b
			border-neutral-700/80">
			<div className="container px-4 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<a href="/" className="flex items-center flex-shrink-0 hover:text-neutral-400"
						onClick={(e) => {
						e.preventDefault();
						window.scrollTo({
						top: 0,
						behavior: "smooth",
						});
					}}
						
					>
						<img className="h-10 w-10 mr-2" src={logo} alt="logo" />
						<span className="text-xl tracking-tighter">
							VCourses
						</span>
					</a>
					<ul className="hidden lg:flex ml-14 space-x-12">
						{navItems.map((item, index) => (
							<li key={index} >
								<a href={item.href} className="hover:text-neutral-400">
									{item.label}
								</a>
							</li>
						))}
					</ul>
					
					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X/> : <Menu/>}
						</button>
					</div>
				</div>
				{mobileDrawerOpen && (
					<div 					 
						  className="fixed right-0 z-20 bg-[#1c1b22]/80 backdrop-blur-lg
						w-full p-12 flex flex-col justify-center items-center lg:hidden">
						<ul className="">
							{navItems.map((item, index) => (
								<li key={index} className="py-4">
									<a href={item.href} className="hover:text-neutral-400">
										{item.label}
									</a>
								</li>
							)
							)}
						</ul>
						
					</div>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar