import styled from "@emotion/styled";

type RowProps = {
    aCenter?: boolean;
    jCenter?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    children?: React.ReactNode;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

function Row({ aCenter, jCenter, fullWidth, fullHeight, children }: RowProps) {
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

export default Row;
