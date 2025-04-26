
function FeynmanEnd({ data }){
    
    if (data === undefined || data === null) {
        return null;
    }

    console.log(data)

    const scores = data.map(e => e.score)
    const feedBack = data.map(e => e.response)


    return(
        <>
        <div>
            <h3>
                {scores[0]}
            </h3>
            <p>
                {feedBack[0]}
            </p>
        </div>
        <div>
        <h3>
                {scores[1]}
            </h3>
            <p>
                {feedBack[1]}
            </p>
        </div>
        <div>
        <h3>
                {scores[2]}
            </h3>
            <p>
                {feedBack[2]}
            </p>
        </div>
        </>
    );

}

export default FeynmanEnd;