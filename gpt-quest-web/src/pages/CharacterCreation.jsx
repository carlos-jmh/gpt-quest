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

import {Button, ButtonGroup, Card, CardBody, Typography, Tooltip, button} from "@material-tailwind/react";

function CharacterCreation() {
    
    const [hoveredButton, setHoveredButton] = useState(null);
    const [text, setText] = useState(null);
    
    const handleButtonHover = (color, className) => {
        setHoveredButton(color);
        setText(className);
    };

    

    return (
        <div style={{ justifyContent: 'center'}}>
            <h1 style={{color: "white" ,height: "25vh"}}>
                <Typewriter
                    options={{
                        autoStart: true,
                        pauseFor: 10000,
                        loop:true,
                        delay: 70,
                        strings: ["GPTQuest"]
                    }}

                />
            </h1>
            <Card className="w-full max-w-screen-md p-7 shadow-none flex flex-col gap-5" style={{ backgroundColor: "white" }}>
                <Typography variant="h5" color="black">
                    Choose your Class
                </Typography>
                <div class="flex flex-row justify-between align-center">
                    <div>
                    <Tooltip content="Barbarian" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-barbarian"
                    >
                        <Button
                            className="rounded-lg "
                            onMouseEnter={() => handleButtonHover('red', 'barbarian')}
                            onMouseLeave={() => handleButtonHover(null, null)}
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
                    </div>
                    <div>
                    <Tooltip content="Ranger" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-ranger"
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover('orange')}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === 'orange' ? 'orange' : '',
                                borderColor: hoveredButton === 'orange' ? 'orange' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiBowArrow color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                    <div>
                    <Tooltip content="Druid" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-druid"
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover('green')}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === 'green' ? 'green' : '',
                                borderColor: hoveredButton === 'green' ? 'green' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiWizardFace color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                    <div>
                    <Tooltip content="Cleric" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-cleric"
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover("#ffeb3b")}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === "#ffeb3b" ? "#ffeb3b" : '',
                                borderColor: hoveredButton === '#ffeb3b' ? '#ffeb3b' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiHealthIncrease color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                    <div>
                    <Tooltip content="Rogue" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-rogue"
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover('blue')}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === 'blue' ? 'blue' : '',
                                borderColor: hoveredButton === 'blue' ? 'blue' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiRogue color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                    <div>
                    <Tooltip content="Warlock" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-warlock"
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover('purple')}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === 'purple' ? 'purple' : '',
                                borderColor: hoveredButton === 'purple' ? 'purple' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiCursedStar color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                    <div>
                    <Tooltip content="Bard" 
                        animate={{
                            mount:{scale: 1, y: 0}, 
                            unmount: {scale:0, y:25},
                        }}
                        className="text-classes-bard "
                    >
                        <Button
                            className="rounded-lg"
                            onMouseEnter={() => handleButtonHover('pink')}
                            onMouseLeave={() => handleButtonHover(null)}
                            style={{
                                backgroundColor: hoveredButton === 'pink' ? 'pink' : '',
                                borderColor: hoveredButton === 'pink' ? 'pink' : '',
                                transition: 'all 0.3s',
                            }}
                        >
                            <GiGuitar color={"white"} style={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                    </div>
                </div>
                <Typography variant="h5" color="black">
                    Length of Adventure
                </Typography>
                <ButtonGroup className='justify-center' >
                    <Button>Small</Button>
                    <Button>Medium</Button>
                    <Button>Large</Button>
                </ButtonGroup>
                <div class="flex flex-row justify-center align-center">
                    <Button>Embark</Button>
                </div>
            </Card>
            
        </div>
    );
}

export default CharacterCreation;
