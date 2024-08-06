import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

function CustomEditor() {
  const [html, setHtml] = useState('my <b>HTML</b>');
  
  function onChange(e) {
    setHtml(e.target.value);
  }

    return (
      <div>
            <Editor value={html} onChange={onChange} />

            <div>
                <span>my spotify output</span>
                <span>{html}</span>
            </div>
            </div>
  );
}

export default CustomEditor
