type SizeBoxProps = {
    w?: number | string;
    h?: number | string;
    children?: React.ReactNode;
};

function SizedBox({ w, h = 'max-contents', children }: SizeBoxProps) {
    let width;
    if (typeof w === "number") {
        width = `${w}px`;
    } else {
        width = w;
    }
    let height;
    if (typeof h === "number") {
        height = `${h}px`;
    } else {
        height = h;
    }
    return (
        <div
            style={{ display: "flex", width: `${width}`, height: `${height}` }}>
            {children}
        </div>
    );
}

export default SizedBox;
