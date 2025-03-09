export default function () {
  const { $supabase:supabase } = useNuxtApp()

  const { data } = supabase.auth.onAuthStateChange((event: string) => {
    const events: Record<string, ()=> void> = {
      'PASSWORD_RECOVERY': () => navigateTo({name:'login-update-password'}), 
      'INITIAL_SESSION': ()=>{
        console.log('Initial session event')
      },
      "SIGNED_OUT": () => {
        console.log('User has logged out from auth event')
        navigateTo({name:'login'})
      },
      'SIGNED_IN': () => console.log('User has logged in from auth event')
    }
      events[event]?.()
      })
  return { data }
}
