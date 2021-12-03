import {useState} from 'react'
import CodeEditor from './components/CodeEditor'
import Input from './components/Input';
import Output from './components/Output';

function App() {
  
  function run() {
    // var payload = {
    //     code,
    //     language,
    //     input: ""
    // }
    // console.log(payload);
    // fetch('https://codexweb.netlify.app/.netlify/functions/enforceCode', {
    //     method: 'POST',
    //     body: JSON.stringify(payload)
    // })
    // .then((resp) => resp.JSON())
    // .then((result) => console.log(result))
  }

  return (
    <div style={{width: "100%", height: "100vh", display: "flex", flexWrap: "wrap"}}>
      <CodeEditor style={{minWidth: "90%", height: "100%"}}></CodeEditor>
      <div style={{width: "30%", height: "100%"}}>
        <Input></Input>
        <Output></Output>
        <button onClick={run}>Run</button>
      </div>
    </div>
  )
}

export default App;