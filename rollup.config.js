import typescript from 'rollup-plugin-typescript2'

/** @type {import('rollup').RollupOptions} */
export default [
	{
		input: 'src/index.ts',
		output: {
			dir: 'lib',
			format: 'es',
			preserveModules: true,
			preserveModulesRoot: 'src'
		},
		external: [ 'axios' ],
		plugins: [ typescript() ]
	}
]
