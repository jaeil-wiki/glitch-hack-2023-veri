import styled from "@emotion/styled";

type ColumnProps = {
    aCenter?: boolean;
    jCenter?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    children?: React.ReactNode;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Column({ aCenter, jCenter, fullWidth, fullHeight, children }: ColumnProps) {
    return (
        <Container
            style={{
                alignItems: aCenter ? "center" : "start",
                justifyContent: jCenter ? "center" : "start",
                width: fullWidth ? "100%" : "auto",
                height: fullHeight ? "100%" : "auto",
            }}>
            {children}
        </Container>
    );
}

export default Column;
