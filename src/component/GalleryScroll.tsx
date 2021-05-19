const GalleryScroll = (props:any) => {
    const loadImage = (imageName:any,folderName:any) => (require(`../image/${folderName}/${imageName}`).default);
    return(
        <div className="class-GalleryScroll">
            {props.nameMap.map((img_element:any,i:any) => <img key={i} src={loadImage(img_element,props.folderName)} alt={img_element}/>)}
        </div>
    )
}

export default GalleryScroll;