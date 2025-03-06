export default defineEventHandler(async (event) => {
  const { password}= await readBody(event)
  const supabase = event.context.supabase
  

  const {  error } = await supabase.auth.updateUser({
    password: password,
  })

  if(error )
    return error 
  
    return {
      message:'You have reset your password successfully'
    }
})
