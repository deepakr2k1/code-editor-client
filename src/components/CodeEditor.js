import { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-python'

let displayCode = `#include<bits/stdc++.h>
using namespace std;
int main() {
    cout << "Hello World!";
}`;

function CodeEditor() {
    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState(displayCode);

    return (
        <div style={{minWidth: "70%", height: "100%" }}>
            <AceEditor style={{ width: "100%", height: "100%" }} 
                placeholder='Your Code goes here!'
                mode='c_cpp'
                theme='monokai'
                name='basic-code-editor'
                onChange={currentCode => setCode(currentCode)}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
        </div>
    );
}

export default CodeEditor;