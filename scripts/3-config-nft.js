import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.DAO_ADDRESS
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "First Class Gender Bending Badge",
        description: "This NFT will give you access to GenderDAO!",
        image: readFileSync("scripts/assets/nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()