import { mount } from '@vue/test-utils'
import Post from '@/components/Post'

describe('Post', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Post)

  it('The component renders', () => {
    expect(wrapper.html()).toContain('Read more')
  })
})
