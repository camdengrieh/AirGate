import { RequirementCreationPayloadSchema } from "../../schemas";
import testZodSchema from "../utils";
import alchemy from "./alchemy";
import allowlist from "./allowlist";
import captcha from "./captcha";
import coin from "./coin";
import contract from "./contract";
import covalent from "./covalent";
import discord from "./discord";
import eas from "./eas";
import farcaster from "./farcaster";
import form from "./form";
import free from "./free";
import fuel from "./fuel";
import galaxy from "./galaxy";
import gitcoin from "./gitcoin";
import github from "./github";
import guild from "./guild";
import lens from "./lens";
import payment from "./payment";
import poap from "./poap";
import points from "./points";
import polygonId from "./polygonId";
import snapshot from "./snapshot";
import twitter from "./twitter";
import unimplemented from "./unimplemented";
import web3inbox from "./web3inbox";
import worldid from "./worldid";

[
  allowlist,
  points,
  free,
  guild,
  web3inbox,
  twitter,
  github,
  unimplemented,
  fuel,
  captcha,
  eas,
  farcaster,
  payment,
  contract,
  coin,
  gitcoin,
  poap,
  polygonId,
  discord,
  alchemy,
  covalent,
  lens,
  galaxy,
  snapshot,
  form,
  worldid,
].forEach((data) =>
  testZodSchema({ ...data, schema: RequirementCreationPayloadSchema })
);
