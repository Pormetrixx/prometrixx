<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full text-center">
      <!-- Logo -->
      <div class="mx-auto h-16 w-16 flex items-center justify-center bg-indigo-600 rounded-xl mb-8">
        <h2 class="text-2xl font-bold text-white">ND</h2>
      </div>
      
      <!-- Error content -->
      <template v-if="error.statusCode === 404">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8">
          {{ error.message || "The page you're looking for doesn't exist or has been moved." }}
        </p>
      </template>
      <template v-else>
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">{{ error.statusCode || 'Error' }}</h1>
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Something went wrong</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8">
          {{ error.message || "We're experiencing some technical difficulties. Please try again later." }}
        </p>
      </template>
      
      <!-- Actions -->
      <div class="space-y-4">
        <nuxt-link 
          to="/dashboard" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
        >
          <font-awesome-icon :icon="['fas', 'home']" class="mr-2 h-4 w-4" />
          Go to Dashboard
        </nuxt-link>
        
        <div class="text-center">
          <button 
            @click="$router.go(-1)" 
            class="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
          >
            ← Go back
          </button>
        </div>
      </div>
      
      <!-- Additional help -->
      <div class="mt-12 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Need help?</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          If you believe this is an error, please contact our support team.
        </p>
        <div class="mt-3">
          <a 
            href="mailto:support@novadash.com" 
            class="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1 h-3 w-3" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: ['error']
}
</script>
