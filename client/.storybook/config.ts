import { configure } from '@storybook/react'

const requireContexts = [require.context('../src', true, /stories\.tsx$/)]

configure(requireContexts, module)
