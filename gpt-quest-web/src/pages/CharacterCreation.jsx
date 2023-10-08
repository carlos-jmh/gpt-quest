import React, { useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';

import {
    Gi3DHammer,
    GiBowArrow,
    GiCursedStar, GiGuitar,
    GiHealthIncrease,
    GiRogue,
    GiWizardFace,
} from "react-icons/gi"; 

import {Button, ButtonGroup, Card, CardBody, Typography, Tooltip} from "@material-tailwind/react";

function CharacterCreation() {
    
    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [class_number, setClass] = useState(null);
    const [event_number, setEventNumber] = useState(null);

    const handleButtonHover = (color, class_number) => {
        setHoveredButton(color);
        setClass(class_number);
        console.log(class_number);
    };

    const handleHoveredEvent = (color, event_number) => {
        setHoveredEvent(color);
        setEventNumber(event_number);
        console.log(event_number);
    }



    return (
        <div style={{ justifyContent: 'center'}}>
            <h1 style={{color: "white" ,height: "25vh"}}>
                <Typewriter
                    options={{
                        autoStart: true,
                        pauseFor: 10000,
                        loop:true,
                        delay: 70,
                        strings: ["GptQuest"]
                    }}

                />
            </h1>
            <Card className="w-full max-w-screen-md p-7  shadow-none flex flex-col items-center gap-7" style={{ backgroundColor: "white" }}>
                <Typography variant="h5" color="black" className="mb-5">
                    Choose your Class
                </Typography>
                    <ButtonGroup className="gap-3.5 justify-center">
                        <Tooltip content="Barbarian" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-barbarian"
                        >
                            <Button
                                className="rounded-lg "
                                onClick={() => handleButtonHover('red', 0)}
                                onAbort={() => handleButtonHover(null, 0)}
                                style={{
                                    backgroundColor: hoveredButton === 'red' ? 'red' : '',
                                    borderColor: hoveredButton === 'red' ? 'red' : '',
                                    transition: 'all 0.3s',
                                    //transition: 'border-color 0.3s',
                                }}
                                data-tooltip-target="tooltip-light"
                                type="button"
                            >
                                <Gi3DHammer  color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Ranger" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-ranger"
                        >
                            <Button
                                className="rounded-lg"
                                onClick={() => handleButtonHover('orange', 1)}
                                onAbort={() => handleButtonHover(null, 1)}
                                style={{
                                    backgroundColor: hoveredButton === 'orange' ? 'orange' : '',
                                    borderColor: hoveredButton === 'orange' ? 'orange' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiBowArrow color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Druid" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-druid"
                        >
                            <Button
                                className="rounded-lg"
                                onClick={() => handleButtonHover('green', 2)}
                                onAbort={() => handleButtonHover(null, 2)}
                                style={{
                                    backgroundColor: hoveredButton === 'green' ? 'green' : '',
                                    borderColor: hoveredButton === 'green' ? 'green' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiWizardFace color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Cleric" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-cleric"
                        >
                            <Button
                                className="rounded-lg"
                                /*onMouseEnter={() => handleButtonHover("#ffeb3b")}
                                onMouseLeave={() => handleButtonHover(null)}*/
                                onClick={() => handleButtonHover('#ffeb3b', 3)}
                                onAbort={() => handleButtonHover(null, 3)}
                                style={{
                                    backgroundColor: hoveredButton === "#ffeb3b" ? "#ffeb3b" : '',
                                    borderColor: hoveredButton === '#ffeb3b' ? '#ffeb3b' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiHealthIncrease color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Rogue" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-rogue"
                        >
                            <Button
                                className="rounded-lg"
                                onClick={() => handleButtonHover('blue', 4)}
                                onAbort={() => handleButtonHover(null, 4)}
                                style={{
                                    backgroundColor: hoveredButton === 'blue' ? 'blue' : '',
                                    borderColor: hoveredButton === 'blue' ? 'blue' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiRogue color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Warlock" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-warlock"
                        >
                            <Button
                                className="rounded-lg"
                                /*onMouseEnter={() => handleButtonHover('purple')}
                                onMouseLeave={() => handleButtonHover(null)}*/
                                onClick={() => handleButtonHover('purple', 5)}
                                onAbort={() => handleButtonHover(null, 5)}
                                style={{
                                    backgroundColor: hoveredButton === 'purple' ? 'purple' : '',
                                    borderColor: hoveredButton === 'purple' ? 'purple' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiCursedStar color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Bard" 
                            animate={{
                                mount:{scale: 1, y: 0}, 
                                unmount: {scale:0, y:25},
                            }}
                            className="text-classes-bard"
                        >
                            <Button
                                className="rounded-lg"
                                /*onMouseEnter={() => 
                                    handleButtonHover('pink')
                                }
                                //onMouseLeave={() => handleButtonHover(null)}*/
                                onClick={() => handleButtonHover('pink', 6)}
                                onAbort={() => handleButtonHover(null, 6)}
                                style={{
                                    backgroundColor: hoveredButton === 'pink' ? 'pink' : '',
                                    borderColor: hoveredButton === 'pink' ? 'pink' : '',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <GiGuitar color={"white"} style={{ fontSize: '2rem' }} />
                            </Button>
                        </Tooltip>
                    </ButtonGroup>
                    <Typography variant="h5" color="black">
                        Length of Adventure
                    </Typography>
                    <ButtonGroup className='justify-center' >
                        <Button onClick={() => handleHoveredEvent('gray', 0)} onAbort={() => handleHoveredEvent(null, 0)}>Small</Button>
                        <Button onClick={() => handleHoveredEvent('gray', 1)} onAbort={() => handleHoveredEvent(null, 1)}>Medium</Button>
                        <Button onClick={() => handleHoveredEvent('gray', 2)} onAbort={() => handleHoveredEvent(null, 2)}>Large</Button>
                    </ButtonGroup>
                <Button onClick={() => console.log(event_number, class_number)}>Embark</Button>
            </Card>
            
        </div>
    );
}

export default CharacterCreation;
