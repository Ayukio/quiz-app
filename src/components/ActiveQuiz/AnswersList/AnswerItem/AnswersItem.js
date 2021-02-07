import React, {Component} from "react";
import styles from './AnswersItem.module.scss'

const AnswersItem = props => {
    return (
        <li className={styles.AnswersItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem;
