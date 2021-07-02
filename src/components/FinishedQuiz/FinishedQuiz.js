import React from "react";
import styles from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styles[props.results[quizItem.id]]
                    ]
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}.</strong>&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}

            </ul>
            <p>Right answers: {successCount} of {props.quiz.length}</p>
            <div>
                {/*<button onClick={props.onRetry}>Repeat test</button>*/}
                <Button onClick={props.onRetry} type='primary'>Repeat test</Button>
                <Link to='/'>
                    <Button type='success'>All tests</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz;
