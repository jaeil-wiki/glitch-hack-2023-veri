import styled from "@emotion/styled";

const Container = styled.div`
    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);

    z-index: 1300;
    overflow: hidden;
    transition: 0.2s;
`;

function ModalWrapper(props: any) {
    const { children, onBackClick } = props;
    return <Container>{children}</Container>;
}

export default ModalWrapper;
