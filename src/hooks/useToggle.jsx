import React, { useState } from 'react'

function useToggle() {
    const [value, setValue] = useState(true)
    function toggle(){
        setValue(!value)
    }
    function setTrue(){
        setValue(true)
    }
    function setFalse(){
        setValue(false)
    }

    return ({value, toggle, setTrue, setFalse})
}

export default useToggle