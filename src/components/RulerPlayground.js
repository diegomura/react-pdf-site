import React from 'react';
import styled, { css } from 'styled-components';
import { compose, withState } from 'recompose';
import Logo from './Logo';
import media from '../styled/media';

const Wrapper = styled.div`
  display: flex;
  margin: 84px 0px;
  align-items: center;
  justify-content: space-around;

  ${media.phone`
    margin: 72px 0px;
    flex-direction: column;
  `}
`;

const Playground = styled.div`
  order: 1;
  position: relative;

  ${media.phone`
    order: 2;
  `}
`;

const Page = styled.div`
  width: 350px;
  height: 450px;
  padding: 0px 50px;
  font-size: 3px;
  overflow: hidden;
  text-align: justify;
  background-color: #FFF;
  color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 50px 20px rgba(62,62,62,0.15);

  ${media.phone`
    width: 250px;
    height: 350px;
  `}
`;

const Inputs = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.phone`
    order: 1;
    margin-bottom: 48px;
  `}
`;

const Label = styled.label`
  display: flex;
  font-size: 16px;
  margin-bottom: 12px;
  align-items: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  padding: 9px;
  outline: none;
  margin-right: 12px;
  border-radius: 3px;
  position: relative;
  display: inline-block;
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);

  &:checked {
  	color: #99a1a7;
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
  }

  &:checked:after {
    content: "✔";
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #99a1a7;
  }
`;

const PageLogo = styled(Logo)`
  opacity: 0.1;
  padding: 50px;
`;

const PageText = styled.div`
  height: 157px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RulerPlayground = ({
  verticalRuler,
  horizontalRuler,
  setVerticalRuler,
  setHorizontalRuler
}) => (
  <Wrapper>
    <Playground>
      <Page>
        <PageLogo size="50px" />
        <PageText>If you need fine-grained control on proportions and where elements are rendered, you can use the Ruler props on Page to ease your work. This API enables you to define a fully customizable vertical and/or horizontal grid to visualize how elements arrange inside the page. For grid separation, you can specify both fixed or proportional values.</PageText>
      </Page>
      <Ruler orientation="vertical" visible={verticalRuler} />
      <Ruler orientation="horizontal" visible={horizontalRuler} />
    </Playground>
    <Inputs>
      <Label>
        <Checkbox
          checked={verticalRuler && horizontalRuler}
          onChange={() => {
            setVerticalRuler(!(verticalRuler && horizontalRuler));
            setHorizontalRuler(!(verticalRuler && horizontalRuler));
          }}
        />
        Ruler
      </Label>
      <Label>
        <Checkbox
          checked={verticalRuler}
          onChange={() => setVerticalRuler(!verticalRuler)}
        />
        Vertical Ruler
      </Label>
      <Label>
        <Checkbox
          checked={horizontalRuler}
          onChange={() => setHorizontalRuler(!horizontalRuler)}
        />
        Horizontal Ruler
      </Label>
    </Inputs>
  </Wrapper>
);

const RulerContainer= styled.div`
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  position: absolute;
  transition: all 0.5s;
  opacity: ${props => props.visible ? 1 : 0 };
  top: ${props => props.orientation === 'vertical' ? '-20px' : 0};
  left: ${props => props.orientation === 'horizontal' ? '-20px' : 0};
`;

const RulerBody = styled.div`
  background: white;

  ${props => props.orientation === 'vertical' && css`
    height: 20px;
    border-bottom: 1px solid gray;
  `}

  ${props => props.orientation === 'horizontal' && css`
    width: 20px;
    height: 100%;
    border-right: 1px solid gray;
  `}
`;

const RulerLine = styled.div`
  position: absolute;
  background-color: ${props => props.step !== 0 ? '#ababab' : 'transparent'};

  ${({ orientation, step }) => orientation === 'vertical' && css`
    top: 0px;
    width: 1px;
    bottom: 0px;
    left: ${step}px;

    &:before {
      top: 0px;
      left: 0px;
      font-size: 3px;
      content: "${step}";
      position: absolute;
      transform: scale(0.8);
    }
  `}

  ${({ orientation, step }) => orientation === 'horizontal' && css`
    left: 0px;
    right: 0px;
    height: 1px;
    top: ${step}px;

    &:before {
      top: 0px;
      left: 0px;
      font-size: 3px;
      content: "${step}";
      position: absolute;
      transform: scale(0.8);
    }
  `}
`;

const steps = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

const Ruler = ({ orientation, visible }) => (
  <RulerContainer orientation={orientation} visible={visible}>
    <RulerBody orientation={orientation} />
    {steps.map(step => (
      <RulerLine orientation={orientation} step={step} />
    ))}
  </RulerContainer>
);

export default compose(
  withState('verticalRuler', 'setVerticalRuler', true),
  withState('horizontalRuler', 'setHorizontalRuler', true),
)(RulerPlayground);
