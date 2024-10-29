"use client"
import React, { useState } from 'react';

function Page() {
  // State for each input field
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');

  return (
    <div>
     
<div className="mt-10 p-5 mb-10">
Hello, I have a problem, I sent {inputOne}rs to the upi address {inputTwo} {inputThree}  utr:{inputFour}
Parimatch - site.
But my money has not been deposited to the account of the site, please block the account of the scammers to prevent fraud and return my funds to me.

</div>

      <input 
        type="text" 
        placeholder="Type in box 1..." 
        value={inputOne} 
        onChange={(e) => setInputOne(e.target.value)} 
      />
      
      
      {/* Second Input */}
      <input 
        type="text" 
        placeholder="Type in box 2..." 
        value={inputTwo} 
        onChange={(e) => setInputTwo(e.target.value)} 
      />
     
      
      {/* Third Input */}
      <input 
        type="text" 
        placeholder="Type in box 3..." 
        value={inputThree} 
        onChange={(e) => setInputThree(e.target.value)} 
      />
    
      
      {/* Fourth Input */}
      <input 
        type="text" 
        placeholder="Type in box 4..." 
        value={inputFour} 
        onChange={(e) => setInputFour(e.target.value)} 
      />
     
    </div>
  );
}

export default Page;
