export default defineEventHandler(async (event) => {
  const {email, password}= await readBody(event)
  const supabase = event.context.supabase
  

  
  const { data ,error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if(authError )
    return authError 
  
    return {
      data: data.user,
      message:'You have logged in successfully'
    }
})
