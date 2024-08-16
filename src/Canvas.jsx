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
          <div ref={templateRef} className='bg-black h-screen relative p-5'>
              <div ref={templateRef} className='bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-5/6 rounded-md'>
                            {/* <span className='text-white'>hey</span> */}
                            <div className='flex items-center gap-2'>
                                  <div>
                                        {/* <img className='w-14 rounded-md' src="./d3ea8798-afe2-4d69-a7a9-f8626c2cb6c9.jpeg" alt="music cover" /> */}
                                        <img className='w-12 rounded-xl' src={Releases} alt="music cover" />
                                  </div>

                                  <div className='flex flex-col'>
                                        <span className='font-bold capitalize'>{musicName}</span>
                <span className='capitalize text-sm'> {artistName}</span>
                                        </div>
                            </div>

                            
                            <div className='mt-10'>
                              
                                  <h1 dangerouslySetInnerHTML={{ __html: html }} className='text-white text-lg font-bold'></h1>
                                  </div>

                            <div>
                                  <img className='w-24 mt-10' src="./ClipartKey_3235742.png" alt="" />
                                  </div>
                      </div>
                    
                </div>
                <button onClick={downloadImage} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" >
        Download as Image
      </button>
            </div>
  );
}

export default Canvas;
