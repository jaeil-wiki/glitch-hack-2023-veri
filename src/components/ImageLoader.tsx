type ImageLoaderProps = {
    w?: number | string;
    h?: number | string;
    src?: string;
    round?: number | string;
    props?: any;
};

function ImageLoader({ w, h, src, round = 0, ...props }: ImageLoaderProps) {
    return (
        <div {...props}>
            <img
                style={{ width: w, height: h, borderRadius: round }}
                src={src}></img>
        </div>
    );
}

export default ImageLoader;
