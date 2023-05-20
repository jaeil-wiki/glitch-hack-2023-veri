import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import { Spacer, Text } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import SizedBox from "../SizedBox";
import Column from "../Column";
import Row from "../Row";
import ImageLoader from "../ImageLoader";
import Image1 from "../../assets/imgs/Frame 13.png";
import Image2 from "../../assets/imgs/Frame 14.png";
import Image3 from "../../assets/imgs/Frame 15.png";
import Image4 from "../../assets/imgs/Frame 16.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    max-width: 686px;
    height: 724px;

    background: #ffffff;
    border-radius: 24px;
`;

const Border = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    max-width: 213px;
    height: 136px;

    background: ${COLORS.gray_f9};
    border-radius: 16px;
`;

const BottomBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    height: 236px;

    background-color: ${COLORS.gray_f9};
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
`;

const BottomButton = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 352px;
    height: 72px;
    background: ${COLORS.blue_3};
    border-radius: 40px;

    color: ${COLORS.white};

    font-size: 24px;
    font-weight: 500;
`;

function SubscribeModal(props: any) {
    return (
        <ModalWrapper onBackClick={props.onBackClick}>
            <Container>
                <SizedBox h={48} />
                <Text
                    fontSize={"32px"}
                    fontWeight={"500"}
                    color={COLORS.blue_3}
                    lineHeight={"100%"}>
                    Subscribe to enter
                </Text>

                <SizedBox h={4} />
                <Text
                    fontSize={"16px"}
                    fontWeight={"500"}
                    color={COLORS.gray_6c}
                    lineHeight={"100%"}>
                    and get full access to the thread
                </Text>

                <SizedBox h={54} />
                <Column fullWidth={true} jCenter={true} aCenter={true}>
                    <Row fullWidth={true} jCenter={true}>
                        <ImageLoader
                            w={"213px"}
                            h={"136px"}
                            round={"12px"}
                            src={Image1}
                        />

                        <SizedBox w={20} />

                        <ImageLoader
                            w={"213px"}
                            h={"136px"}
                            round={"12px"}
                            src={Image2}
                        />
                    </Row>

                    <SizedBox h={20} />
                    <Row fullWidth={true} jCenter={true}>
                        <ImageLoader
                            w={"213px"}
                            h={"136px"}
                            round={"12px"}
                            src={Image3}
                        />

                        <SizedBox w={20} />

                        <ImageLoader
                            w={"213px"}
                            h={"136px"}
                            round={"12px"}
                            src={Image4}
                        />
                    </Row>
                </Column>

                <Spacer />
                <BottomBorder>
                    <SizedBox h={20} />
                    <Text fontSize={'14px'} fontWeight={500} color={COLORS.gray_6c}>
                        Subscribe Fee
                    </Text>

                    <SizedBox h={4}/>
                    <Row fullWidth={true} aCenter={true} jCenter={true}>
                        <Text fontSize={'48px'} fontWeight={500} color={COLORS.blue_3}>
                            00.00
                        </Text>

                        <SizedBox w={8}/>
                        <Text fontSize={'14px'} fontWeight={500} color={COLORS.black}>
                            BFC/Week
                        </Text>
                    </Row>

                    <SizedBox h={16}/>
                    <BottomButton onClick={() => { window.location.href = '/rooms/1'}}>
                        Start Weekly Subscription
                    </BottomButton>
                </BottomBorder>
            </Container>
        </ModalWrapper>
    );
}

export default SubscribeModal;
