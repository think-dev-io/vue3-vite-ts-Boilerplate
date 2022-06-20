import { mount } from '@vue/test-utils'
import HelloWorld from '../../components/HelloWorld.vue' //! TODO: Resolve `@` imports

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3 + TypeScript + Vite'
    const wrapper = mount(HelloWorld, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})
