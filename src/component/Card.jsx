import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  border: 1px solid #a1a1a11c;
  max-width: 300px;
  margin-bottom: 32px;
  border-radius: 12px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 10px 0 #eee;
  background: ${(p) => p.bg};
`;

export const CardBox = styled(Card)`
  min-width: 300px;
  min-height: 300px;
  margin-right: 24px;
  border-radius: 12px;
  display: flex;
`;

export const CardHeader = styled.div`
  padding: 16px;
  margin-right: 8px;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CardItem = styled.div`
  display: flex;
  padding: 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: -1px;
`;

export const CardAvatar = styled.div`
  padding: 16px;
  height: ${(p) => p.size || 40}px;
  width: ${(p) => p.size || 40}px;
  background-image: url(${(p) => p.img});
  border-radius: 50px;
  background-color: #d09b9b;
`;
export const CardAction = styled.button`
  font-size: 40px;
  color: #ddd;
  width: 20px;
  height: 10px;
  white-space: break-spaces;
  line-height: 12px;
  background-color: transparent;
  border: 0;
  margin-top: 4px;
`;
export const CardBody = styled.div`
  flex: 1;
  padding: 8px 16px;
`;
