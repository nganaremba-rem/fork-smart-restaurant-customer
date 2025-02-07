/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'], // Enable dark mode using 'class' strategy
	content: [
		'./pages/**/*.{js,jsx}', // Path to all pages
		'./components/**/*.{js,jsx}', // Path to all components
		'./app/**/*.{js,jsx}', // Path to app
		'./src/**/*.{js,jsx}', // Path to source files
	],
	theme: {
		screens: {
			mobile: '640px', // Mobile-first (default)
			md: '768px', // Medium screens
			lg: '1024px', // Large screens
			xl: '1280px', // Extra large screens
			'2xl': '1536px', // 2X large screens
		},
		container: {
			center: true,
			padding: '1rem', // Default padding for mobile, can be adjusted for larger screens
			screens: {
				'2xl': '1400px',
				xl: '1200px', // Slightly reduced for large screens
				lg: '1.5rem',
				md: '1rem',
				mobile: '0.5rem', // Reduce padding for mobile devices
			},
		},
		extend: {
			translate: {
				'z-0': 'translateZ(0)', // Hardware acceleration for 3D transforms
			},
			willChange: {
				transform: 'transform', // Only use for elements that animate often
			},
			keyframes: {
				slideLeftFade: {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				slideRightFade: {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-up': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-11px)',
					},
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'animate-slideLeftFade': 'slideLeftFade 0.5s ease forwards',
				'animate-slideRightFade': 'slideRightFade 0.5s ease forwards',
				'fade-in-down': 'fade-in-down 1s ease-out',
				'fade-out-up': 'fade-out-up 1s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			colors: {
				customBlue: '#98BDFF',
				customDarkblue: '#4B49AC',
				customRed: '#B20D30',
				customPurple: '#797BE9',
				customOrange: '#F3797E',
				customGreen: '#3F784C',
				customThistle: '#D5C6E0',
				customSilver: '#E1DEE9',
				customGray: '#00bcd4',
				customWhite: '#FFFFFF',
				customBlack: '#000000',
				deeppurple: '#1c2938',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar': {
					/* Firefox */
					'scrollbar-width': 'none',
					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
				'.carousel-item': {
					transform: 'translate3d(0, 0, 0)', // Hardware acceleration for carousel items
					transition: 'transform 0.5s ease-in-out',
				},
				'.swiper-container': {
					transform: 'translateZ(0)', // Hardware acceleration for swiper
					willChange: 'transform', // Optimize for transform animations
				},
				'.transition-transform-ease': {
					transitionProperty: 'transform',
					transitionTimingFunction: 'ease-in-out',
					transitionDuration: '800ms',
				},
			})
		},
		require('tailwindcss-animate'), // Include the animation plugin for smooth transitions
	],
	tailwindcss: {},
	autoprefixer: {},
	...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // Minify CSS in production
}
