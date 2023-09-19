
import Colors from "../components/Colors";
import { Link } from "react-router-dom";

function PagesColors() {
    return (
        <div>
            <Link to="/">HOOKS</Link>
            <br />
            <Colors color='red' />
            <Colors color='blue' />
            <Colors color='#333' />
            <Colors color='green' />
            <Colors color='gray' />
        </div>
    );
}

export default PagesColors;
