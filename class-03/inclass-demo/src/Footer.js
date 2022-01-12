import React from 'react';
import Card from 'react-bootstrap/Card';
import balloons from './images/balloons.jpg';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Card style={{ width: '80%' }} className="foot-card">
          <Card.Img
            variant="top"
            src={balloons}
            alt="hot air balloons scattered over a blue sky"
          />
          <Card.Text>
            Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on <a href="https://unsplash.com/s/photos/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

          </Card.Text>
          <Card.Footer>&copy;2022 rkgallaway</Card.Footer>
        </Card>
      </footer>
    );
  }
}

export default Footer;
