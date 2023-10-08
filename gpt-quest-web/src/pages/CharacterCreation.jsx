import React, { useState } from 'react';

import {
    Gi3DHammer,
    GiBowArrow,
    GiCursedStar, GiGuitar,
    GiHealthIncrease,
    GiRogue,
    GiWizardFace,
} from "react-icons/gi"; 

import {Button, ButtonGroup, Card, CardBody, Typography} from "@material-tailwind/react";

function CharacterCreation() {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleButtonHover = (color) => {
        setHoveredButton(color);
    };

    return (
        <Card className="w-full max-w-screen-md p-4 shadow-none" style={{ backgroundColor: "white" }}>
            <Typography variant="h5" color="blue-gray" className="mb-5">
                Choose your Class
            </Typography>
            <ButtonGroup className="gap-3.5 justify-center mb-4">
                <Button
                    className="rounded-lg"
                    onMouseEnter={() => handleButtonHover('red')}
                    onMouseLeave={() => handleButtonHover(null)}
                    style={{
                        backgroundColor: hoveredButton === 'red' ? 'red' : '',
                        transition: 'background-color 0.3s',
                    }}
                >
                    <Gi3DHammer color={"white"} style={{ fontSize: '2rem' }} />
                </Button>
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
                <Button
                    className="rounded-lg"
                    onMouseEnter={() => handleButtonHover('green')}
                    onMouseLeave={() => handleButtonHover(null)}
                    style={{
                        backgroundColor: hoveredButton === 'green' ? 'green' : '',
                        transition: 'background-color 0.3s',
                    }}
                >
                    <GiWizardFace color={"white"} style={{ fontSize: '2rem' }} />
                </Button>
                <Button
                    className="rounded-lg"
                    onMouseEnter={() => handleButtonHover('yellow')}
                    onMouseLeave={() => handleButtonHover(null)}
                    style={{
                        backgroundColor: hoveredButton === 'yellow' ? 'yellow' : '',
                        transition: 'background-color 0.3s',
                    }}
                >
                    <GiHealthIncrease color={"white"} style={{ fontSize: '2rem' }} />
                </Button>
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
                <Button
                    className="rounded-lg"
                    onMouseEnter={() => handleButtonHover('pink')}
                    onMouseLeave={() => handleButtonHover(null)}
                    style={{
                        backgroundColor: hoveredButton === 'pink' ? 'pink' : '',
                        transition: 'background-color 0.3s',
                    }}
                >
                    <GiBowArrow color={"white"} style={{ fontSize: '2rem' }} />
                </Button>
            </ButtonGroup>
            <CardBody />
        </Card>
    );
}

export default CharacterCreation;
