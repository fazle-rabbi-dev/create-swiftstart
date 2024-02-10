import FadeLoader from "react-spinners/ClipLoader";

export const PageLoader = ({ color }) => {
  return (
    <div className="">
      <FadeLoader
        color={color || "#181818"}
        // loading={loading}
        // cssOverride={override}
        size={44}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

