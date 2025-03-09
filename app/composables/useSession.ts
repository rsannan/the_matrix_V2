export default function () {
  const { $supabase:supabase } = useNuxtApp()

const session = ref()
const user = computed(()=> session?.value?.user)
const isAuthenticated = computed(()=> !!session.value.session)
getUserSession()


async function getUserSession(){
  if(!session.value){
    const { data } = await supabase.auth.refreshSession()
    session.value = data
  }
}

  return {
    user,
    session,
    isAuthenticated,
    getUserSession
  }
}
