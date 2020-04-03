import { Component, useState } from 'react'

interface DefaultStoryStateState {
  [key: string]: any
}

interface StoryStateProps<T extends DefaultStoryStateState> {
  children: (renderProps: {
    state: T
    setState: (state: Partial<T>) => void
  }) => React.ReactNode
}

export default class StoryState<
  T extends DefaultStoryStateState = DefaultStoryStateState
> extends Component<StoryStateProps<T> & T, T> {
  state: T

  constructor(props: StoryStateProps<T> & T) {
    super(props)
    const { children, ...initialState } = this.props
    this.state = (initialState as unknown) as T
  }

  render() {
    const { children } = this.props

    return children({
      state: this.state,
      setState: (state: Partial<T>) => this.setState(state)
    })
  }
}
