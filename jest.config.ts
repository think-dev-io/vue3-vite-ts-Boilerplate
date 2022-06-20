import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
    testEnvironment: 'jsdom',
    transform: {
      // process `*.vue` files with `vue-jest`
      '^.+\\.ts$': 'ts-jest',
      '.*\\.(vue)$': '@vue/vue3-jest',
    },
  }
}
