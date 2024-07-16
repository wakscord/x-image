import React, { useLayoutEffect, useRef, useState } from "react";
import { AbsoluteFill, Img } from "remotion";
import { z } from "zod";
import frame from "./assets/frame.svg";
import { memberData, members } from "./constants";
import "./fonts.css";
import { getAfreecaAvatar } from "./utils";

export const paramSchema = z.object({
  member: z.enum(members),
  message: z.string(),
  time: z.string(),
});

export const WakscordCard: React.FC<z.infer<typeof paramSchema>> = ({
  member,
  message,
  time,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(98);

  useLayoutEffect(() => {
    if (textRef.current) {
      const height = textRef.current.clientHeight;

      if (height < 300) {
        setFontSize(98);
      } else {
        setFontSize(65);
      }
    }
  }, []);

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "relative",
          top: 341,
          left: -520,
          textAlign: "center",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Pretendard Variable",
            fontWeight: 700,
            fontSize: 90,
          }}
        >
          {time}
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 568,
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          gap: 53,
        }}
      >
        <Img
          src={getAfreecaAvatar(memberData[member].afreeca)}
          width={430}
          style={{
            borderRadius: "50%",
          }}
        />
        <span
          style={{
            fontFamily: "Pretendard Variable",
            fontWeight: 500,
            fontSize: 95,
          }}
        >
          {member}
        </span>
      </div>

      <div
        style={{
          position: "relative",
          top: 1319,
          left: 241,
        }}
      >
        <div
          ref={textRef}
          style={{
            position: "relative",
            width: "fit-content",
            maxWidth: 1566,
            fontFamily: "Pretendard Variable",
            fontWeight: 500,
            fontSize,
            background: "#EEE",
            borderRadius: 99,
            padding: "50px 67px",
            wordBreak: "break-word",
          }}
        >
          {message}
          <div
            style={{
              position: "absolute",
              top: -20,
              right: -20,

              borderRadius: "50%",
              background: "#FF4947",
              width: 80,
              height: 80,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 60,
              }}
            >
              N
            </span>
          </div>
        </div>
      </div>

      <AbsoluteFill style={{ zIndex: -1 }}>
        <AbsoluteFill style={{ position: "absolute" }}>
          <Img src={memberData[member].background} />
        </AbsoluteFill>
        <AbsoluteFill style={{ position: "absolute" }}>
          <Img src={frame} />
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
