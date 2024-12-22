import { EpicStackLogo, logos } from './logos/logos'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center px-4 py-16">
			<div className="grid place-items-center gap-12">
				{/*
					🐨
						Set a max-width of 'md' on the wrapping div below.
						Center the elements horizontally:
					- Setup a vertical flexbox container with 'flex flex-col'
					- Align the items horizontally with 'items-center'
					- Center the children text elements with 'text-center'
				*/}
				<div>
					<EpicStackLogo className="size-20" />
					{/*
						🐨 Apply the correct font size, weight and spacing to the h1.
					*/}
					<h1>
						The <span className="text-highlight">Epic</span> Stack
					</h1>

					{/*
						🐨 Apply the correct spacing and color to the paragraph.
					*/}
					<p>
						{/*
							🐨 Apply the correct text color and decoration to the link.
							Don't worry about the hover state for now.
						*/}
						Check the <a href="#">Getting Started</a> guide file for how to get
						your project off the ground!
					</p>
				</div>
				<ul>
					{logos.map((logo) => (
						<li key={logo.href}>
							<a href={logo.href}>
								<img src={logo.src} alt={logo.alt} className="w-16" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
