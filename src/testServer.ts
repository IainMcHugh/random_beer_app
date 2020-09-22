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
            nameDisplay: "Test Beer",
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
  ),
  rest.get(
    "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/QzErT/?key=db7abcdf7017d2d68fa28774ea6a3cf0",
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
            nameDisplay: "Test Beer",
            status: "Y",
            statusDisplay: "Y",
            style: {
              description: "This is a test beer..",
            },
            styleId: "123",
            updateDate: "update Date",
            available: {},
            availableId: 1,
            glass: {},
            glasswareId: 123,
            isOrganic: "Y",
            srm: {},
            srmId: 12,
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
