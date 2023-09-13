
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import {FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { AppWrapper } from './App.styled';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((good / countTotalFeedback()) * 100);
  }

   const hadlerFeedback = type => {
   switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedback();


 
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={hadlerFeedback}
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