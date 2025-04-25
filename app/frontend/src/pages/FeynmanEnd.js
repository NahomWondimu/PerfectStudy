
function FeynmanEnd(){

    const score = [100,100,100];
    const feedBack = ['feedback1','feedback2','feedback3'];

    return(
        <>
        <div>
            <h3>
                {score[0]}
            </h3>
            <p>
                {feedBack[0]}
            </p>
        </div>
        <div>
        <h3>
                {score[1]}
            </h3>
            <p>
                {feedBack[1]}
            </p>
        </div>
        <div>
        <h3>
                {score[2]}
            </h3>
            <p>
                {feedBack[2]}
            </p>
        </div>
        </>
    );

}

export default FeynmanEnd;