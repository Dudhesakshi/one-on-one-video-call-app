import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoRoom = () => {
  const { id } = useParams();

  const meeting = async (element) => {
    if (!element) return;

    const appID = 1499163082;
    const serverSecret = "ed60fd2cff5a151f08c86646052d89b9";

    const kitToken =
      ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id,
        Date.now().toString(),
        "sakshi"
      );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost:5176/${id}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div
      ref={meeting}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default VideoRoom;