import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

//import the token
const tokenModule = sdk.getTokenModule(
   process.env.TOKEN_ADDRESS
);

(async () => {
   try {
      //supply
      const amount = 1_000;
      //convert to 18 decimals
      const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
      //mint the tokens
      await tokenModule.mint(amountWith18Decimals);
      //get the total supply from thirdweb
      const totalSupply = await tokenModule.totalSupply();

      //print
      console.log(
         `There's now ${ethers.utils.formatUnits(totalSupply, 18)}
         $GENDER in circulation`
      );

      
   } catch(error) {
      console.error("Failed to print the money", error);
   }
})();