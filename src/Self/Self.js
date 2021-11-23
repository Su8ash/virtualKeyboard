import React, { useEffect, useState } from 'react'
import './Self.css'

const Self = () => {


    const [inputText, setInputText] = useState("");

    const [capsLockPressed, setCapsLockPressed] = useState(false);

    const [shiftPressed, setshiftPressed] = useState(false);

 

    // const handleKeyUp = (event) => {
    //     // setshiftPressed(event.shiftKey);
    //     // console.log(`Yes ${event.shiftKey}`)


    //     if (event.code.toUpperCase() === 'SHIFTLEFT' || event.code.toUpperCase() === 'SHIFTRIGHT') {
    //         // setshiftPressed(event.shiftKey);
    //         console.log(`Yes  Keydown ${event.shiftKey}`)
    //     }
    // }

    const handleKeyPress = (event) => {
           

        setshiftPressed(false);
        // console.log(`CapsLOckPressed is ${event.getModifierState('CapsLock')}`);

        if (inputText === "") {
            setCapsLockPressed(event.getModifierState('CapsLock'));
        }

        switch(event.code.toUpperCase()) {
            case 'CAPSLOCK':
                setCapsLockPressed(event.getModifierState('CapsLock'));
                break;
            case 'BACKSPACE':
                setInputText(inputText.substr(0, inputText.length-1));
                break;
            case 'SHIFTLEFT' || 'SHIFTRIGHT':
                setshiftPressed(true);
                console.log(`Yes ${event.shiftKey}`)
                break;
            default:
                console.log(`I am printing ${event.key} and `);
                console.log(event);


                for (var i = 0; i < keyLayout.length; i++) {

                    var currentText = keyLayout[i].filter(element => element.id === event.code);
                    if (currentText.length > 0) {
                        console.log("============")
                        console.log(currentText);
                        var currentCase = capsLockPressed || shiftPressed ? currentText[0].upper : currentText[0].lower;
                        setInputText(
                            inputText + currentCase
                        );
                        return
                    }

                }
                
                break;
                            }

        }

    
    const onKeyClick = (textItem) => {
    

        setshiftPressed(false);

            var currentCase = capsLockPressed || shiftPressed ? textItem.upper : textItem.lower;
                        setInputText(
                            inputText + currentCase
                        );
    }
    
   const onSpecialKeyClick = (item) => {
           

        setshiftPressed(false);

        switch(item.id.toUpperCase()) {
            case 'CAPSLOCK':
                setCapsLockPressed(!capsLockPressed);
                break;
            case 'BACKSPACE':
                setInputText(inputText.substr(0, inputText.length-1));
                break;
            case 'SHIFTLEFT' || 'SHIFTRIGHT':
                // setshiftPressed(item.shiftKey);
                console.log(`Yes ${item.id}`)
                break;
            default:
                console.log(`I am printing ${item.id} and `);
                console.log(item);
                break;
                            }

        }

        const keyLayout = [
            [
                {
                id: "Backquote",
                size: 's',
                upper: '~',
                lower: '`',
                },
                {
                    id: 'Digit1',
                    size: 's',
                    upper: '!',
                    lower: '1',
                },
                {
                id: 'Digit2',
                size: 's',
                upper: '@',
                lower: '2',
                },
                {
                    id: 'Digit3',
                    size: 's',
                    upper: '#',
                    lower: '3',
                },
                {
                id: 'Digit4',
                size: 's',
                upper: '$',
                lower: '4',
                },
                {
                    id: 'Digit5',
                    size: 's',
                    upper: '%',
                    lower: '5',
                },
                {
                id: 'Digit6',
                size: 's',
                upper: '^',
                lower: '6',
                },
                {
                    id: 'Digit7',
                    size: 's',
                    upper: '&',
                    lower: '7',
                },
                {
                id: 'Digit8',
                size: 's',
                upper: '*',
                lower: '8',
                },
                {
                    id: 'Digit9',
                    size: 's',
                    upper: '(',
                    lower: '9',
                },
                {
                id: 'Digit0',
                size: 's',
                upper: ')',
                lower: '0',
                },
                {
                    id: "Minus",
                    size: 's',
                    upper: '_',
                    lower: '-',
                },
                {
                    id: 'Equal',
                    size: 's',
                    upper: '+',
                    lower: '=',
                },
                {
                    id: 'backspace',
                    size: 'm',
                    text: 'backspace',
                    position: "",
                },
            
            ],
            // Second row
            [
                {
                id: 'Tab',
                size: 'm',
                text: 'tab',
                position: "Left",
                },
                {
                    id: 'KeyQ',
                    size: 's',
                    upper: 'Q',
                    lower: 'q',
                },
                {
                id: 'KeyW',
                size: 's',
                upper: 'W',
                lower: 'w',
                },
                {
                    id: 'KeyE',
                    size: 's',
                    upper: 'E',
                    lower: 'e',
                },
                {
                id: 'KeyR',
                size: 's',
                upper: 'R',
                lower: 'r',
                },
                {
                    id: 'KeyT',
                    size: 's',
                    upper: 'T',
                    lower: 't',
                },
                {
                id: 'KeyY',
                size: 's',
                upper: 'Y',
                lower: 'y',
                },
                {
                    id: 'KeyU',
                    size: 's',
                    upper: 'U',
                    lower: 'u',
                },
                {
                id: 'KeyI',
                size: 's',
                upper: 'I',
                lower: 'i',
                },
                {
                    id: 'KeyO',
                    size: 's',
                    upper: 'O',
                    lower: 'o',
                },
                {
                id: "KeyP",
                size: 's',
                upper: 'P',
                lower: 'p',
                },
                {
                    id: "BracketLeft",
                    size: 's',
                    upper: '{',
                    lower: '[',
                },
                {
                    id: "BracketRight",
                    size: 's',
                    upper: '}',
                    lower: ']',
                },
                {
                    id: "Backslash",
                    size: 's',
                    upper: '|',
                    lower: '\\',
                },
            
            ],
            // Third row
                     [
                {
                id: 'CapsLock',
                size: 'l',
                text: 'caps lock',
                position: "Left",
                },
                {
                    id: 'KeyA',
                    size: 's',
                    upper: 'A',
                    lower: 'a',
                },
                {
                id: "KeyS",
                size: 's',
                upper: 'S',
                lower: 's',
                },
                {
                    id: 'KeyD',
                    size: 's',
                    upper: 'D',
                    lower: 'd',
                },
                {
                id: "KeyF",
                size: 's',
                upper: 'F',
                lower: 'f',
                },
                {
                    id: 'KeyG',
                    size: 's',
                    upper: 'G',
                    lower: 'g',
                },
                {
                id: "KeyH",
                size: 's',
                upper: 'H',
                lower: 'h',
                },
                {
                    id: 'KeyJ',
                    size: 's',
                    upper: 'J',
                    lower: 'j',
                },
                {
                id: "KeyK",
                size: 's',
                upper: 'K',
                lower: 'k',
                },
                {
                    id: 'KeyL',
                    size: 's',
                    upper: 'L',
                    lower: 'l',
                },
                {
                id: "Semicolon",
                size: 's',
                upper: ':',
                lower: ';',
                },
                {
                    id: "Quote",
                    size: 's',
                    upper: '"',
                    lower: "'",
                },
                {
                    id: "Enter",
                    size: 'xl',
                    position: 'Right',
                    text:'enter',
                },
            
            ],
            // Fourth row
            [
                {
                    id: "ShiftLeft",
                    size: 'xxl',
                    text: 'shift',
                    position: "Left",
                },
                {
                    id: 'KeyZ',
                    size: 's',
                    upper: 'Z',
                    lower: 'z',
                },
                {
                    id: "KeyX",
                    size: 's',
                    upper: 'X',
                    lower: 'x',
                },
                {
                    id: 'KeyC',
                    size: 's',
                    upper: 'C',
                    lower: 'c',
                },
                {
                    id: "KeyV",
                    size: 's',
                    upper: 'V',
                    lower: 'v',
                },
                {
                    id: 'KeyB',
                    size: 's',
                    upper: 'B',
                    lower: 'b',
                },
                {
                    id: "KeyN",
                    size: 's',
                    upper: 'N',
                    lower: 'n',
                },
                {
                    id: 'KeyM',
                    size: 's',
                    upper: 'M',
                    lower: 'm',
                },
                {
                    id: "Comma",
                    size: 's',
                    upper: '<',
                    lower: ',',
                },
                {
                    id: "Period",
                    size: 's',
                    upper: '>',
                    lower: '.',
                },
                {
                    id: "Slash",
                    size: 's',
                    upper: '?',
                    lower: '/',
                },
                {
                    id: 'ShiftRight',
                    size: 'xxl',
                    text: 'shift',
                    position: 'Right',
                },
            
            ],
            // Fourth row
            [
                {
                    id: "Key",
                    size: 'sm',
                    text: 'fn',
                    position: "Left",
                },
                {
                    id: "ControlLeft",
                    size: 'sm',
                    text: 'control',
                    position: "Left",
                },
                {
                    id: "AltLeft",
                    size: 'sm',
                    text: 'alt',
                    position: "Left",
                },
                {
                    id: "MetaRight",
                    size: 'm',
                    text: 'windows',
                    position: "Left",
                },
                {
                    id: "Space",
                    size: 'xxxl',
                    text: 'space',
                    position: "Right",
                },
                {
                    id: "MetaLeft",
                    size: 'm',
                    text: 'windows',
                    position: "Left",
                },
                {
                    id: "AltRight",
                    size: 'sm',
                    text: 'alt',
                    position: "Left",
                },
            
            ],
        ];

    
    
    const SmallBtn = ( item ) => (
        
        <div className = "keyBtn" key={item.id} onClick={() => onKeyClick(item)}>
                            
            <div className="keyBtn-row">
                <div className="keyBtn-front">
                    <div></div>
                    <div>{item.lower}</div>
                </div>
                <div className="keyBtn-back">
                    <div className="keyBtn-upperKey">
                        {item.upper}
                    </div>
                    <div className="keyBtn-lowerKey">

                        {item.lower}
                    </div>
                </div>
                                        
                <div className="keyBtn-wrapper"></div>
                                
            </div>
            
        </div>
    );
    
    
    const MediumBtn = (item) => (
        
        <div className={`keyBtn keyBtn-${item.size}  ${item.size === "xxl" && shiftPressed? 'shifted':''} `} key={item.id}  onClick={() => onSpecialKeyClick(item)}>
                            
        <div className="keyBtn-row">
        <div className="keyBtn-front">
                    <div></div>
            <div></div>
        </div>
        <div className="keyBtn-back">
                    <div className="keyBtn-upperKey">
                        {item.size === 'l' && capsLockPressed?<span className="dot"></span>:''}
            </div>
            <div className="keyBtn-lowerKey">
            </div>
        </div>
                                
                <div className={`keyBtn-wrapper${item.position}`}>
            {item.text}
        </div>
                            
            </div>
            
                        </div>
            );
    
        

    return (

        <div style={{ display: 'flex', height:"100vh", padding:"10px 0", justifyContent: 'space-between', alignItems:'center', flexDirection:'column'}}>
      {/* <input /> */}
            <div style={{width: "100vw", padding:'10px 20px', textAlign:'center'}}>
                <h2>Help: Key mapping completed upto certain points required to manage the special keys</h2>
      
                <textarea name="Text1" rows="5" id="one" onKeyDown={handleKeyPress}  autoFocus value={inputText} style={{minWidth: "80%", border: 'none',  }}></textarea>

            {/* <input type="text" id="one" onKeyDown={handleKeyPress} onKeyUp={handleKeyUp} autoFocus value={inputText} style={{minWidth: "20%", border: 'none', outline:'none', maxWidth:'80%',  }}/> */}
        </div>
            
        <div className="mainContainer">
            
        <div className="subContainer">
            {keyLayout.map((item, index) => {
                return (
                    <div className="flex-d" key={index}>
                        {item.map((item, index) => {
                                
                            switch(item.size) {
                                case 's':
                                    return SmallBtn(item);
                                case 'l':
                                    return MediumBtn(item)
                                default:
                                    return MediumBtn(item);
                            }
                                
                            
                        }
                            
                            
                            
                            
      )}
                    </div>
                );
            })}
                </div>
            </div>
            </div>
    )
}

export default Self
