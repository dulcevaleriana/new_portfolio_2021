const GalleryScroll = (props:any) => {
    return(
        <div className="class-GalleryScroll">
            {props.nameMap.map((img_element:any,i:any) => <img key={i} src={img_element} alt={img_element}/>)}
        </div>
    )
}

export default GalleryScroll;