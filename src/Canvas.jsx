import React from 'react';

function Canvas({ html }) {
  return (
    <div>
        <div className='bg-green-700 h-40'>
              <h1 dangerouslySetInnerHTML={{ __html: html }}></h1>
              </div>
    </div>
  );
}

export default Canvas;
