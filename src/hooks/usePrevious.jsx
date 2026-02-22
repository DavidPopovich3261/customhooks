import React, { useState } from 'react'

function usePrevious(value) {
    const [previous, setPrevious] = useState()
    const previousValue = previous
    setPrevious(value)
    return ({ previousValue })
}

export default usePrevious