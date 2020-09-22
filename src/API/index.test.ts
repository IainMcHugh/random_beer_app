import { getRandomBeer, getBeerbyID } from ".";
import { server, rest } from "../testServer";

jest.setTimeout(30000);

test("getRandomBeer returns correctly", async () => {
  const rdmBeer = await getRandomBeer();
  expect(rdmBeer.nameDisplay).toBe("Test Beer");
});

test("getRandomBeer handles Error", async () => {
  server.use(
    rest.get(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?hasLabels=Y&withBreweries=Y&key=db7abcdf7017d2d68fa28774ea6a3cf0",
      (req, res, ctx) => {
        return res(ctx.status(404));
      }
    )
  );

  await expect(getRandomBeer()).rejects.toThrow("Request failed with status code 404");
});


test("getBeerById returns correctly", async () => {
  const beer = await getBeerbyID("QzErT");
  expect(beer.style.description).toBe("This is a test beer..")
})

test("getBeerById handles error", async () => {
  server.use(
    rest.get(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/QzErT/?key=db7abcdf7017d2d68fa28774ea6a3cf0",
      (req, res, ctx) => {
        return res(ctx.status(404));
      }
    )
  );

  await expect(getBeerbyID("QzErT")).rejects.toThrow("Request failed with status code 404");
})