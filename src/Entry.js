import React from "react";
import events from "./events"

function Entry(props) {
    var hidden = false;

    function isPhoto(basketName) {
        var found;
        found = events.find((element) => {
            return element.name === basketName;
        });
        console.log(found);
        if (found === undefined) {
            return "https://i.pinimg.com/736x/33/2d/1c/332d1cf26d0825aee0882e64fd29f019.jpg";
        }
        else {
            return found.url;
        }
    }

    function handleToggle(event) {
        if (hidden === false) {
            hidden = true;
            var x = document.getElementById(props.id);
            x.style.visibility = "hidden";
        }
        else {
            hidden = false;
            var x = document.getElementById(props.id);
            x.style.visibility = "visible";
        }
    }

    function handleClick(event) {
        props.onDelete(props.id);
    }


    return (
        <div className="entry">
            <div className="align"><img src={isPhoto(props.name)}
                alt="apple" width="100" height="100" />
                <h1>Name: {props.name}</h1>
            </div>

            <p id={props.id}>${props.price}</p>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleToggle}>Toggle</button>


        </div>
    );

}

export default Entry;