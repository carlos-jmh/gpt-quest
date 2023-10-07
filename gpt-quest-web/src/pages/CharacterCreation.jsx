import {Button, ButtonGroup, Card, CardBody, Typography} from "@material-tailwind/react";
import {
    Gi3DHammer,
    GiBowArrow,
    GiCursedStar, GiGuitar,
    GiHealthIncrease,
    GiRogue,
    GiWizardFace,
} from "react-icons/gi";


function CharacterCreation() {
    return (
        <Card className="w-full max-w-screen-md p-4 shadow-none">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-5">
                    Create your Character
                </Typography>
                <ButtonGroup className="gap-3.5 justify-center mb-4">
                    <Button className="rounded-lg"><Gi3DHammer color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiBowArrow color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiWizardFace color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiHealthIncrease color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiRogue color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiCursedStar color={"white"} style={{ fontSize: '2rem' }}/></Button>
                    <Button className="rounded-lg"><GiGuitar color={"white"} style={{ fontSize: '2rem' }}/></Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

export default CharacterCreation