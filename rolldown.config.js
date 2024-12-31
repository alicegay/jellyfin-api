import { defineConfig } from 'rolldown'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: ['axios'],
  plugins: [typescript()],
})
