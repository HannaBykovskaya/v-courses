import { resourcesLinks, platformLinks, communityLinks } from "../constants"


const Footer = () => {
	return (
		<footer className="mt-20 border-t py-10 px-40
		 border-neutral-700 text-neutral-400 mx-auto flex flex-col items-center justify-center"  >
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
			gap-10 lg:gap-40 md:gap-20">

				<div>
					<h3 className="text-md font-semibold mb-4">
						Ресурсы
					</h3>
					<ul className="space-y-2">
						{resourcesLinks.map((link, index) => (
							<li key={index}>
								<a href={link.href}
								className="text-neutral-400 hover:text-white">
									{link.text}
								</a>

							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-md font-semibold mb-4">
						Платформа
					</h3>
					<ul className="space-y-2">
						{platformLinks.map((link, index) => (
							<li key={index}>
								<a href={link.href}
								className="text-neutral-400 hover:text-white">
									{link.text}
								</a>

							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-md font-semibold mb-4">
						Сообщество
					</h3>
					<ul className="space-y-2">
						{communityLinks.map((link, index) => (
							<li key={index}>
								<a href={link.href}
								className="text-neutral-400 hover:text-white">
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>

			</div>
			<div className="mt-10 text-center  text-neutral-500">
			© {new Date().getFullYear()} BHCode (Hanna Bykouskaya). All rights reserved.
			</div>
		</footer>
	)
}

export default Footer