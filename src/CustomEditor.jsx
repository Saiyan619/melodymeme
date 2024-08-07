// import { useState } from 'react';
// import Editor from 'react-simple-wysiwyg';
// import Canvas from './Canvas';
// import sanitizeHtml from 'sanitize-html';


// function CustomEditor() {
//   const [html, setHtml] = useState('');
//   const [sanitizedValue, setSanitizedValue] = useState('');

//   function onChange(e) {
//     const value = e.target.value;
//     setHtml(value);
//   }

//   return (
//     <div>
//       <Editor value={html} onChange={onChange} />
//       <div>
//         <Canvas html={html} />
//       </div>
//     </div>
//   );
// }

// export default CustomEditor;


import React, { useState } from "react";
import { Editor } from "primereact/editor";
import Canvas from "./Canvas";

export default function CustomEditor() {
    const [text, setText] = useState('');

  return (
      <div>
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
      </div>
      <Canvas html={text} />
      </div>
    )
}
        