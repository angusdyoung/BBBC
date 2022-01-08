import ReactLoading from "react-loading";

function BubblesLoader() {
  return (
    <div>
      <ReactLoading
        className="preloader"
        type="spinningBubbles"
        color="#ffffff"
      />
    </div>
  );
}
export default BubblesLoader;
