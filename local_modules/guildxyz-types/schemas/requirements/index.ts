import { toTupleType } from "../../utils";
import Alchemy from "./alchemy";
import Allowlist from "./allowlist";
import Captcha from "./captcha";
import Coin from "./coin";
import Contract from "./contract";
import Covalent from "./covalent";
import Discord from "./discord";
import Eas from "./eas";
import Email from "./email";
import Farcaster from "./farcaster";
import Form from "./form";
import Free from "./free";
import Fuel from "./fuel";
import Galaxy from "./galaxy";
import Gitcoin from "./gitcoin";
import Github from "./github";
import Guild from "./guild";
import GuildSnapshot from "./guildSnapshot";
import Lens from "./lens";
import Payment from "./payment";
import Poap from "./poap";
import Points from "./points";
import PolygonId from "./polygonId";
import Snapshot from "./snapshot";
import Twitter from "./twitter";
import Uniswap from "./uniswap";
import Web3Inbox from "./web3inbox";
import WorldID from "./worldid";

export default toTupleType([
  Free,
  ...Allowlist,
  ...GuildSnapshot,
  ...Email,
  ...Points,
  ...Guild,
  Web3Inbox,
  ...Twitter,
  ...Github,
  ...Fuel,
  Captcha,
  ...Eas,
  ...Farcaster,
  Payment,
  Contract,
  Coin,
  ...Gitcoin,
  Poap,
  ...PolygonId,
  ...Discord,
  ...Alchemy,
  ...Covalent,
  ...Lens,
  Galaxy,
  ...Snapshot,
  ...Form,
  Uniswap,
  WorldID,
]);
