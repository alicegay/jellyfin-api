import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
export default {
	// This is adapted from the sample config: https://www.rollupjs.org/configuration-options/#input
	input: 'src/index.ts',
	output: {
		dir: 'lib',
		format: 'es',
		preserveModules: true,
		preserveModulesRoot: 'src'
	},
	external: [
    '@react-native-async-storage/async-storage',
    'axios',
    'react',
    'zustand',
    'zustand/middleware'
	],
	plugins: [ typescript({include: '{,**/}*.(ts|native.ts)'}) ]
};
