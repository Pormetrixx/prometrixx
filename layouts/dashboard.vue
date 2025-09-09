<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
    <!-- Sidebar -->
    <div class="hidden md:flex md:w-64 md:flex-col">
      <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0 px-4 pb-5">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">NovaDash</h1>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 px-3 space-y-1">
          <nuxt-link 
            to="/dashboard" 
            class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/dashboard' }"
          >
            <font-awesome-icon :icon="['fas', 'home']" class="mr-3 h-4 w-4" />
            Dashboard
          </nuxt-link>
          
          <nuxt-link 
            to="/dashboard/analytics" 
            class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/dashboard/analytics' }"
          >
            <font-awesome-icon :icon="['fas', 'chart-bar']" class="mr-3 h-4 w-4" />
            Analytics
          </nuxt-link>
          
          <nuxt-link 
            to="/dashboard/users" 
            class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/dashboard/users' }"
          >
            <font-awesome-icon :icon="['fas', 'users']" class="mr-3 h-4 w-4" />
            Users
          </nuxt-link>
          
          <nuxt-link 
            to="/dashboard/settings" 
            class="flex items-center px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/dashboard/settings' }"
          >
            <font-awesome-icon :icon="['fas', 'cog']" class="mr-3 h-4 w-4" />
            Settings
          </nuxt-link>
        </nav>
        
        <!-- User Profile -->
        <div class="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-9 w-9 rounded-full" src="/images/avatars/avatar-1.svg" alt="User avatar">
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 dark:text-gray-300">John Doe</p>
              <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <div class="md:hidden">
      <div class="fixed inset-0 flex z-40" v-if="sidebarOpen">
        <div class="fixed inset-0" @click="sidebarOpen = false">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800">
          <!-- Mobile navigation content (same as desktop but mobile-friendly) -->
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button @click="sidebarOpen = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <font-awesome-icon :icon="['fas', 'times']" class="h-6 w-6 text-white" />
            </button>
          </div>
          <!-- Mobile nav content here -->
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Top header -->
      <header class="bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <!-- Mobile menu button -->
          <button @click="sidebarOpen = true" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <font-awesome-icon :icon="['fas', 'bars']" class="h-6 w-6" />
          </button>
          
          <!-- Search -->
          <div class="flex-1 max-w-xs md:max-w-lg">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <font-awesome-icon :icon="['fas', 'search']" class="h-5 w-5 text-gray-400" />
              </div>
              <input type="search" placeholder="Search..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>
          
          <!-- Right side actions -->
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <button class="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <font-awesome-icon :icon="['fas', 'bell']" class="h-5 w-5" />
            </button>
            
            <!-- Profile dropdown -->
            <div class="relative">
              <button class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <img class="h-8 w-8 rounded-full" src="/images/avatars/avatar-1.svg" alt="User avatar">
              </button>
            </div>
            
            <!-- Color mode picker -->
            <ColorModePicker />
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto">
        <div class="py-6">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false
    }
  }
}
</script>