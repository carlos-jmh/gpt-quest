import {Button, Card, CardBody, Input} from "@material-tailwind/react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Spinner} from "@material-tailwind/react";

function TypingEffect({obj, typingSpeed, onTypingComplete, callbackFlag}) {
    const [displayedContent, setDisplayedContent] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (obj.type === "text") {
            if (currentIndex < obj.story.length) {
                const timeoutId = setTimeout(() => {
                    setDisplayedContent((prevText) => prevText + obj.story[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }, typingSpeed);

                return () => clearTimeout(timeoutId);
            } else if (callbackFlag) {
                // Typing is complete, trigger the callback
                onTypingComplete();
            }
        }
    }, [currentIndex, obj, typingSpeed, onTypingComplete]);

    return (
        <div>
            {(obj.type === "img") ? (
                <img src={obj.story} width={"400px"} height={"400px"} alt={"auto-generated image"}/>
            ) : (
                <div>{displayedContent}</div>
            )}
        </div>
    );
}

function TypingContainer({centerChat, onTypingComplete, callbackFlag}) {
    return (
        <div>
            {centerChat.map((obj, index) => (
                <TypingEffect key={index} obj={obj} typingSpeed={20} onTypingComplete={onTypingComplete}
                              callbackFlag={callbackFlag}/>
            ))}
        </div>
    );
}

function QuestChat() {
    const {state} = useLocation();
    const {character_id} = state;
    const [storyId, setStoryId] = useState("")

    const [centerChat, setCenterChat] = useState([]);
    const [actionText, setActionText] = useState("")
    const [actionInputDisabled, setActionInputDisabled] = useState(true)
    const [isCallbackFlagOn, setIsCallbackFlagOn] = useState(false)

    const enableActionBox = () => {
        setActionInputDisabled(false)
    }

    const sendActionHandler = () => {
        setActionInputDisabled(true)
        setActionText("")

        fetch("http://localhost:8000/story/" + storyId + "/action", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            mode: "cors",
            body: JSON.stringify({action: actionText})
        }).then(response => {
            response.json().then(data => {
                setCenterChat((prevChat) => [...prevChat, {
                    story: data.event.story_bit + " " + data.event.prompt,
                    prompt: data.event.prompt,
                    type: "text"
                }]);
            })
        }).then(() => {
            setIsCallbackFlagOn(true)
        }).catch(error => {
            console.error("Could send action: " + error)
        })
    }

    useEffect(() => {
        if (storyId !== "") {
            sendActionHandler()
        }
    }, [storyId]);

    useEffect(() => {
        let ignore = false;
        fetch("http://localhost:8000/story/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            mode: "cors",
            body: JSON.stringify({character_id: character_id, story_length: 5})
        }).then(response => {
            response.json().then(data => {
                console.log(data)
                setStoryId(data.id)
                setCenterChat((prevChat) => [...prevChat, {
                    story: data.initial_story.introduction,
                    type: "text"
                }])
            })
        }).catch(error => {
            console.error("Could not start story: " + error)
        })

        return () => {
            ignore = true;
        };
    }, [character_id]);

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