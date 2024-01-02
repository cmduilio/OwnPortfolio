import React, {useState} from "react";
import './Card.css';

function Card({url, title, subtitle, description, grow, isVideo}) {
    const Style = !isVideo ? {} : {width: '30rem', height: '28rem'};
    const [hoverStyle, setHoverStyle] = useState(Style);
    const onHover = () => {
        setHoverStyle(grow ? {...Style, transform: "scale(1.3)"} : {...Style});
    }

    const mouseOut = () => {
        setHoverStyle({...Style})
    }

    return (
        <div className={"card"} style={hoverStyle} onMouseOver={onHover} onMouseOut={mouseOut}>
            {!isVideo && <div className={"card-image"} style={{backgroundImage: `url(${url}`}}/>}
            {isVideo && 
                <div style={{ position: 'relative' }}>
                    <h1 style={{ fontSize: '16px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white' }}>
                        {title}
                    </h1>
                    <video style={{ width: '30rem', height: '28rem', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
                        loop autoPlay muted disablePictureInPicture>
                        <source src={url} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            }
            {!isVideo && <div className={"card-title"}>{title}</div>}
            {!isVideo && <div className={"card-subtitle"}>{subtitle}</div>}
            {!isVideo && <div className={"card-description"}>{description}</div>}
        </div>
    )
}

export default Card;