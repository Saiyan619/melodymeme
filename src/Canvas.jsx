import React from 'react';
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { MainContext } from './Context';

function Canvas({ html, musicName, artistName }) {
  const { Releases } = MainContext();
      const templateRef = useRef(null);

      const downloadImage = async () => {
        if (templateRef.current === null) {
          return;
        }
        
        try {
          const dataUrl = await toPng(templateRef.current);
          download(dataUrl, 'melody-meme.png');
        } catch (error) {
          console.error('Failed to convert to image', error);
        }
      };
    return (
       
    <div  className='text-white font-Gotham'>
        <div ref={templateRef} className='bg-black h-screen relative'>
          <div className='p-4'>
              <div ref={templateRef} className='bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-5/6 rounded-lg'>
                            {/* <span className='text-white'>hey</span> */}
                            <div className='flex items-center gap-2'>
                                  <div>
                                        {/* <img className='w-14 rounded-md' src="./d3ea8798-afe2-4d69-a7a9-f8626c2cb6c9.jpeg" alt="music cover" /> */}
                                        <img className='w-10 rounded-xl' src={Releases} alt="add cover" />
                                  </div>

                                  <div className='flex flex-col'>
                                        <span className='font-bold text-sm capitalize'>{musicName ? musicName : 'Add track'}</span>
                <span className='capitalize text-xs'> {artistName ? artistName : 'Add Artist'}</span>
                                        </div>
                            </div>

                            
                            <div className='mt-10'>
                              
{              html ?                    <h1 dangerouslySetInnerHTML={{ __html: html }} className='text-white text-xl font-bold'></h1> : 'Add lyrics'
}                                  </div>
                            <div>
                                  <img className='w-24 mt-10' src="./ClipartKey_3235742.png" alt="" />
                                  </div>
                      </div>
                      </div>
                    
                </div>
                <button onClick={downloadImage} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" >
        Download as an Image
      </button>
            </div>
  );
}

export default Canvas;
