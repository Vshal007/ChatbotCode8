import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import BuildLinkList from "../components/LinkList/BuildLinkList";
import LearnLinkList from "../components/LinkList/LearnLinkList";
import CommunityLinkList from "../components/LinkList/CommunityLinkList";


const config = {
    botname: "LearningBot",
    initialMessages: [
        createChatBotMessage(`Hello world`, { widget: "learningOptions" }),

    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
     
        {
            widgetName: "buildLinks",
            widgetFunc: (props) => <BuildLinkList {...props} />,
            
        },

        {
            widgetName: "learnLinks",
            widgetFunc: (props) => <LearnLinkList {...props} />,
            props: {
                options: [
                    {
                        text: "What is learn",
                        // handler: actionProvider.handleCommunityList,
                        id: 1,
                    },
                    {
                        text: "Explore learn",
                        url:
                            "#",
                        id: 2,
                    },
                    {
                        text: "Get in touch",
                        url: "#",
                        id: 3,
                    },
                ],
            },
        },

        {
            widgetName: "communityLinks",
            widgetFunc: (props) => <CommunityLinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Community brief",
                        url:
                            "#",
                        id: 1,
                    },
                    {
                        text: "Explore community",
                        url:
                            "#",
                        id: 2,
                    },
                    {
                        text: "Join Community",
                        url: "#",
                        id: 3,
                    },
                ],
            },
        },
        
    ],
}

export default config
