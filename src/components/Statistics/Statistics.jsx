import { StatisticsWrapper , StatisticsItem , StatisticsPositive} from "./Statistics.styled";



export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsWrapper>
      <StatisticsItem>
        <span>Good: </span>
        {good}
      </StatisticsItem>
      <StatisticsItem>
        <span>Neutral: </span>
        {neutral}
      </StatisticsItem>
      <StatisticsItem>
        <span>Bad: </span>
        {bad}
      </StatisticsItem>
      <StatisticsItem>
        <span>Total: </span>
        {total}
      </StatisticsItem>
      <StatisticsPositive>
        <span>Positive Feedback Percentage: </span>
        {positivePercentage} %
      </StatisticsPositive>
    </StatisticsWrapper>
  );
}