import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const menuItems =['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS']
function App() {
  return (
<HomePage items={menuItems}/>  
);
}

export default App;
