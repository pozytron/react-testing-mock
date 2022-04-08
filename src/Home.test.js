import { render, screen } from "@testing-library/react";
import { Home } from "./Home/Home";

jest.mock("./AwesomeComponent", () => ({
  __esModule: true,
  AwesomeComponent: () => {
    const MockName = "named-awesome-component-mock";
    return <MockName />;
  }
}));

describe("Home ", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will render with mocked AwesomeComponent", () => {
    render(<Home />);

    expect(screen.getByTestId("mockedDataComponent")).toBeInTheDocument();
  });
});
