import useGuild from "components/[guild]/hooks/useGuild"
import useShowErrorToast from "hooks/useShowErrorToast"
import { SignedValidation, useSubmitWithSign } from "hooks/useSubmit"
import useToast from "hooks/useToast"
import fetcher from "utils/fetcher"

const useDeleteRoleGroup = (groupId: number) => {
  const { id, mutateGuild } = useGuild()

  const toast = useToast()
  const showErrorToast = useShowErrorToast()

  const deleteRoleGroup = (signedValidation: SignedValidation) =>
    fetcher(`/v2/guilds/${id}/groups/${groupId}`, {
      ...signedValidation,
      method: "DELETE",
    })

  return useSubmitWithSign(deleteRoleGroup, {
    onSuccess: () => {
      toast({
        status: "success",
        title: "Successfully deleted page",
      })
      mutateGuild(
        (curr) => ({
          ...curr,
          groups: curr.groups.filter((group) => group.id !== groupId),
        }),
        { revalidate: false }
      )
    },
    onError: (error) => showErrorToast(error),
  })
}

export default useDeleteRoleGroup
