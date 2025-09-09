# NovaDash - Professional Vue.js Admin Dashboard Template

🚀 **A modern, responsive admin dashboard template built with Vue.js, Nuxt.js, and Tailwind CSS.**

Perfect for CodeCanyon and other marketplace distribution. Features a complete admin interface with working charts, authentication pages, and professional design.

![NovaDash Dashboard](https://github.com/user-attachments/assets/b9d24255-2a55-424b-9403-252e9704755a)

## ✨ Features

### 🎨 Modern Design
- **Clean and Professional UI** - Carefully crafted interface following modern design principles
- **Dark Mode Support** - Built-in dark/light mode toggle with system preference detection
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Font Awesome Icons** - Complete icon library integrated and ready to use

### 📊 Dashboard Components
- **Interactive Charts** - Chart.js integration with line charts, bar charts, and more
- **Statistics Cards** - Beautiful metric cards with trend indicators
- **Recent Activity Feed** - Timeline component for activity tracking
- **Sidebar Navigation** - Collapsible sidebar with active state indicators

### 🔐 Authentication Pages
- **Login Page** - Professional login form with demo credentials
- **Register Page** - Complete registration form with validation
- **404 Error Page** - Custom error page with helpful navigation

### 🛠️ Technical Features
- **Vue.js 2** - Built on stable Vue.js framework
- **Nuxt.js** - Universal application with SSR support
- **Tailwind CSS** - Utility-first CSS framework for easy customization
- **Chart.js** - Modern charting library for data visualization
- **Font Awesome** - Comprehensive icon library
- **PWA Ready** - Progressive Web App capabilities included

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (LTS recommended)
- npm or yarn package manager

### Installation

1. **Download and extract** the template files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   NODE_OPTIONS="--openssl-legacy-provider" npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:3000`

### Demo Login
Use these credentials to access the dashboard:
- **Email**: `admin@novadash.com`
- **Password**: `demo123`

## 📁 Project Structure

```
novadash-admin-template/
├── assets/                 # CSS and static assets
├── components/             # Reusable Vue components
├── layouts/               
│   ├── dashboard.vue      # Admin dashboard layout
│   ├── default.vue        # Default layout
│   └── error.vue          # Error page layout
├── pages/
│   ├── dashboard/
│   │   └── index.vue      # Main dashboard page
│   ├── login.vue          # Login page
│   ├── register.vue       # Registration page
│   └── index.vue          # Landing page
├── plugins/
│   ├── fontawesome.js     # Font Awesome configuration
│   └── chart.client.js    # Chart.js configuration
├── static/
│   └── images/
│       └── avatars/       # Placeholder avatar images
└── nuxt.config.js         # Nuxt.js configuration
```

## 🎨 Customization Guide

### Colors and Theming
Customize the color scheme by editing `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          // ... add your brand colors
        }
      }
    }
  }
}
```

### Adding New Chart Types
Create new charts using Chart.js in your components:

```javascript
// Example: Adding a pie chart
new this.$Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  }
})
```

### Custom Icons
Add new Font Awesome icons in `plugins/fontawesome.js`:

```javascript
import { faNewIcon } from '@fortawesome/free-solid-svg-icons'
library.add(faNewIcon)
```

### Navigation Menu
Customize the sidebar navigation in `layouts/dashboard.vue`:

```vue
<nuxt-link 
  to="/your-new-page" 
  class="flex items-center px-2 py-2 text-sm font-medium..."
>
  <font-awesome-icon :icon="['fas', 'your-icon']" class="mr-3 h-4 w-4" />
  Your Page
</nuxt-link>
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:

```env
# Site Configuration
SITE_URL=https://yourdomain.com
BASE_URL=https://yourdomain.com

# API Configuration (for production)
API_URL=https://api.yourdomain.com
```

### Nuxt.js Configuration
Main configuration is in `nuxt.config.js`. Key areas:

- **Site metadata**: Update title, description, and meta tags
- **Build settings**: Configure for production deployment
- **Plugin registration**: Add new plugins and modules

## 📱 Pages Overview

### Dashboard (`/dashboard`)
- Main admin interface
- Statistics cards with metrics
- Interactive charts (revenue, user growth)
- Recent activity timeline
- Responsive sidebar navigation

### Login (`/login`)
- Professional login form
- Demo credentials provided
- Form validation
- Redirect to dashboard on success

### Register (`/register`)
- Complete registration form
- Password confirmation
- Terms and conditions checkbox
- Form validation and user feedback

### 404 Error (`/404`)
- Custom error page
- Navigation back to dashboard
- Support contact information
- Professional error messaging

## 🚀 Deployment

### Static Generation
Generate static files for hosting:

```bash
npm run generate
```

Deploy the `dist/` folder to any static hosting service.

### Universal Deployment
For server-side rendering:

```bash
npm run build
npm run start
```

### Recommended Hosting
- **Netlify** - Easy deployment with Git integration
- **Vercel** - Optimized for Nuxt.js applications
- **Digital Ocean** - VPS hosting for full control

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run generate` - Generate static site

### Code Style
The project includes ESLint and Prettier for code formatting:

```bash
npm run lint
npm run lint:fix
```

## 🎯 Use Cases

Perfect for:
- **Admin Dashboards** - Business management interfaces
- **Analytics Platforms** - Data visualization applications
- **SaaS Applications** - Software-as-a-Service admin panels
- **E-commerce Backends** - Online store management
- **CRM Systems** - Customer relationship management
- **Project Management** - Team collaboration tools

## 🛡️ Browser Support

- **Chrome** 70+
- **Firefox** 65+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** - iOS Safari, Chrome Mobile

## 📝 License

This template is licensed for commercial use. You can:
- ✅ Use in unlimited personal and commercial projects
- ✅ Modify and customize as needed
- ✅ Distribute as part of your applications
- ❌ Resell as a template or theme

## 🆘 Support

### Documentation
- Full documentation included in `/docs` folder
- Component examples and API references
- Step-by-step customization guides

### Community
- GitHub Issues for bug reports
- Feature requests welcome
- Active maintenance and updates

### Professional Support
For custom development or premium support:
- Email: support@novadash.com
- Response time: 24-48 hours
- Custom feature development available

---

## 🔄 Changelog

### Version 1.0.0
- ✨ Initial release
- 📊 Chart.js integration
- 🎨 Complete UI components
- 🔐 Authentication pages
- 📱 Responsive design
- 🌙 Dark mode support

---

**Made with ❤️ for the Vue.js community**

Transform your admin interface with NovaDash - the professional choice for modern web applications.