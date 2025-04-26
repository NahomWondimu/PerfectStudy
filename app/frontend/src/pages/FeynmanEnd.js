import { colors, borderRadius, boxShadow} from '../theme.js'

function FeynmanEnd({ data }){
    
    if (data === undefined || data === null) {
        return(
            <>
                <div
                    style={{
                    backgroundColor: colors.accent,
                    padding: "1rem",
                    borderRadius: borderRadius,
                    boxShadow: boxShadow,
                    marginBottom: "1rem",
                    }}
                >
                    <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[0]}</h3>
                    <p style={{ color: colors.text, marginTop: "0.5rem" }}>
                    Feedback: {feedBack[0]}
                    </p>
                </div>
                <div
                    style={{
                    backgroundColor: colors.accent,
                    padding: "1rem",
                    borderRadius: borderRadius,
                    boxShadow: boxShadow,
                    marginBottom: "1rem",
                    }}
                >
                    <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[1]}</h3>
                    <p style={{ color: colors.text, marginTop: "0.5rem" }}>
                    {feedBack[1]}
                    </p>
                </div>
                <div
                    style={{
                    backgroundColor: colors.accent,
                    padding: "1rem",
                    borderRadius: borderRadius,
                    boxShadow: boxShadow,
                    }}
                >
                    <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[2]}</h3>
                    <p style={{ color: colors.text, marginTop: "0.5rem" }}>
                    {feedBack[2]}
                    </p>
                </div> 
            </>
        ); 
    }

    console.log(data)

    const scores = data.map(e => e.score)
    const feedBack = data.map(e => e.response)


    return(
        <>
<<<<<<< HEAD
        <div
            style={{
            backgroundColor: colors.accent,
            padding: "1rem",
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            marginBottom: "1rem",
            }}
        >
            <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[0]}</h3>
            <p style={{ color: colors.text, marginTop: "0.5rem" }}>
            Feedback: {feedBack[0]}
=======
        <div>
            <h3>
                Score: {scores[0]}
            </h3>
            <p>
                {feedBack[0]}
>>>>>>> d3eb6269e024e25320c97e1adc6994a50fae45ce
            </p>
        </div>
        <div
            style={{
            backgroundColor: colors.accent,
            padding: "1rem",
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            marginBottom: "1rem",
            }}
        >
            <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[1]}</h3>
            <p style={{ color: colors.text, marginTop: "0.5rem" }}>
            {feedBack[1]}
            </p>
        </div>
        <div
            style={{
            backgroundColor: colors.accent,
            padding: "1rem",
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            }}
        >
            <h3 style={{ color: colors.primary, margin: 0 }}>Score: {scores[2]}</h3>
            <p style={{ color: colors.text, marginTop: "0.5rem" }}>
            {feedBack[2]}
            </p>
        </div>
        </>

    );

}

export default FeynmanEnd;