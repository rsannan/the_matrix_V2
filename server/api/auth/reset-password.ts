export default defineEventHandler(async (event) => {
  const {email}= await readBody(event)
  const supabase = event.context.supabase
  
  console.log('email =>',email)
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3737/login/update-password',
  })

  if(error )
    return error 
  
    return {
      message:'You have logged in successfully'
    }
})
