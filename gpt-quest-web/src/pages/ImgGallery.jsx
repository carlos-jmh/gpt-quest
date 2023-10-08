function ImgGallery() {
    return(
        function GalleryContainer({img}) {
            return (
                <div>
                    {img.map((obj, index) => ( <img src="obj" alt="image" width={300} height={300}></img> ))}
                </div>
            );
        }
    )
}