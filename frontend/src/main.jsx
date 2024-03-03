import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='main'>
     <Router>
      <App/>
    </Router>
  </div>
   
)


















/*
dependencies installed: 

yarn add express mysql cors nodemon
yarn add react-router-dom

in backend:

yarn add express
yarn add nodemon

*/

/*
Note: refactoring naming conventions soon. Fix the item depending on 
which element of the app is in question, here are the ff:

variable, 
react components,
file names,

choose between: snake_case, PascalCase, camelCase, etc.

*/
