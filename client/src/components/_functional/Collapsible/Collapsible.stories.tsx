import React, { useState } from 'react'

import Collapsible from './Collapsible'

export default {
  component: Collapsible,

  title: 'components/_functional/Collapsible'
}

export function main() {
  return (
    <CollapsibleStoryWrapper>
      {isCollapsed => (
        <Collapsible isCollapsed={isCollapsed}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            odit ducimus repellat, blanditiis accusamus, in qui minima
            consequatur ad doloremque labore quidem. Magni voluptatibus quisquam
            fuga perspiciatis harum! Provident.
          </p>
        </Collapsible>
      )}
    </CollapsibleStoryWrapper>
  )
}

export function initialCollapsed() {
  return (
    <CollapsibleStoryWrapper initialCollapsed>
      {isCollapsed => (
        <Collapsible isCollapsed={isCollapsed}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            odit ducimus repellat, blanditiis accusamus, in qui minima
            consequatur ad doloremque labore quidem. Magni voluptatibus quisquam
            fuga perspiciatis harum! Provident.
          </p>
        </Collapsible>
      )}
    </CollapsibleStoryWrapper>
  )
}

export function multipleParagraphs() {
  return (
    <CollapsibleStoryWrapper>
      {isCollapsed => (
        <Collapsible isCollapsed={isCollapsed}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            odit ducimus repellat, blanditiis accusamus, in qui minima
            consequatur ad doloremque labore quidem. Magni voluptatibus quisquam
            fuga perspiciatis harum! Provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            odit ducimus repellat, blanditiis accusamus, in qui minima
            consequatur ad doloremque labore quidem. Magni voluptatibus quisquam
            fuga perspiciatis harum! Provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel
            odit ducimus repellat, blanditiis accusamus, in qui minima
            consequatur ad doloremque labore quidem. Magni voluptatibus quisquam
            fuga perspiciatis harum! Provident.
          </p>
        </Collapsible>
      )}
    </CollapsibleStoryWrapper>
  )
}

function CollapsibleStoryWrapper(props: {
  initialCollapsed?: boolean
  children: (isCollapsed: boolean) => React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(
    props.initialCollapsed === true
  )

  function onCheckboxChange() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div>
      <input
        id="collapsible-checkbox"
        checked={isCollapsed}
        type="checkbox"
        onChange={onCheckboxChange}
      />
      <label htmlFor="collapsible-checkbox">Is collapsed</label>

      <hr />
      {props.children(isCollapsed)}
      <hr />
    </div>
  )
}
