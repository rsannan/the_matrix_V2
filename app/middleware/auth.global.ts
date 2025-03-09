export default defineNuxtRouteMiddleware(async (to) => {
const {isAuthenticated, user, getUserSession} = useSession()
await getUserSession()
console.log('authenticated', isAuthenticated.value)

console.log('user in middleware', user.value)
if(!isAuthenticated.value && to.path !== '/login')
  return '/login'

if(isAuthenticated.value && to.path === '/login')
  return '/'
})
