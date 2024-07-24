import Header from "./Header";
import Text from "./Text"
import Container from "@mui/material/Container";
import "./one.css";
import GetStarted from "./GetStarted";

export default function One() {
    return(
        <div className="bg-one">
            <div className="bg-one-inner">
                <Container>
                    <Header />
                    <div className="one">
                        <Text />
                        <GetStarted />
                    </div>
                </Container>
            </div>
        </div>
    );
}