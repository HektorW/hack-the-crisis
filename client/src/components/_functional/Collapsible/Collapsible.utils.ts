import animateEasing from '../../../utils/animation/animateEasing'
import lerp from '../../../utils/animation/lerp'

const { getComputedStyle } = window

interface CollapseAnimationProperties {
  marginTop: number
  marginBottom: number
  paddingTop: number
  paddingBottom: number
  height: number
  opacity: number
}

export function animateCollapseValues(
  animationDuration: number,
  element: HTMLDivElement,
  currentValues: CollapseAnimationProperties,
  targetValues: CollapseAnimationProperties
) {
  function getIntermediateValue(
    propertyName: keyof CollapseAnimationProperties,
    t: number
  ) {
    return lerp(targetValues[propertyName], currentValues[propertyName], t)
  }

  return animateEasing({ duration: animationDuration }, t => {
    element.style.marginTop = `${getIntermediateValue('marginTop', t)}px`
    element.style.marginBottom = `${getIntermediateValue('marginBottom', t)}px`
    element.style.paddingTop = `${getIntermediateValue('paddingTop', t)}px`
    element.style.paddingBottom = `${getIntermediateValue(
      'paddingBottom',
      t
    )}px`
    element.style.height = `${getIntermediateValue('height', t)}px`
    element.style.opacity = `${getIntermediateValue('opacity', t)}`
  })
}

export function getCurrentAnimationStyleValues(
  element: HTMLDivElement
): CollapseAnimationProperties {
  return getElementStyleValues(element)
}

export function getTargetAnimationStyleValues(
  element: HTMLDivElement,
  shouldCollapse: boolean
): CollapseAnimationProperties {
  if (shouldCollapse) {
    return {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      height: 0,
      opacity: 0
    }
  }

  clearElementStyles(element)

  return getElementStyleValues(element)
}

function getElementStyleValues(
  element: HTMLDivElement
): CollapseAnimationProperties {
  const elementComputedStyle = getComputedStyle(element)

  return {
    marginTop: parseComputedPropertyValue(elementComputedStyle, 'margin-top'),
    marginBottom: parseComputedPropertyValue(
      elementComputedStyle,
      'margin-bottom'
    ),
    paddingTop: parseComputedPropertyValue(elementComputedStyle, 'padding-top'),
    paddingBottom: parseComputedPropertyValue(
      elementComputedStyle,
      'padding-bottom'
    ),
    height: parseComputedPropertyValue(elementComputedStyle, 'height'),
    opacity: parseComputedPropertyValue(elementComputedStyle, 'opacity')
  }
}

function parseComputedPropertyValue(
  elementComputedStyle: CSSStyleDeclaration,
  propertyName: string
) {
  return parseFloat(elementComputedStyle.getPropertyValue(propertyName)) || 0
}

export function setCollapsedValues(element: HTMLDivElement) {
  element.style.height = '0'
  element.style.margin = '0'
  element.style.opacity = '0'
  element.style.padding = '0'
}

export function clearElementStyles(element: HTMLDivElement) {
  element.removeAttribute('style')
  element.style.overflow = 'hidden'
}
