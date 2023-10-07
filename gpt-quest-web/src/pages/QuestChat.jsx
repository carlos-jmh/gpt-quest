import {Button, Card, CardBody, Input, Typography} from "@material-tailwind/react";


function QuestChat() {
    return (
        <Card className="w-full max-w-screen-md p-4 shadow-none bg-transparent">
            <CardBody className={""}>
                {/* Dynamic text area */}
                <Card className="h-96 mb-4" id="dynamic-text-area">
                    <Typography></Typography>
                </Card>

                {/* Text input and Send button */}
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-2xl">
                    <Input
                        label="Action"
                        className="pr-20"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button color="primary">Send</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default QuestChat