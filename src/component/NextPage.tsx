const NextPage = (props:any) => {
    return(
        <div className="class-nextPage">
            <div>
                <img src={props.IMG_A} alt="IMG1"/>
                <img src={props.IMG_B} alt="IMG1"/>
                <img src={props.IMG_C} alt="IMG1"/>
            </div>
            <div>
                <p>Next Project</p>
                <h2 onClick={props.onClick}>{props.namePage}</h2>
            </div>
        </div>
    )
}

export default NextPage;