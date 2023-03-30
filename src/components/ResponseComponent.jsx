import { useSelector } from "react-redux";
import { LoadingComponent } from "./LoadingComponent";

export const ResponseComponent = () => {
  const { info, loadingInfo } = useSelector((state) => state.app);

  return (
    <>
      {info && (
        <div className="response-container">
          <pre>{JSON.stringify(info, null, 2)}</pre>
        </div>
      )}
    </>
  );
};
