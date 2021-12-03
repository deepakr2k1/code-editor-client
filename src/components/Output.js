import { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

function Output() {
    const [output, setOutput] = useState("")

    return (
        <>
            <label>Output</label>
            <AceEditor style={{ width: "100%", height: "50%" }}
                placeholder='Output'
                theme='monokai'
                fontSize={16}
                value={output}
                highlightActiveLine={true}
                setOptions={{ showLineNumbers: false }}
                readOnly
            />
        </>
    )
}

export default Output;