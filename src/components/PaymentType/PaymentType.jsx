import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './PaymentType.css';
import {
    POINT_COLOR,
    RADIO_TITLES,
    RADIO_VALUES,
    H4_CLASSNAME
} from './PaymentTypeConstants';

const PaymentType = (props) => {

    return (
        <>
        <h4 className={H4_CLASSNAME}>{RADIO_TITLES.FORM_TITLE}</h4>
        <RadioGroup onChange={props.onChangeValue} horizontal>
            <RadioButton pointColor={POINT_COLOR} value={RADIO_VALUES.DINHEIRO}>
                {RADIO_TITLES.DINHEIRO}
            </RadioButton>
            <RadioButton pointColor={POINT_COLOR} value={RADIO_VALUES.CARTAO_DEBITO}>
                {RADIO_TITLES.CARTAO_DEBITO}
            </RadioButton>
            <RadioButton pointColor={POINT_COLOR} value={RADIO_VALUES.CARTAO_CREDITO}>
                {RADIO_TITLES.CARTAO_CREDITO}
            </RadioButton>
        </RadioGroup>
        </>
    );
}

export default PaymentType