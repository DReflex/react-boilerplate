

// setting up the app main view 
import React from 'react';
import Main from './main'
import StateProvider from './stateProvider'
//add container here 
// create state provider
// create specific states

const App =  () =>{
  return(
    <StateProvider>
      <Main />
    </StateProvider>
  )
}
export default App
