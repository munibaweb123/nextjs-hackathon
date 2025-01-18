import ShipEngine from "shipengine";

const apiKey = process.env.SHIPENGINE_API_KEY;

if (!apiKey) {
  throw new Error("SHIPENGINE_API_KEY is not defined in the environment variables.");
}

const shipEngine = new ShipEngine(apiKey);



export {shipEngine};