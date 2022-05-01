import renderer from "react-test-renderer";
import Episode from "./Episode";

/* Creating a fake object to pass into the Episode component. */
const fakeEpisodeDetails = {
  episodeName: "Fake Name",
  coverImage: "Fake Image",
  summary: "Fake Description",
  releaseDate: "2014",
};

it("renders correctly", () => {
  const tree = renderer.create(<Episode {...fakeEpisodeDetails} />).toJSON();
  expect(tree).toMatchSnapshot();
});
