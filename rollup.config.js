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
    'axios'
	],
	plugins: [ typescript() ]
};
