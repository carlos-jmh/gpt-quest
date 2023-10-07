import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CharacterCreation from "./pages/CharacterCreation";
import { ThemeProvider } from "@material-tailwind/react";
import QuestChat from "./pages/QuestChat.jsx";
import './App.css'

function App() {


    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="character" element={<CharacterCreation/>}/>
                        <Route path="quest" element={<QuestChat />} />
                        {/*<Route path="contact" element={<Contact />} />*/}
                        {/*<Route path="*" element={<NoPage />} />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
