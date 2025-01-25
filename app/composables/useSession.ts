export const useSession = () => {
  const user = ref(null)
function setUser(newUser: any ) {
  user.value = newUser
}
function clearUser(){
user.value = null
}
  return {
    user,
    setUser,
    clearUser
  }
}
