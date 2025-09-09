<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center min-h-screen py-16">
      <!-- Logo -->
      <div class="mb-8">
        <div class="mx-auto h-20 w-20 flex items-center justify-center bg-indigo-600 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-white">ND</h2>
        </div>
      </div>
      
      <!-- Hero Content -->
      <h1 class="title text-center text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        NovaDash
      </h1>
      <h2 class="subtitle text-center text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Professional Admin Dashboard Template
      </h2>
      <p class="text-center text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-12">
        Built with Vue.js, Nuxt.js, and Tailwind CSS. Features working Chart.js integration, 
        authentication pages, and a modern responsive design perfect for any admin application.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <nuxt-link 
          to="/dashboard" 
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <font-awesome-icon :icon="['fas', 'chart-bar']" class="mr-2 h-5 w-5" />
          View Dashboard
        </nuxt-link>
        
        <nuxt-link 
          to="/login" 
          class="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <font-awesome-icon :icon="['fas', 'user']" class="mr-2 h-5 w-5" />
          Demo Login
        </nuxt-link>
      </div>

      <!-- Features Grid -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <font-awesome-icon :icon="['fas', 'chart-line']" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interactive Charts</h3>
          <p class="text-gray-600 dark:text-gray-300">Chart.js integration with beautiful line charts, bar charts, and real-time data visualization.</p>
        </div>

        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <font-awesome-icon :icon="['fas', 'cog']" class="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fully Customizable</h3>
          <p class="text-gray-600 dark:text-gray-300">Built with Tailwind CSS for easy theming and customization. Change colors, fonts, and layout with ease.</p>
        </div>

        <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <font-awesome-icon :icon="['fas', 'users']" class="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Authentication Ready</h3>
          <p class="text-gray-600 dark:text-gray-300">Complete login and registration pages with form validation and demo functionality included.</p>
        </div>
      </div>

      <!-- Demo Credentials -->
      <div class="max-w-md w-full p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Demo Access</h3>
        <div class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <p><strong>Email:</strong> admin@novadash.com</p>
          <p><strong>Password:</strong> demo123</p>
        </div>
      </div>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>