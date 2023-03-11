import { Component } from "react"
import css from "components/feedback/feedback.module.css"

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percentage: 0
    }

    handleChangeGood = () => {
        this.setState((prevState) => ({good: prevState.good + 1}))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleChangeNeutral = () => {
        this.setState((prevState) => ({neutral: prevState.neutral + 1}))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleChangeBad = () => {
        this.setState((prevState) => ({bad: prevState.bad + 1}))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({total: (prevState.good + prevState.neutral + prevState.bad)}))
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => ({percentage: Math.round((prevState.good / prevState.total * 100))}))
    }

    render() {
        return(
        <div className={css.conteiner}>
            <h1>Please leave feedback</h1>
            <div className={css.btncntr}>
                <button type="button" onClick={this.handleChangeGood}>Good</button>
                <button type="button" onClick={this.handleChangeNeutral}>Neutral</button>
                <button type="button" onClick={this.handleChangeBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
                <div className={css.stat}>
                    <span className={css.text}>Good: <span className={css.count}>{this.state.good}</span></span>
                    <span className={css.text}>Neutral: <span className={css.count}>{this.state.neutral}</span></span>
                    <span className={css.text}>Bad: <span className={css.count}>{this.state.bad}</span></span>
                    <span className={css.text}>Total: <span className={css.count}>{this.state.total}</span></span>
                    <span className={css.text}>Positive feedback: <span className={css.count}>{this.state.percentage}%</span></span>
                </div>
        </div>
    )}
}