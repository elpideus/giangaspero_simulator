import './Home.css';
import {useState} from "react";
import {Title} from "react-head"

export default function Home() {
    const answers = [
        "Momeeeeeeentooooo!!!!",
        "Ma che cosa stai diceeeendoooooo??",
        "Ciiiinque anniii!!!",
        "Se non spostate i banchi, le verifiche non ve le conseeegno",
        "Mome, mome, momeeeeeeeeeeeeeeeeeeeeento",
        "NOoOoOoOoOoOOo",
        "Tu! Tuuu!!!!",
        "Hai pauuuura!?",
        "Vi siete fatti intimidiiiiree!"
    ];
    const [answer, setAnswer] = useState("");
    const [alert, setAlert] = useState("none");
    const [alertMessage, setAlertMessage] = useState(<b>Devi inserire un messaggio!</b>);

    const updateScroll = () => {
        const element = document.getElementById("chat");
        element.scrollTop = element.scrollHeight;
    }

    return (
        <center>
            <Title>Giangaspero Simulator</Title>
            <div id="alert" style={{top: "0", display: alert, flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", height: "100%", width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "10"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "30%", width: "40%", backgroundColor: "white", borderRadius: "20px"}}>{alertMessage}<br/><br/><button style={{width: "100px", height: "50px"}} onClick={() => {setAlert("none")}}>Ok!</button></div>
            </div>
            <div style={{display: "flex", alignItems: "end", justifyContent: "center", position: "absolute", width: "100%", height: "90vh", zIndex: "-1", textAlign: "center", color: "#666666"}}><b>Giangaspero Simulator</b></div>
            <div id="chat" style={{display: "grid", gridTemplateColumns: "100%", alignItems: "end", height: "70vh", overflowY: "scroll", overflowX: "hidden", textAlign: "left", marginTop: "50px", boxShadow: "0px 0px 16px 16px rgba(0,0,0,0.2)"}}>{answer}</div>
            <br/>
            <form
                className="App"
                onSubmit={(e) => {
                    if (e.target["message"].value === undefined || e.target["message"].value === null || !e.target["message"].value) {
                        e.preventDefault()
                        setAlert("flex");
                    } else {
                        e.preventDefault();
                        setAnswer(
                            <>
                                {answer} <br/>
                                <div id="student" style={{display: "flex", justifyContent: "right"}}>
                                    <div className="bubble type1" style={{textAlign: "right"}}>
                                        {e.target["message"].value}
                                    </div>
                                </div>
                                <div id="professor" style={{display: "flex", justifyContent: "left"}}>
                                    <div className="bubble type2"
                                         style={{textAlign: "left", backgroundColor: "#14873c"}}>
                                        {answers[Math.floor(Math.random() * answers.length)]}
                                    </div>
                                </div>
                            </>
                        );
                        document.getElementById("message").value = "";
                        updateScroll();
                    }
                }
                }
                style={{maxWidth: "1200px" }}
            >
                <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                    <input autoComplete="off" id="message" placeholder="Scrivi qualcosa" style={{width: "60%", height: "50px", borderRadius: "20px", paddingLeft: "20px"}}></input>
                    <button type="submit" style={{width: "100px", height: "60px"}}>Invia</button>
                </div>
            </form>
        </center>
    );
}