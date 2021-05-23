const NextPage = (props:any) => {
    return(
        <div className="class-nextPage">
            <div></div>
            <div>
                <button className={`${props.linkGitHub ? "" : "class-disabled"}`} title={props.titleGitHub}>
                    <a target="_blank" rel="noreferrer" href={props.linkGitHub}>
                        See on GitHub
                    </a>
                </button>
                <button  className={`${props.linkProyect ? "" : "class-disabled"}`} title={props.tittleProject}>
                    <a target="_blank" rel="noreferrer" href={props.linkProyect}>
                        See project
                    </a>
                </button>
            </div>
            <div>
                <p>Next Project</p>
                <button onClick={props.onClick}>
                    {props.namePage}
                </button>
            </div>
            <div>
                <img src={props.IMG_A} alt="IMG1"/>
                <img src={props.IMG_B} alt="IMG1"/>
                <img src={props.IMG_C} alt="IMG1"/>
            </div>
        </div>
    )
}

export default NextPage;