import { Still } from "remotion";
import { paramSchema, WakscordCard } from "./WakscordCard";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="WakscordCard"
        component={WakscordCard}
        width={2048}
        height={2048}
        schema={paramSchema}
        defaultProps={{
          member: "고세구",
          message: "하이빵까루",
          time: "03:00",
        }}
      />
    </>
  );
};
