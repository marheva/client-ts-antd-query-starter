import React from 'react';
import styled from 'styled-components';
import ButtonBase from './ButtonBase';

const ButtonStyled = styled(ButtonBase)``;
const ButtonPrimary = styled(ButtonStyled).attrs((props) => ({
    type: 'primary',
    ...props,
}))``

const ButtonSuccess = styled(ButtonStyled).attrs((props) => ({
    type: 'success',
    ...props,
}))``

const ButtonDanger = styled(ButtonStyled).attrs((props) => ({
    type: 'danger',
    ...props
}))``

const ButtonGhost = styled(ButtonStyled).attrs((props) => ({
    type: 'ghost',
    ...props,
}))``

const ButtonIcon = styled(ButtonStyled).attrs((props) => ({
    type: 'link',
    ...props,
}))``

ButtonStyled.displayName = 'CustomComponentStyledButton';
ButtonPrimary.displayName = 'CustomComponentStyledButtonPrimary';
ButtonSuccess.displayName = 'CustomComponentStyledButtonSuccess';
ButtonDanger.displayName = 'CustomComponentStyledButtonDanger';
ButtonGhost.displayName = 'CustomComponentStyledButtonGhost';
ButtonIcon.displayName = 'CustomComponentStyledButtonIcon';

export default ButtonStyled;
export { ButtonPrimary, ButtonSuccess, ButtonDanger, ButtonGhost, ButtonIcon }
