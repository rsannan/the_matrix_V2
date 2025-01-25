export default defineEventHandler(async (event) => {
  const {email, password, firstName, lastName}= await readBody(event)
const supabase = event.context.supabase


const { data ,error: authError } = await supabase.auth.signUp({
  email,
  password,
})
if(firstName || lastName){
  const {error: userError} = await supabase
  .from('users')
  .update({first_name:firstName.replaceAll("'", ''), last_name:lastName.replaceAll("'", '')})
  .eq('id', data?.user?.id)
  if(userError) return userError
}

if(authError )
  return authError 

  return {message:'You have signed up successfully'}
})
