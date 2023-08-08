function webchatInit (appConfig) {
  Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
    const { manager } = webchat;

    async function endChat () {
      // end chat session
      const state = manager.store.getState();
      if (state?.flex?.session?.channelSid) {
          const url = appConfig?.runtimeDomain + '/endChat';
          const body = { channelSid: state?.flex?.session?.channelSid };
          const options = { headers: { 'Content-Type': 'application/json' } };
          const response = await fetch(url, { ...options, method: "POST", body: JSON.stringify(body) });
          return response.json();
      }
    }

    function replaceCloseButton () {
      const defaultBtn = document.querySelector(".Twilio-Icon-Close > svg");
      defaultBtn.style.display = "none";
      const newBtn = document.createElement("button");
      newBtn.setAttribute("style", "display: inline-block; margin: 0; text-transform: none; padding: 3px 5px; border: 1px solid #C0392B; color: #C0392B; font-weight: bold; cursor: pointer; background: transparent; border-radius: 5px; width: auto;");
      newBtn.innerText = "End Chat";
      defaultBtn.parentElement.appendChild(newBtn);
    }

    Twilio.FlexWebChat.Actions.on("beforeStartEngagement", (payload) => {
      // set close button to end chat session
      Twilio.FlexWebChat.MainHeader.defaultProps.closeCallback = () => endChat();
      replaceCloseButton();
    });

    Twilio.FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
        try {
          const preEngagementResponses = payload.formData;
          if (!preEngagementResponses) return;
          const { channelSid } = manager.store.getState().flex.session;
          // manager
          //   .chatClient.getChannelBySid(channelSid)
          //   .then(channel => channel.sendMessage(JSON.stringify(preEngagementResponses)));
        } catch (err) {
            console.error(err);
        }
    });

    manager.strings.WelcomeMessage = appConfig?.welcomeMessage || "";
    manager.strings.PredefinedChatMessageAuthorName = "NAMI HelpLine";
    manager.strings.PredefinedChatMessageBody = appConfig?.predefinedChatMessageBody || "";
    manager.strings.MessageCanvasTrayContent = appConfig?.messageCanvasTrayContent;

    // UI changes
    Twilio.FlexWebChat.MainHeader.defaultProps.showImage = false;
    Twilio.FlexWebChat.MainHeader.defaultProps.titleText = "NAMI HelpLine";
    Twilio.FlexWebChat.MessagingCanvas.defaultProps.showTrayOnInactive = true;
    Twilio.FlexWebChat.MessageCanvasTray.defaultProps.showButton = true;


    // Render WebChat
    webchat.init();
  });
}

