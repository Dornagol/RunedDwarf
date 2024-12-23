const { expect } = require("chai");

describe("RunedDwarf", function () {
  let MonToken;
  let monToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    MonToken = await ethers.getContractFactory("RunedDwarf");
    monToken = await MonToken.deploy("RunedDwarf", "RDW", 1000000);
  });

  describe("Déploiment", function () {
    it("Have to attribute to the owner", async function () {
      const ownerBalance = await monToken.balanceOf(owner.address);
      expect(await monToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should be able to transfer tokens", async function () {
      await monToken.transfer(addr1.address, 50);
      expect(await monToken.balanceOf(addr1.address)).to.equal(50);
    });
  });
});