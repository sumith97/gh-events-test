import { string } from 'prop-types';

import './HelpBox.css';
//funny fellows
// yey let's check this out
//want to check other testcase
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
