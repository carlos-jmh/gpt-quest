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
    const [text, setText] = useState(null);
    
    const handleButtonHover = (color, className) => {
        setHoveredButton(color);
        setText(className);
    };

    /*const currentSelection = {
        class_name: str,
        number_events: int  
    };

    const changeClassName = (name) => { 
        currentSelection.class_name = name
    }
    
    const changeEventNumber = (number) => {
        currentSelection.number_events = number
    }*/


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
                                onClick={() => handleButtonHover('red')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('orange')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('green')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('#ffeb3b')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('blue')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('purple')}
                                onAbort={() => handleButtonHover(null)}
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
                                onClick={() => handleButtonHover('pink')}
                                onAbort={() => handleButtonHover(null)}
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
                        <Button>Small</Button>
                        <Button>Medium</Button>
                        <Button>Large</Button>
                    </ButtonGroup>
                <Button >Embark</Button>
            </Card>
            
        </div>
    );
}

export default CharacterCreation;
