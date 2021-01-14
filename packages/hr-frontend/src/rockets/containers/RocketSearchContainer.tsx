import React, {  useState } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import { useRocketsPage } from "../redux/hooks";
import { actions as rocketActions, RocketConnection } from "../redux/model";
import RocketSearchGrid from "../views/RocketSearchGrid";

const RocketSearchContainer: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const rocketsRemoteData = useRocketsPage({
    limit: limit,
    offset: offset,
  });

  const dispatch = useDispatch();

  const reset = compose(dispatch, rocketActions.resetRocketsPage);

  const goBack = () => {
    reset();
    setLimit(10);
    setOffset(offset - limit);
  };

  const goForward = () => {
    reset();
    setLimit(10);
    setOffset(offset + limit);
  };

  if (typeof rocketsRemoteData === "string") {
    return <div>Fetching rockets...</div>;
  } else {
    if (rocketsRemoteData.rockets) {
      const rc = rocketsRemoteData as Required<RocketConnection>;

      return (
        <RocketSearchGrid
          rocketConnection={rc}
          goBack={goBack}
          goForward={goForward}
        />
      );
    } else {
      return <div>No rockets</div>;
    }
  }
};

export default RocketSearchContainer;
