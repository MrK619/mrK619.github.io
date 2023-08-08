import './src/styles/global.css'

import React from 'react'

import IndexPage from './src/pages'

export const wrapRootElement = ({element}) => {
    return <IndexPage>{element}</IndexPage>;
};