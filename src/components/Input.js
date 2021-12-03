import { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

function Input() {
    const [input, setInput] = useState("")

    return (
        <>
            <label>Input</label>
            <AceEditor style={{ width: "100%", height: "50%" }}
                placeholder='Input'
                theme='monokai'
                onChange={e => setInput(e)}
                fontSize={16}
                value={input}
                highlightActiveLine={true}
                setOptions={{ showLineNumbers: false }}
            />
        </>
    )
}

export default Input;