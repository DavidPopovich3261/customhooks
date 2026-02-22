import React, { useState } from 'react'

function useInput(initial) {
    const [value, setValue] = useState(initial)
    function onChange(e){
        setValue(e.target.value)
    }
    function reset(){
        setValue(initial)
    }
    return ({ value, onChange, setValue, reset }
    )
}

export default useInput