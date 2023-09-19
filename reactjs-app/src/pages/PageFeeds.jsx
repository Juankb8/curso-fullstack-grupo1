import React from 'react';
import Feed from '../components/Feed';
import { Link } from "react-router-dom";

function PageFeeds() {
    return (
        <div>
            <Link to="/">HOOKS</Link>
            <br />

            <Feed img="https://hips.hearstapps.com/hmg-prod/images/batman-1989-64085601a5abf.jpg"
                title="Batman se jubila"
                color="red"
                detail="Batman deja de perseguir a los villanos por su edad"></Feed>

            <Feed img="https://hips.hearstapps.com/hmg-prod/images/batman-1989-64085601a5abf.jpg"
                title="Batman se jubiló"
                color="green"
                detail="Batman deja de perseguir a los villanos por su edad y concretó su anuncio"></Feed>
        </div>
    );
}

export default PageFeeds;