import React from 'react'
import { SvgXml } from 'react-native-svg'

const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 1.66663C5.40008 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.40008 18.3333 10.0001 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 10.0001 1.66663ZM8.33342 14.1666L4.16675 9.99996L5.34175 8.82496L8.33342 11.8083L14.6584 5.48329L15.8334 6.66663L8.33342 14.1666Z" fill="#4CD62B"/>
</svg>
`

export default ({ width, height }) => (
 <SvgXml xml={xml} width={width} height={height} />
)
