
import './output.css'
import React, { useEffect, useState } from 'react';
import { Navbar, NavItem } from './components/Navbar';
import { Card } from './components/Card';
import { Grid } from './components/Utility/Grid';
import { Divider } from './components/Utility/Divider';
import { SinglePage } from './components/Utility/SinglePage';



function App() {

  const [tab, setTab] = useState('home')
  const onClick = (e) => setTab(e.target.textContent)


  const mountPage = () => {
    switch (tab) {
      case 'home':
        return (<>home</>)
      case 'projects':
        return (<>projects</>)
      case 'contact':
        return (<>contact</>)
      case 'resume':
        return (<>resume</>)
      // 404 page
      default:
        return (
          <div className='h-full grid content-center justify-center text-xl'>
            <div className='text-center text-5xl'>- 404 -</div>
            <div>page not found</div>
          </div>
        )
    }
  }

  return (
    <SinglePage style={"font-default text-slate-800 bg-zinc-100 flex flex-col items-center justify-start pt-20"}>
      <Navbar onClick={onClick} tab={tab}>
        <NavItem title={'home'} />
        <NavItem title={'projects'} />
        <NavItem title={'contact'} />
        <NavItem title={'resume'} />
      </Navbar>

      {mountPage()}

    </SinglePage>
  );




}

export default App;
