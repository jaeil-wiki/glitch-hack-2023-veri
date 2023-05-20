import { styled } from "styled-components";
import { COLORS } from "../utils/colors";

type TagProps = {
    selected: boolean;
    data: string | null;
    onClick: () => void;
};

const Container = styled.div<Omit<TagProps, "data">>`
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 12px 14px;
    gap: 8px;

    background-color: ${(props) =>
        props.selected ? COLORS.blue_1 : COLORS.white};
    border: 2px solid ${COLORS.blue_1};
    border-radius: 40px;

    color: ${(props) => (props.selected ? COLORS.white : COLORS.blue_1)};
    font-size: 14px;
    font-weight: bold;
`;

function Tag(props: TagProps) {
    const { selected, data, onClick } = props;
    return <Container selected={selected} onClick={onClick}>{data}</Container>;
}

export default Tag;
