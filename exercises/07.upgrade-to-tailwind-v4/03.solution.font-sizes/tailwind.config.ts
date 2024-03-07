// @ts-expect-error
import { type Config } from 'tailwindcss'
import easings from 'open-props/src/easing'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': `0.4s roll-reveal ${easings['--ease-spring-2']} backwards`,
				'fade-in': '0.4s fade-in ease-out backwards',
				'slide-top': '0.3s slide-top ease-out backwards',
				'slide-left': '0.3s slide-left ease-out backwards',
			},
		},
	},
	plugins: [],
} satisfies Config
