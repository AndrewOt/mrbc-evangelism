import { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const RenderStatus = (status: Status): ReactElement => <div>{status}</div>;

export function Map() {
  return (
    <>
      <Wrapper
        apiKey="AIzaSyDDxmGd3H04nmumhP8LbHpbD2HEOMIkwFs"
        render={RenderStatus}
      >
        <Map />
      </Wrapper>
    </>
  );
}
