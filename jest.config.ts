import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue', // tell Jest to handle `*.vue` files
    ],
    transform: {
      // process `*.vue` files with `vue-jest`
      '.*\\.(vue)$': 'vue-jest',
    },
    verbose: true,
  }
}
