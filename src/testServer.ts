import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?hasLabels=Y&withBreweries=Y&key=db7abcdf7017d2d68fa28774ea6a3cf0",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            abv: "1.0",
            createDate: "created date",
            id: "QzErT",
            isRetired: "Y",
            name: "Test Beer",
            nameDisplay: "Test",
            status: "Y",
            statusDisplay: "Y",
            style: {
              description: "This is a test beer..",
            },
            styleId: "123",
            updateDate: "update Date",
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
