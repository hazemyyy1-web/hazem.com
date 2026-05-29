/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				cyber: {
					bg: '#030712',
					bgAlt: '#0b0f19',
					green: '#10b981',
					greenBright: '#00ff99',
					greenDark: '#059669',
					gray: '#1f2937',
					grayLight: '#374151',
					grayLighter: '#4b5563',
					white: '#f9fafb',
					whiteMuted: '#d1d5db',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px #10b981, 0 0 10px #10b981, 0 0 20px #10b981',
					},
					'50%': {
						opacity: '0.7',
						boxShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				'border-glow': {
					'0%, 100%': { borderColor: 'rgba(16, 185, 129, 0.3)' },
					'50%': { borderColor: 'rgba(16, 185, 129, 0.8)' },
				},
			},
			animation: {
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'scan-line': 'scan-line 8s linear infinite',
				'border-glow': 'border-glow 3s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-grid': `linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
					linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)`,
			},
			backgroundSize: {
				'cyber-grid': '50px 50px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}