import { useReducer } from "react";
import { FaSmile, FaSadCry, FaAngry, FaHeart } from "react-icons/fa";

const initialState = {
    mood: FaSmile,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "smile":
            return { mood: FaSmile };
        case "sadcry":
            return { mood: FaSadCry };
        case "angry":
            return { mood: FaAngry };
        case "love":
            return { mood: FaHeart };
        default:
            return state;
    }
};

function MyMood() {
    const [mood, dispatch] = useReducer(reducer, initialState);

    
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    };

    const buttonContainerStyle = {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "white",
        transition: "background-color 0.3s ease",
    };

    const buttonHoverStyle = {
        backgroundColor: "#0056b3",
    };
    const h1Style ={
        fontSize: "100px"
    };
    return (
        <div style={containerStyle}>
             <h1 style={h1Style}>{mood.mood()}</h1>
            <div style={buttonContainerStyle}>
            
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={() => {
                        dispatch({ type: "smile" });
                    }}
                >
                    Smile
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={() => {
                        dispatch({ type: "sadcry" });
                    }}
                >
                    Sad
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={() => {
                        dispatch({ type: "angry" });
                    }}
                >
                    Angry
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={() => {
                        dispatch({ type: "love" });
                    }}
                >
                    Love
                </button>
            </div>
        </div>
    );
}

export default MyMood;