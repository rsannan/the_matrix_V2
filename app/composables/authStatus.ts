export const useAuthStatus = () => {
  const { $supabase:supabase } = useNuxtApp()
  const { data } = supabase.auth.onAuthStateChange((event: string) => {
    const events: Record<string, ()=> void> = {
      'PASSWORD_RECOVERY': () =>{
        navigateTo({name:'login-update-password'})
      }, 
      'INITIAL_SESSION':()=>{
        console.log('User has logged in')
      }
    }
      events[event]?.()
      })
  return { data }
}
