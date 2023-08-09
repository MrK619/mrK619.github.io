import './src/styles/global.css'

import React from 'react'

import IndexPage from './src/pages/index'

export const wrapRootElement = ({element}) => {
    return <IndexPage>{element}</IndexPage>;
};