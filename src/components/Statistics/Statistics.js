import { StatisticsItem } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsItem>
      <li>Good: {good}</li>
      <li>Neutral :{neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total: {total}</li>
      <li>Positive feetback: {positivePercentage} </li>
    </StatisticsItem>
  );
};
