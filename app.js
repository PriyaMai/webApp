import React from 'react';

import Card from "./Components/card.js";

class App extends React.Component {
   render() {
      return (
         <div>
            <Card header= "T" text = "test" height= "300" width= "30"/>
         </div>
      );
   }
}
export default App;