import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from '../components/MainHeader'

// Styles
import '../styles/main-styles.css';


class MainViewScreen extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="main-view-container">
        <MainHeader />
        Hi mom!
      </div>
    );
  }

};

export default MainViewScreen;
