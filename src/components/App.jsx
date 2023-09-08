
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import {FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { AppWrapper } from './App.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback() {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  hadlerFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.hadlerFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
        <GlobalStyle/>
      </AppWrapper>
    );
  }
}