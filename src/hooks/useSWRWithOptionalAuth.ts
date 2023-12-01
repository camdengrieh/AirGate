import { useUserPublic } from "components/[guild]/hooks/useUser"
import useWeb3ConnectionManager from "components/_app/Web3ConnectionManager/hooks/useWeb3ConnectionManager"
import useSWR, { mutate, SWRResponse, unstable_serialize } from "swr"
import useSWRImmutable from "swr/immutable"
import { useFetcherWithSign } from "utils/fetcher"

type SWRSettings = Parameters<typeof useSWR>[2]

const useSWRWithOptionalAuth = <Data = any, Error = any>(
  url: string | null,
  options: SWRSettings = {},
  isMutable = false,
  onlyAuthRequest = true
): SWRResponse<Data, Error> & { isSigned: boolean } => {
  const useSWRHook = isMutable ? useSWR : useSWRImmutable

  const { isWeb3Connected } = useWeb3ConnectionManager()
  const { keyPair } = useUserPublic()

  const shouldSendAuth = !!keyPair && isWeb3Connected

  const fetcherWithSign = useFetcherWithSign()
  const authenticatedResponse = useSWRHook<Data, Error, any>(
    url && shouldSendAuth ? [url, { method: "GET", body: {} }] : null,
    fetcherWithSign,
    options as any
  )

  const publicResponse = useSWRImmutable<Data, Error, any>(
    url && !onlyAuthRequest && !authenticatedResponse.data ? url : null,
    options as any
  )

  return {
    data: authenticatedResponse.data ?? publicResponse.data,
    isLoading: authenticatedResponse.isLoading ?? publicResponse.isLoading,
    isValidating: authenticatedResponse.isValidating ?? publicResponse.isValidating,
    mutate: async (...args) => {
      const [mutatedAuthenticatedData, mutatedPublicData] = await Promise.all([
        authenticatedResponse.mutate(...args),
        publicResponse.mutate(...args),
      ])

      return mutatedAuthenticatedData ?? mutatedPublicData
    },
    error: authenticatedResponse.error ?? publicResponse.error,
    isSigned: !!authenticatedResponse.data,
  }
}

/**
 * We could do a mutate(url) here as well, but I removed it as it seemed unnecessary,
 * since the user is already authenticated, when we call this.
 */
const mutateOptionalAuthSWRKey = (url: string) =>
  mutate(unstable_serialize([url, { method: "GET", body: {} }]))

export { mutateOptionalAuthSWRKey }
export default useSWRWithOptionalAuth
