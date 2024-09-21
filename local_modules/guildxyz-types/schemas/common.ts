import { z } from "zod";
import {
  Chain,
  ContactType,
  ErrorMessages,
  GuildPinAction,
  GuildSortType,
  Logic,
  PlatformName,
  Visibility,
} from "../consts";

export const VisibilitySchema = z.enum(Visibility);

export const ChainSchema = z.enum(Chain);

export const PlatformNameSchema = z.enum(PlatformName);

export const EvmAddressSchema = z
  .string()
  .regex(/^0x[0-9a-f]{40}$/i, ErrorMessages.INVALID_ADDRESS)
  .toLowerCase();
// .transform((value) => value as `0x${string}`);

export const FuelAddressSchema = z
  .string()
  .regex(/^0x[0-9a-f]{64}$/i, ErrorMessages.INVALID_ADDRESS)
  .toLowerCase();
// .transform((value) => value as `0x${string}`);

export const AnyAddressSchema = EvmAddressSchema.or(FuelAddressSchema);

export const LogicSchema = z.enum(Logic);

export const GuildPinActionSchema = z.enum(GuildPinAction);

export const ContactTypeSchema = z.enum(ContactType);

export const GuildSortTypeSchema = z.enum(GuildSortType);

export const PositiveInteger = z.number().int().positive();
