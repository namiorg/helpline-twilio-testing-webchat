const appConfig = {
    accountSid: "",
    flexFlowSid: "",
    runtimeDomain: "",

    // MESSAGE SETTINGS

    // set the first message sent by NAMI HelpLine
    predefinedChatMessageBody: "Welcome to the NAMI HelpLine. We are here to help with your mental health questions or concerns, offer helpful resources, and share support and encouragement. If you are in crisis, text CRISIS. Before you proceed, please review our terms of use, linked above. If you understand and agree to the terms of use, text GO.",

    // set the welcome text at the top of the chat thread
    welcomeMessage: 'NAMI Helpline<br /><a href="https://www.nami.org/Terms-of-Use/NAMI-HelpLine-Terms-of-Service" target="_blank">Terms of Service</a><br /><br />Hours: 10AM - 10PM ET',

    // set the message displayed in the tray after chat session ends
    messageCanvasTrayContent: "<h6>Did we do a good job?</h6><p style=\"text-align:center;font-size:12px\">Please <a target='_' href='https://naminational.typeform.com/helpline#source=chat'>click here</a> to fill out a follow-up survey about your experience with the HelpLine.</p>",

    // set colours
    colorTheme: {
        baseName: "FlexLight",
        overrides: {
            EntryPoint: {
                Container: {
                    background: "#0c499c"
                }
            }
        }
    },
    context: {
      friendlyName: "Anonymous"
    },

    // pre-engagement form config
    startEngagementOnInit: false,
    preEngagementConfig: {
    // description: 'Welcome to the NAMI HelpLine! If you are in crisis, please call or text 988 to reach the 988 Suicide & Crisis Lifeline.',
    description: "This is a test widget.",
    fields: [
        {
            label: "Click the button below to begin a test session.",
            type: "InputItem",
            attributes: {
                name: "hide-me",
                type: "text",
                required: false,
                disabled: true
            }
        }
        /*
        {
            label: "Here is an example question with an unrequired short-text answer.",
            type: "InputItem",
            attributes: {
                name: "q1",
                type: "text",
                required: false
            }
        },
        {
            label: "Here is an example question with an unrequired long-text answer.",
            type: "TextareaItem",
            attributes: {
                name: "q2",
                type: "text",
                required: false,
                // placeholder: "test",
                rows: 5
            }
        },
        {
            label: "Here is an example question with a required option answer.",
            type: "SelectItem",
            attributes: {
                name: "q3",
                required: true,
                readOnly: false
            },
            options: [
                {
                    value: "pick me!",
                    label: "pick me!",
                    selected: true
                },
            ]
        },
        */
    ],
    submitLabel: "Start"
  }
}
