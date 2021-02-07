import React, {Component} from "react";
import styles from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
                <small>{props.answerNumber} of {props.quizLength}</small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}

            />
        </div>
    )


}

export default ActiveQuiz;
