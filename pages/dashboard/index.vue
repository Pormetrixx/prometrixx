<template>
  <div>
    <!-- Page header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-6">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your business today.</p>
      </div>
    </div>

    <!-- Stats cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Users -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <font-awesome-icon :icon="['fas', 'users']" class="h-5 w-5 text-white" />
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Users</dt>
                  <dd class="text-lg font-medium text-gray-900 dark:text-white">{{ stats.totalUsers.toLocaleString() }}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm">
              <span class="text-green-600 dark:text-green-400 font-medium">+2.5%</span>
              <span class="text-gray-500 dark:text-gray-400"> from last month</span>
            </div>
          </div>
        </div>

        <!-- Revenue -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <font-awesome-icon :icon="['fas', 'dollar-sign']" class="h-5 w-5 text-white" />
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Revenue</dt>
                  <dd class="text-lg font-medium text-gray-900 dark:text-white">${{ stats.revenue.toLocaleString() }}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm">
              <span class="text-green-600 dark:text-green-400 font-medium">+5.2%</span>
              <span class="text-gray-500 dark:text-gray-400"> from last month</span>
            </div>
          </div>
        </div>

        <!-- Orders -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" class="h-5 w-5 text-white" />
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Orders</dt>
                  <dd class="text-lg font-medium text-gray-900 dark:text-white">{{ stats.orders.toLocaleString() }}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm">
              <span class="text-green-600 dark:text-green-400 font-medium">+3.1%</span>
              <span class="text-gray-500 dark:text-gray-400"> from last month</span>
            </div>
          </div>
        </div>

        <!-- Conversion Rate -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <font-awesome-icon :icon="['fas', 'chart-line']" class="h-5 w-5 text-white" />
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Conversion Rate</dt>
                  <dd class="text-lg font-medium text-gray-900 dark:text-white">{{ stats.conversionRate }}%</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-5 py-3">
            <div class="text-sm">
              <span class="text-red-600 dark:text-red-400 font-medium">-0.3%</span>
              <span class="text-gray-500 dark:text-gray-400"> from last month</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Revenue Chart -->
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Revenue Overview</h3>
          </div>
          <div class="p-6">
            <canvas ref="revenueChart" width="400" height="200"></canvas>
          </div>
        </div>

        <!-- Users Chart -->
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">User Growth</h3>
          </div>
          <div class="p-6">
            <canvas ref="usersChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
        </div>
        <div class="px-6 py-4">
          <div class="flow-root">
            <ul class="-mb-8">
              <li v-for="(activity, index) in recentActivity" :key="index">
                <div class="relative pb-8" :class="{ 'pb-0': index === recentActivity.length - 1 }">
                  <span v-if="index !== recentActivity.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-600"></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800" :class="activity.iconBg">
                        <font-awesome-icon :icon="activity.icon" class="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ activity.description }}</p>
                      </div>
                      <div class="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {{ activity.time }}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      stats: {
        totalUsers: 2543,
        revenue: 45230,
        orders: 1247,
        conversionRate: 3.24
      },
      recentActivity: [
        {
          description: 'New user registered',
          time: '2 minutes ago',
          icon: ['fas', 'user'],
          iconBg: 'bg-blue-500'
        },
        {
          description: 'Order #1247 completed',
          time: '15 minutes ago',
          icon: ['fas', 'shopping-cart'],
          iconBg: 'bg-green-500'
        },
        {
          description: 'Payment received $599',
          time: '1 hour ago',
          icon: ['fas', 'dollar-sign'],
          iconBg: 'bg-yellow-500'
        },
        {
          description: 'New support ticket',
          time: '2 hours ago',
          icon: ['fas', 'envelope'],
          iconBg: 'bg-red-500'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (process.client) {
        this.initCharts()
      }
    })
  },
  methods: {
    initCharts() {
      if (!this.$Chart) return

      // Revenue Chart
      const revenueCtx = this.$refs.revenueChart.getContext('2d')
      new this.$Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue',
            data: [30000, 35000, 32000, 38000, 42000, 45230],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '$' + value.toLocaleString()
                }
              }
            }
          }
        }
      })

      // Users Chart
      const usersCtx = this.$refs.usersChart.getContext('2d')
      new this.$Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'New Users',
            data: [320, 450, 380, 520, 610, 543],
            backgroundColor: 'rgba(16, 185, 129, 0.8)',
            borderColor: 'rgb(16, 185, 129)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  }
}
</script>