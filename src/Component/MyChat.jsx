import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
class Review extends Component {}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class MyChat extends Component {
  render() {
    return (
      <ChatBot
        // floating="true"
        headerTitle="One-Solution"
        recognitionEnable={true}
        // headerTitle="Speech Synthesis"
        // speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: "1",
            message: "Hello",

            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message:
              "Hello, Per Ronny What do you want to do today ?   1.Create Meeting request 2. Create Task Enter the choice",
            trigger: "4",
            // end: true,
          },
          {
            id: "4",
            user: true,
            trigger: "5",
          },
          {
            id: "5",
            user: true,
            end: true,
          },
          {
            id: "5",
            message: "Do you want to create Meeting for a Project ?",
            trigger: "6",
          },
          {
            id: "6",
            user: true,
            trigger: "7",
          },
          {
            id: "7",
            message:
              "That’s great !  Choose the project 1.The Great Effect 2.Avocado 3.Avangers",
            trigger: "8",
          },
          {
            id: "8",
            user: true,
            trigger: "9",
          },
          {
            id: "9",
            message:
              "Do you want to select Project Team members to join the meeting ?",
            trigger: "10",
          },
          {
            id: "10",
            user: true,
            trigger: "11",
          },
          {
            id: "11",
            message: "Do you want to create tasks",
            trigger: "12",
          },
          {
            id: "12",
            user: true,
            trigger: "13",
          },
          {
            id: "13",
            message: "Congratulations your meeting is created successfully!",
            end: true,
          },
        ]}
      />
    );
  }
}

export default MyChat;
