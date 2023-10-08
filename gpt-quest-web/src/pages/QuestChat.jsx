import {Button, Card, CardBody, CardHeader, Input, Typography} from "@material-tailwind/react";


function QuestChat() {
    return (
        <div className="chat_bg"> 
            <Card className="p-4 shadow-none" color="transparent">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                <img className="w-1/2"
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
                </CardHeader>
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

        </div>
    )
}

export default QuestChat