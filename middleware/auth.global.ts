export default defineNuxtRouteMiddleware(to => {
  const sid = useCookie('sid').value
  // Define public routes
  // const publicRoutes = ['/login', '/register']
  // // Check if the current route is public
  // if (isProduction && publicRoutes.includes(to.path)) {
  //   return
  // }

  // // Redirect to login if no token is found
  // if (!sid) {
  //   useAuthStore().clearAuth()
  //   return navigateTo('/login')
  // }
})
