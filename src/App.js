import React from 'react';
import { Tabs, Tab } from './onglets';
import './App.css';

function App() {
  return <Tabs>
    {[...new Array(2)].map((v, k) => (
      <Tab title={`onglet n ${k}`} key={k}>
      {k} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsum placeat minus maxime hic voluptates exercitationem, autem repellendus culpa assumenda nam. In unde blanditiis non tempora eius nulla ducimus quaerat.
    </Tab>
    ))}
    <Tab title="premier onglet">
      Premier onglet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, molestiae?
    </Tab>
    <Tab title="second onglet">
      second onglet Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat incidunt dignissimos tempore! Doloremque nostrum soluta iusto amet distinctio. Voluptatem, sit praesentium voluptas earum quisquam consectetur dolorum possimus ea est?
    </Tab>
  </Tabs>
  // return (
  //   <div className="App">
  //     <Clock/>
  //   </div>
  // );
}

export default App;
