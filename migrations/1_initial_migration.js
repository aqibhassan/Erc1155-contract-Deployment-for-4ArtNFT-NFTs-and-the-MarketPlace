const FourArtNFT = artifacts.require("FourArtNFT");

module.exports = function (deployer) {
  deployer.deploy(FourArtNFT,"https://4art-nft-prelive.s3.eu-central-1.amazonaws.com/nft_files/{id}.json");
 
};
