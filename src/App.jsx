// import React from 'react'
// import useToggle from './hooks/useToggle'

// function App() {
//   const { value, toggle, setTrue, setFalse } = useToggle()  
//   return (
//     <div>
//       <h1>{String(value)}</h1 >
//       <button onClick={toggle}>toggle</button>
//       <button onClick={setTrue}>setTrue</button>
//       <button onClick={setFalse}>setFalse</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import useCounter from './hooks/useCounter'

// function App() {
//   const { value, inc, dec, reset } = useCounter(5)
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={inc}>inc</button>
//       <button onClick={dec}>dec</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import useCounterWithStep from './hooks/useCounterWithStep'

// function App() {
//   const { value, inc, dec, reset } = useCounterWithStep(5, 4)
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={inc}>inc</button>
//       <button onClick={dec}>dec</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import useInput from './hooks/useInput'

// function App() {
//   const{ value, onChange, reset } = useInput("")
//   return (
//     <div>
//       <h1>{value}</h1>
//       <textarea type="text" value={value} onChange={(e)=>onChange(e)}/>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import useLocalStorageState from './hooks/useLocalStorageState'

// function App() {
//   const { value, setValue, remove } = useLocalStorageState(undefined,"")
//   return (
//     <div>
//       <h1>{value}</h1>
//       <input type="text" value={value} onChange={(e) => {
//         setValue(e.target.value)
//       }} />
//       <button onClick={remove}>remove</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import useSessionStorageState from './hooks/useSessionStorageState'

// function App() {
//   const { value, setValue, remove } = useSessionStorageState(undefined,"")
//   return (
//     <div>
//       <h1>{value}</h1>
//       <input type="text" value={value} onChange={(e) => {
//         setValue(e.target.value)
//       }} />
//       <button onClick={remove}>remove</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import processChange from './hooks/Debounce'

function App() {
  return (
    <div>
      <input type="text"  onkeyup="processChange()" />
    </div>
  )
}

export default App