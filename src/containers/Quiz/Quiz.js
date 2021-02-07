import React, {Component} from "react";
import styles from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                rightAnswerId: 1,
                question: 'Sin of 30 degrees is equal to?',
                answers: [
                    {id: 1, text: '1/2'},
                    {id: 2, text: '1'},
                    {id: 3, text: '0'},

                ]
            },
            {
                id: 2,
                rightAnswerId: 2,
                question: 'Cos of 60 degrees is equal to?',
                answers: [
                    {id: 1, text: '1'},
                    {id: 2, text: '1/2'},
                    {id: 3, text: '0,6666'},

                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        console.log('AnswerId: ', answerId)

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finish')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {

        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Try to answer all the questions!</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;
