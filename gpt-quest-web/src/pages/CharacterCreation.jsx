import React, { useState, useEffect} from 'react';

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

    

    return (
        <Card className="w-full max-w-screen-md p-4 shadow-none" style={{ backgroundColor: "white" }}>
            <Typography variant="h5" color="blue-gray" className="mb-5">
                Choose your Class
            </Typography>
            <ButtonGroup className="gap-3.5 justify-center mb-4">
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
                            transition: 'background-color 0.3s',
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
                        onMouseEnter={() => handleButtonHover('orange')}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === 'orange' ? 'orange' : '',
                            transition: 'background-color 0.3s',
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
                        onMouseEnter={() => handleButtonHover('green')}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === 'green' ? 'green' : '',
                            transition: 'background-color 0.3s',
                            position: 'relative',
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
                        onMouseEnter={() => handleButtonHover("#ffeb3b")}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === "#ffeb3b" ? "#ffeb3b" : '',
                            transition: 'background-color 0.3s',
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
                        onMouseEnter={() => handleButtonHover('blue')}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === 'blue' ? 'blue' : '',
                            transition: 'background-color 0.3s',
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
                        onMouseEnter={() => handleButtonHover('purple')}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === 'purple' ? 'purple' : '',
                            transition: 'background-color 0.3s',
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
                    className="text-classes-bard "
                >
                    <Button
                        className="rounded-lg"
                        onMouseEnter={() => handleButtonHover('pink')}
                        onMouseLeave={() => handleButtonHover(null)}
                        style={{
                            backgroundColor: hoveredButton === 'pink' ? 'pink' : '',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        <GiGuitar color={"white"} style={{ fontSize: '2rem' }} />
                    </Button>
                </Tooltip>
            </ButtonGroup>
            <CardBody />
        </Card>
    );
}

export default CharacterCreation;
